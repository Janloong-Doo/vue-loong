import axios from "axios";
import qs from 'qs';

export default class AxiosUtil {

  static get(url, param) {

    param = param == null ? {} : {params: param};
    console.log(param);
    return new Promise((resolve, reject) => {
      axios.get(url, param).then(res => {
          resolve(res);
        }
      ).catch(res => {
        reject(res);
      });
    });
  }

  static post(url, param) {
    param = param == null ? {} : param;
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return new Promise((resolve, reject) => {
      axios.defaults.withCredentials = true;
      axios.post(url, qs.stringify(param), config)
        .then(res => {
          console.log("00");
          resolve(res)
        }).catch(res => {
          console.log("01");
        reject(res)
      })
    });
  }
}
