import request from "../js/dRequest";
import host from "../api/url";


// export const apiHome = (p, config) => request.post('/home', p, config);
const apiHome = (p, config) => request.post(host.dip + '/oauth/token', p, config);

export default {
  apiHome
}