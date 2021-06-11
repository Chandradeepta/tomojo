import { LandingPageTypes } from "../Types/landingPageTypes";

const initialState = {
  classPackages: [],
  competitivePackages: [],
};

const landingPageReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case LandingPageTypes.GET_PRICING_PACKAGES_ASYNC: {
      return {
        ...state,
        classPackages: value.ClassWise,
        competitivePackages: value.CompetitiveWise,
      };
    }

    default: {
      return state;
    }
  }
};
export default landingPageReducer;
