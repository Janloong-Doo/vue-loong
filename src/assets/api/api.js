import request from "../js/AxiosUtil";

export const apiHome = p => request.post('/home', p);
