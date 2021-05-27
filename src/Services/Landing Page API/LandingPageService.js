import http from "../API";

export const getStatistics = () => {
  return http
    .get("totQuest_Atest_User")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getAboutUs = () => {
  return http
    .get("about_Us")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
