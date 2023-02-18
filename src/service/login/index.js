import request from "@/service/index";

const userlogin = (data) => {
  return request.post({
    url: "/api/zlhyLogin/login",
    data,
  });
};
const getUserInfo = (params, config) => {
  return request.get({
    url: "/api/zlhyUser/get",
    params,
    ...config,
  });
};
export { userlogin, getUserInfo };
