import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import examScreenReducer from "./ExamScreenReducer";
import landingPageReducer from "./landingPageReducer";

const rootReducer = combineReducers({
  landingPageState: landingPageReducer,
  commonState: commonReducer,
  examScreenState: examScreenReducer
});
export default rootReducer;
