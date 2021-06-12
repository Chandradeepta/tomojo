import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import landingPageReducer from "./landingPageReducer";

const rootReducer = combineReducers({
  landingPageState: landingPageReducer,
  commonState: commonReducer,
});
export default rootReducer;
