import { CommonTypes } from "../Types/commonTypes";

const initialState = {
  snackBarOpen: false,
  snackBarMessage: "",
  snackBarType: "",
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CommonTypes.SHOW_NOTIFICATION_ASYNC: {
      return {
        ...state,
        snackBarOpen: true,
        snackBarMessage: action.message,
        snackBarType: action.snackType,
      };
    }
    case CommonTypes.CLEAR_SNACKBAR: {
      return {
        ...state,
        snackBarOpen: false,
        snackBarMessage: "",
        snackBarType: "",
      };
    }
    default: {
      return state;
    }
  }
};
export default commonReducer;
