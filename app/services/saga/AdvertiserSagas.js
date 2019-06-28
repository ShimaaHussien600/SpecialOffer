import { call, put, select } from 'redux-saga/effects';
import API from '../API';
import { UserReducer, AdvertiserReducer } from '../reducers';

const { RegisterNewUserSuccess, UserLoginSuccess } = UserReducer;
const { GetActiveDiscountsSuccess, GetActiveOffersSuccess } = AdvertiserReducer;

const getToken = state => state.UserReducer.profile.Token;

export function* CreateDiscountSaga(action) {
  try {
    const Token = yield select(getToken);
    console.log('CreateDiscountSaga', 'token', Token);
    const res = yield call(API.post, {
      url: 'discounts/',
      customHeaders: { Authorization: `Bearer ${Token}` },
      requestPayload: action.data
    });
    console.log('FLAG', 'CreateDiscountSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'CreateDiscountSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'CreateDiscountSaga', 'res.ok', 'JSONresponse', JSONresponse);
      //   yield put(RegisterNewUserSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'CreateDiscountSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'CreateDiscountSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* CreateOfferSaga(action) {
  try {
    const Token = yield select(getToken);
    console.log('CreateOfferSaga', 'token', Token);
    const res = yield call(API.post, {
      url: 'offers/',
      customHeaders: { Authorization: `Bearer ${Token}` },
      requestPayload: action.data
    });
    console.log('FLAG', 'CreateOfferSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'CreateOfferSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'CreateOfferSaga', 'res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'CreateOfferSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'CreateOfferSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetActiveDiscountsSaga(action) {
  try {
    const Token = yield select(getToken);
    const res = yield call(API.get, {
      url: 'discounts/my_discounts',
      customHeaders: { Authorization: `Bearer ${Token}` },
    });
    console.log('FLAG', 'GetActiveDiscountsSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'GetActiveDiscountsSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetActiveDiscountsSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetActiveDiscountsSuccess(JSONresponse.results));      
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetActiveDiscountsSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetActiveDiscountsSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetActiveOffersSaga(action) {
  try {
    const Token = yield select(getToken);
    const res = yield call(API.get, {
      url: 'offers/my_offers',
      customHeaders: { Authorization: `Bearer ${Token}` },
    });
    console.log('FLAG', 'GetActiveOffersSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'GetActiveOffersSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetActiveOffersSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetActiveOffersSuccess(JSONresponse.results));      
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetActiveOffersSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetActiveOffersSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}