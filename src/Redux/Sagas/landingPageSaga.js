import { call, put, takeLatest } from "redux-saga/effects";
import { getPackagePricing } from "../../Services/Landing Page API/LandingPageService";
import { commonTypes } from "../types/commonTypes";
import { LandingPageTypes } from "../types/landingPageTypes";

/*
    Fetching Pricing For Each Module
    Receives two objects for School 
    and Compititive type test pricing 
    model.
*/
function* getPricingPackages(action) {
  const { response, error } = yield call(getPackagePricing);
  if (response) {
    yield put({
      type: LandingPageTypes.GET_PRICING_PACKAGES_ASYNC,
      value: response.data.results,
    });
  } else if (error) {
    yield put({
      type: commonTypes.SHOW_NOTIFICATION_ASYNC,
      message: "Network Error",
      snackType: "error",
    });
  }
}

export function* watchGetPricingPackages() {
  yield takeLatest(LandingPageTypes.GET_PRICING_PACKAGES, getPricingPackages);
}
