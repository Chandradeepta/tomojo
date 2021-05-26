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
