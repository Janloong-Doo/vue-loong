import request from "../js/dRequest";
import host from "../api/url";


// export const apiHome = (p, config) => request.post('/home', p, config);
const getToken = (params, config) => request.post(host.dip + '/oauth/token', params, config);
const checkToken = (params, config) => request.post(host.dip + '/oauth/check_token', params, config);

export default {
  getToken
  , checkToken
}