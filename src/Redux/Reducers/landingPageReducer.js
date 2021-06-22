import { landingPageTypes } from "../types/landingPageTypes";

const initialState = {
  classPackages: [],
  competitivePackages: [],
};

const landingPageReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case landingPageTypes.GET_PRICING_PACKAGES_ASYNC: {
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
