import { call, take, put } from 'redux-saga/effects';
import addUserService from 'services/addUserService';
import { types } from 'actions';


export default function* addUserSaga(payload) {
    try {
        const response = yield call(addUserService, payload); // similar to await wait(2000);
        const { user } = response;
        yield put({ type: types.ADD_USER_SUCCESS, user});
      } 
      catch(error) {
        yield put({ type: types.ADD_USER_ERROR, error })
      }
}