import { takeEvery } from 'redux-saga/effects';

import { types } from 'actions';
import addUserSaga from 'sagas/addUserSaga';


export default function* watchers() {
  yield takeEvery(types.ADD_USER, addUserSaga);
}