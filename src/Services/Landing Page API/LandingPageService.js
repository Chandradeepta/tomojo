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

export const getPackagePricing = () => {
  return http
    .get("get_PackageData")
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      return { error };
    });
};

export const getTestimonials = () => {
  return http
    .get("get_Testimonials")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getPrivacyPolicy = () => {
  return http
    .get("privacy_Policy")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getTermsAndConditions = () => {
  return http
    .get("terms_Conditions")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getBlogs = () => {
  return http
    .get("get_Blog")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
