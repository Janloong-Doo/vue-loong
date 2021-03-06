import axios from "axios";
import qs from "qs";

const post = (url, param, config) => {
  param = param == null ? {} : param;
  let config2 = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // withCredentials: true
  };
  config = config == null ? {} : config2;
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(param), config)
      .then(res => {
        resolve(res)
      }).catch(res => {
      reject(res)
    })
  });
};

const get = (url, param, config) => {
  param = param == null ? {} : param;
  let config2 = {
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    // withCredentials: true
  };
  // param = param == null ? {} : qs.stringify(param)
  param = param == null ? {} : param;
  config = config == null ? {} : config;
  config.params = param;
  console.log(config);
  return new Promise((resolve, reject) => {
    axios.get(url, config)
      .then(res => {
        resolve(res)
      }).catch(res => {
      reject(res)
    })
  });
};
export default {
  post
  , get
};