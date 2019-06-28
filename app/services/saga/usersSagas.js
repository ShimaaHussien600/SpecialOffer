import { call, put, select } from 'redux-saga/effects';
import API from '../API';
import { UserReducer } from '../reducers';

const { RegisterNewUserSuccess, UserLoginSuccess, GetAdvertiserInsightsSuccess, GetUserDetails, GetUserDetailsSuccess } = UserReducer;
const getToken = state => state.UserReducer.profile.Token;

export function* RegisterNewUserSaga(action) {
  try {
    const res = yield call(API.post, {
      url: `users/sign_up/?user_type=${action.userType}`,
      requestPayload: action.data
    });
    console.log('FLAG', 'RegisterNewUserSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'RegisterNewUserSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'RegisterNewUserSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(RegisterNewUserSuccess(action.data));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'RegisterNewUserSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'RegisterNewUserSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* sendEmailVerificationCodeSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `users/send_email_verification_code/?email=${action.data.email}`,
    });
    console.log('FLAG', 'sendEmailVerificationCodeSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'sendEmailVerificationCodeSaga', 'JSONresponse', JSONresponse);
  } catch (err) {
    console.log('FLAG', 'User Saga', 'sendEmailVerificationCodeSaga', 'catch', err);
  }
}

export function* UserLoginSaga(action) {
  try {
    const res = yield call(API.post, {
      url: 'users/login/',
      requestPayload: action.data
    });
    console.log('FLAG', 'UserLoginSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'UserLoginSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'UserLoginSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(UserLoginSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        yield put(GetUserDetails(JSONresponse.user_id, action.responseHandler));
        // action.responseHandler.onSuccess();
      } else {
        yield put(GetUserDetails(JSONresponse.user_id));
      }
    } else {
      console.log('FLAG', 'User Saga', 'UserLoginSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'UserLoginSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetAdvertiserInsightsSaga(action) {
  try {
    const Token = yield select(getToken);
    console.log('GetAdvertiserInsightsSaga', 'token', Token);
    const res = yield call(API.get, {
      url: 'users/advertiser_insights/',
      customHeaders: { Authorization: `Bearer ${Token}` },
    });
    console.log('FLAG', 'GetAdvertiserInsightsSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'GetAdvertiserInsightsSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetAdvertiserInsightsSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetAdvertiserInsightsSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetAdvertiserInsightsSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetAdvertiserInsightsSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetUserDetailsSaga(action) {
  try {
    const Token = yield select(getToken);
    console.log('GetAdvertiserInsightsSaga', 'token', Token);
    const res = yield call(API.get, {
      url: `users/${action.userID}`,
    });
    console.log('FLAG', 'GetUserDetailsSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'GetUserDetailsSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetUserDetailsSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetUserDetailsSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetUserDetailsSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetUserDetailsSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}
