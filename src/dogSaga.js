import { call, put, takeEvery } from "redux-saga/effects";
import { getDogsSuccess } from "./dogState";

function* dogSaga() {
  console.log("[saga] dogSaga start");
  yield takeEvery("dogs/getDogsFetch", workGetDogsFetch);
  console.log("[saga] dogSaga end");
}

function* workGetDogsFetch() {
  console.log("[saga] workGetDogsFetch start");
  const dogs = yield call(() => fetch("https://api.thedogapi.com/v1/breeds"));
  const formattedDogs = yield dogs.json();
  const formattedDogsShortened = formattedDogs.slice(0, 10);
  yield put(getDogsSuccess(formattedDogsShortened));
  console.log("[saga] workGetDogsFetch end");
}

export default dogSaga;
