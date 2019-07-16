import axios from "axios";
import qs from 'qs';

export default class AxiosUtil {

  static get(url, param, success, error) {

    param = param == null ? {} : {params: param};
    console.log(param);
    axios.get(url, param).then(
      function (response) {
        if (success) {
          success(response.data);
        }
      }
    ).catch(function (response) {
        if (response.response.status == '401') {
          sessionStorage.clear()
          error(response.data);
        }
        if (error) {
          error(response.data);
        }
      }
    )
  }

  static post(url, param, success, error) {
    param = param == null ? {} : param;
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };

    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(param), config)
        .then(res => {
          resolve(res)
        }).catch(res => {
        reject(res)
      })
    });
    // axios.post(url, qs.stringify(param), config)
    //   .then(function (response) {
    //     //console.log(response)
    //     if (success) {
    //       success(response.data);
    //     }
    //   })
    //   .catch(function (response) {
    //     if (response.response.status == '401') {
    //       sessionStorage.clear()
    //       error(response.data);
    //     }
    //     if (error) {
    //       error(response.data);
    //     }
    //   });
  }
}
