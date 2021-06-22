import { all, fork } from "redux-saga/effects";
import * as LandingPageSaga from "./landingPageSaga";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(LandingPageSaga),
    ].map(fork)
  );
}
