import { CommonTypes } from "../Types/commonTypes";
import { ExamScreenTypes } from "../Types/examScreenTypes";

const initialState = {
  currentQuestion: 1,
  spentTimeOnQuestion: "",
};

const examScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ExamScreenTypes.SET_CURRENT_QUESTION: {
      return {
        ...state,
        currentQuestion: action.questionNumber,
        spentTimeOnQuestion: action.time,
      };
    }
    default: {
      return state;
    }
  }
};
export default examScreenReducer;
