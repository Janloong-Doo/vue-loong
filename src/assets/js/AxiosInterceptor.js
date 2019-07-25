import axios from 'axios'
import {Message} from 'element-ui'

axios.interceptors.request.use(config => {
  // if (config.method === 'POST' || config.method === 'post') {
  //   config.withCredentials = true;
  // }
  return config;
}, err => {
  Message.error({message: '请求超时!'});
});
axios.interceptors.response.use(data => {
  console.log('1');
  console.log(data);
  console.log('2');
  if (data.status && data.status === 200 && data.data.status === 500) {
    console.log('3');
    Message.error({message: data.data.msg});
    return;
  }
  if (data.data.msg) {
    console.log('4');
    Message.success({message: data.data.msg});
  }
  return data.data;
}, err => {
    console.log('5');
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error({message: '服务器被吃了⊙﹏⊙∥'});
  } else if (err.response.status === 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  } else if (err.response.status === 401) {
    Message.error({message: err.response.data.msg});
  } else {
    if (err.response.data.msg) {
      Message.error({message: err.response.data.msg});
    } else {
      Message.error({message: '未知错误!'});
    }
  }
});