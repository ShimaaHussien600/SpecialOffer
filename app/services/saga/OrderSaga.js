import { call, put, select } from 'redux-saga/effects';
import API from '../API';
import { OrderReducer } from '../reducers';

const { GetcategoriesSuccess, 
  GetOfferDetailSuccess, GetOfferesEndSoonSuccess, GetBestOfferesSuccess, GetCatBestOfferesSuccess, GetNewOfferesSuccess,
  GetDiscountDetailSuccess, GetDiscountsEndSoonSuccess, GetBestDiscountsSuccess, GetCatBestDiscountsSuccess, GetNewDiscountsSuccess,
  GetTopAdsSuccess, GetBottomAdsSuccess  } = OrderReducer;
const getToken = state => state.UserReducer.profile.Token;

export function* GetcategoriesSaga(action) {
  try {
    const Token = yield select(getToken);
    console.log('CreateDiscountSaga', 'token', Token);
    const res = yield call(API.get, {
      url: 'categories/',
    });
    console.log('FLAG', 'GetcategoriesSaga', 'res', res);
    const JSONresponse = yield res.json();
    console.log('FLAG', 'GetcategoriesSaga', 'JSONresponse', JSONresponse);

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetcategoriesSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetcategoriesSuccess(JSONresponse.results));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetcategoriesSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetcategoriesSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

// ---------------------------------- OFFERS ----------------------------------
export function* GetOffersWithFilterSaga(action) {
  try {
    let filterType = ''
    if(action.orderBy === 'best'){
      filterType = '?order_by=most_visited'
    }
    else if(action.orderBy === 'new'){
      filterType = ''
    }
    else{
      filterType = action.orderBy
    }
    const res = yield call(API.get, {
      url: `offers/${filterType}`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetOffersWithFilterSaga', 'res.ok', 'JSONresponse', JSONresponse);
      if(action.orderBy === 'best'){
        yield put(GetBestOfferesSuccess(JSONresponse.results));
      }
      else if(action.orderBy === 'new'){
        yield put(GetNewOfferesSuccess(JSONresponse.results));
      }
      else{
        yield put(GetCatBestOfferesSuccess(JSONresponse.results));
      }
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetOffersWithFilterSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetOffersWithFilterSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetOfferDetailSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `offers/${action.orderID}`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetOfferDetailSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetOfferDetailSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetOfferDetailSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetOfferDetailSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetOfferesEndSoonSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `offers/?end_soon=true`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetOfferesEndSoonSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetOfferesEndSoonSuccess(JSONresponse.results));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetOfferesEndSoonSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetOfferesEndSoonSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}


//----------------------------------- Discounts --------------------------------------------
export function* GetDiscountsWithFilterSaga(action) {
  try {
    let filterType = ''
    if(action.orderBy === 'best'){
      filterType = '?order_by=most_visited'
    }
    else if(action.orderBy === 'new'){
      filterType = ''
    }
    else{
      filterType = action.orderBy
    }
    const res = yield call(API.get, {
      url: `discounts/${filterType}`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', 'res.ok', 'JSONresponse', JSONresponse);
      if(action.orderBy === 'best'){
        yield put(GetBestDiscountsSuccess(JSONresponse.results));
      }
      else if(action.orderBy === 'new'){
        yield put(GetNewDiscountsSuccess(JSONresponse.results));
      }
      else{
        yield put(GetCatBestDiscountsSuccess(JSONresponse.results));
      }
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetDiscountDetailSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `discounts/${action.orderID}`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetDiscountDetailSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetDiscountDetailSuccess(JSONresponse));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetDiscountDetailSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetDiscountDetailSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

export function* GetDiscountsEndSoonSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `discounts/?end_soon=true`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetDiscountsEndSoonSaga', 'res.ok', 'JSONresponse', JSONresponse);
      yield put(GetDiscountsEndSoonSuccess(JSONresponse.results));
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetDiscountsEndSoonSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetDiscountsEndSoonSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}

//-------------------------------------------- ADS --------------------------------
export function* GetAdsSaga(action) {
  try {
    const res = yield call(API.get, {
      url: `ads/?position=${action.position}`,
    });
    const JSONresponse = yield res.json();

    if (res.ok) {
      console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', 'res.ok', 'JSONresponse', JSONresponse);
      if(action.position === 'Top'){
        yield put(GetTopAdsSuccess(JSONresponse.results));
      }
      else if(action.position === 'Buttom'){
        yield put(GetBottomAdsSuccess(JSONresponse.results));
      }
      if (action.responseHandler && action.responseHandler.onSuccess) {
        action.responseHandler.onSuccess();
      }
    } else {
      console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', '!res.ok', 'JSONresponse', JSONresponse);
      if (action.responseHandler && action.responseHandler.onFail) {
        action.responseHandler.onFail(JSONresponse);
      }
    }
  } catch (err) {
    console.log('FLAG', 'User Saga', 'GetDiscountsWithFilterSaga', 'catch', err);
    if (action.responseHandler && action.responseHandler.onFail) {
      action.responseHandler.onFail(err);
    }
  }
}