
import { all, takeLatest } from 'redux-saga/effects';
// import es6promise from 'es6-promise';
import { UserReducer, AdvertiserReducer, OrderReducer } from './reducers';
import { RegisterNewUserSaga, UserLoginSaga, GetAdvertiserInsightsSaga, sendEmailVerificationCodeSaga, GetUserDetailsSaga } from './saga/usersSagas';
import { CreateDiscountSaga, CreateOfferSaga, GetActiveDiscountsSaga, GetActiveOffersSaga } from './saga/AdvertiserSagas';
import { GetcategoriesSaga, GetOffersWithFilterSaga, GetOfferDetailSaga, GetOfferesEndSoonSaga, GetDiscountsWithFilterSaga, GetDiscountDetailSaga, GetDiscountsEndSoonSaga, GetAdsSaga } from './saga/OrderSaga';

// es6promise.polyfill();

function* rootSaga() {
  yield all([
    // ------------------- user endpoints -----------------
    takeLatest(UserReducer.REGISTER_NEW_USER, RegisterNewUserSaga),
    takeLatest(UserReducer.REGISTER_NEW_USER_SUCCESS, sendEmailVerificationCodeSaga),
    takeLatest(UserReducer.USER_LOGIN, UserLoginSaga),
    takeLatest(UserReducer.GET_ADVERTISER_INSIGHTS, GetAdvertiserInsightsSaga),
    takeLatest(UserReducer.USER_DETAILS, GetUserDetailsSaga),


    // ------------------ advertiser endpoints ------------
    takeLatest(AdvertiserReducer.CREATE_DISCOUNT, CreateDiscountSaga),
    takeLatest(AdvertiserReducer.CREATE_OFFER, CreateOfferSaga),
    takeLatest(AdvertiserReducer.GET_ACTIVE_DISCOUNTTS, GetActiveDiscountsSaga),
    takeLatest(AdvertiserReducer.GET_ACTIVE_OFFERS, GetActiveOffersSaga),

    

    // ------------------ order endpoints ------------
    takeLatest(OrderReducer.GET_CATRGORIES, GetcategoriesSaga),
    takeLatest(OrderReducer.GET_OFFERES_LIST_WITH_FILTER, GetOffersWithFilterSaga),
    takeLatest(OrderReducer.GET_OFFER_DETAIL, GetOfferDetailSaga),
    takeLatest(OrderReducer.GET_OFFERES_END_SOON, GetOfferesEndSoonSaga),

    takeLatest(OrderReducer.GET_DISCOUNT_LIST_WITH_FILTER, GetDiscountsWithFilterSaga),
    takeLatest(OrderReducer.GET_DISCOUNT_DETAIL, GetDiscountDetailSaga),
    takeLatest(OrderReducer.GET_DISCOUNT_END_SOON, GetDiscountsEndSoonSaga),

    takeLatest(OrderReducer.GET_ADS, GetAdsSaga),



  ]);
}

export default rootSaga;
