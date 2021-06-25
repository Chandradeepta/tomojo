import http from "../API";

export const checkPhoneExist = (phone) => {
  return http
    .get("checkMobExist", {
      params: {
        phone,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
