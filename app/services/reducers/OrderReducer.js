export class OrderReducer {
    static initialUserState = {
      categories: [],

      bestOffers:[],
      newOffers:[],
      endSoonOffers:[],
      offerDetails:{},

      bestDiscount:[],
      newDiscount:[],
      endSoonDiscount:[],
      discountDetails:{},

      catBestOfferes:[],
      catBestDiscount:[],

      itemDatailsType:'',
      SelectedCatItem:{},

      topADS:[],
      bottomADS:[],
    };

    // Reducer
    static reduce(state = OrderReducer.initialUserState, action) {
      switch (action.type) {
        case OrderReducer.GET_CATRGORIES_SUCCESS:
          return {
            ...state, categories: action.data
          };
        case OrderReducer.CHANGE_SELECTED_ITEM_DETAILS_TYPE:
            return {
              ...state, itemDatailsType: action.itmeType
            };
        case OrderReducer.CHANGE_SELECTED_CAT_ITEM:
            return {
              ...state, SelectedCatItem: action.CatItem
            };
            

        case OrderReducer.GET_TOP_ADS_SUCCESS:
          return {
            ...state, topADS: action.data
          };
        case OrderReducer.GET_BOTTOM_ADS_SUCCESS:
          return {
            ...state, bottomADS: action.data
          };

        case OrderReducer.GET_BEST_OFFERES_SUCCESS:
          return {
            ...state, bestOffers: action.data
          };
        case OrderReducer.GET_NEW_OFFERES_SUCCESS:
          return {
            ...state, newOffers: action.data
          };
        case OrderReducer.GET_CAT_BEST_OFFERES_SUCCESS:
          return {
            ...state, catBestOfferes: action.data
          };
        case OrderReducer.GET_OFFER_DETAIL_SUCCESS:
          return {
            ...state, offerDetails: action.data
          };
        case OrderReducer.GET_OFFERES_END_SOON_SUCCESS:
          return {
            ...state, endSoonOffers: action.data
          };

          case OrderReducer.GET_BEST_DISCOUNT_SUCCESS:
          return {
            ...state, bestDiscount: action.data
          };
        case OrderReducer.GET_NEW_DISCOUNT_SUCCESS:
          return {
            ...state, newDiscount: action.data
          };
        case OrderReducer.GET_CAT_BEST_DISCOUNT_SUCCESS:
          return {
            ...state, catBestDiscount: action.data
          };
        case OrderReducer.GET_DISCOUNT_DETAIL_SUCCESS:
          return {
            ...state, discountDetails: action.data
          };
        case OrderReducer.GET_DISCOUNT_END_SOON_SUCCESS:
          return {
            ...state, endSoonDiscount: action.data
          };
          
        default:
          return state;
      }
    }

      // Actions
      static GET_CATRGORIES = 'ORDERS/GET_CATRGORIES';
      static GET_CATRGORIES_SUCCESS = 'ORDERS/GET_CATRGORIES_SUCCESS';

      static CHANGE_SELECTED_ITEM_DETAILS_TYPE = 'ORDERS/CHANGE_SELECTED_ITEM_DETAILS_TYPE';
      static CHANGE_SELECTED_CAT_ITEM = 'ORDERS/CHANGE_SELECTED_CAT_ITEM';


      static GET_OFFERES_LIST_WITH_FILTER = 'ORDERS/GET_OFFERES_LIST_WITH_FILTER';
      static GET_BEST_OFFERES_SUCCESS = 'ORDERS/GET_BEST_OFFERES_SUCCESS';
      static GET_NEW_OFFERES_SUCCESS = 'ORDERS/GET_NEW_OFFERES_SUCCESS';
      static GET_CAT_BEST_OFFERES_SUCCESS = 'ORDERS/GET_CAT_BEST_OFFERES_SUCCESS';

      static GET_OFFER_DETAIL = 'ORDERS/GET_OFFER_DETAIL';
      static GET_OFFER_DETAIL_SUCCESS = 'ORDERS/GET_OFFER_DETAIL_SUCCESS';


      static GET_OFFERES_END_SOON = 'ORDERS/GET_OFFERES_END_SOON';
      static GET_OFFERES_END_SOON_SUCCESS = 'ORDERS/GET_OFFERES_END_SOON_SUCCESS';


      static GET_DISCOUNT_LIST_WITH_FILTER = 'ORDERS/GET_DISCOUNT_LIST_WITH_FILTER';
      static GET_BEST_DISCOUNT_SUCCESS = 'ORDERS/GET_BEST_DISCOUNT_SUCCESS';
      static GET_NEW_DISCOUNT_SUCCESS = 'ORDERS/GET_NEW_DISCOUNT_SUCCESS';
      static GET_CAT_BEST_DISCOUNT_SUCCESS = 'ORDERS/GET_CAT_BEST_DISCOUNT_SUCCESS';


      static GET_DISCOUNT_DETAIL = 'ORDERS/GET_DISCOUNT_DETAIL';
      static GET_DISCOUNT_DETAIL_SUCCESS = 'ORDERS/GET_DISCOUNT_DETAIL_SUCCESS';

      static GET_DISCOUNT_END_SOON = 'ORDERS/GET_DISCOUNT_END_SOON';
      static GET_DISCOUNT_END_SOON_SUCCESS = 'ORDERS/GET_DISCOUNT_END_SOON_SUCCESS';

      static GET_ADS = 'ORDERS/GET_ADS';
      static GET_TOP_ADS_SUCCESS = 'ORDERS/GET_TOP_ADS_SUCCESS';
      static GET_BOTTOM_ADS_SUCCESS = 'ORDERS/GET_BOTTOM_ADS_SUCCESS';



      // Action Creators
      static Getcategories = (responseHandler) => {
        console.log('Getcategories');
        return {
          type: OrderReducer.GET_CATRGORIES,
          responseHandler
        };
      }
      static GetcategoriesSuccess = (data) => {
        console.log('GetcategoriesSuccess');
        return {
          type: OrderReducer.GET_CATRGORIES_SUCCESS,
          data
        };
      }

      static ChangeSelectedItmeDatailsType = (itmeType) => {
        console.log('ChangeSelectedItmeDatailsType','type',itmeType);
        return {
          type: OrderReducer.CHANGE_SELECTED_ITEM_DETAILS_TYPE,
          itmeType
        };
      }

      static ChangeSelectedCatItem = (CatItem) => {
        console.log('ChangeSelectedItmeDatailsType','type',CatItem);
        return {
          type: OrderReducer.CHANGE_SELECTED_CAT_ITEM,
          CatItem
        };
      }

      //--------------------------------------------- ads --------------------------------------
      static GetAds = (position, responseHandler) => {
        console.log('GetAds');
        return {
          type: OrderReducer.GET_ADS,
          position,
          responseHandler
        };
      }
      static GetTopAdsSuccess = (data) => {
        console.log('GetTopAdsSuccess');
        return {
          type: OrderReducer.GET_TOP_ADS_SUCCESS,
          data
        };
      }
      static GetBottomAdsSuccess = (data) => {
        console.log('GetBottomAdsSuccess');
        return {
          type: OrderReducer.GET_BOTTOM_ADS_SUCCESS,
          data
        };
      }

// ---------------------------------- OFFERS ----------------------------------
      static GetOffersWithFilter = (orderBy, responseHandler) => {
        console.log('GetOffersWithFilter');
        return {
          type: OrderReducer.GET_OFFERES_LIST_WITH_FILTER,
          orderBy,
          responseHandler
        };
      }
      static GetBestOfferesSuccess = (data) => {
        console.log('GetBestOfferesSuccess');
        return {
          type: OrderReducer.GET_BEST_OFFERES_SUCCESS,
          data
        };
      }
      static GetNewOfferesSuccess = (data) => {
        console.log('GetNewOfferesSuccess');
        return {
          type: OrderReducer.GET_NEW_OFFERES_SUCCESS,
          data
        };
      }
      static GetCatBestOfferesSuccess = (data) => {
        console.log('GetCatBestOfferesSuccess');
        return {
          type: OrderReducer.GET_CAT_BEST_OFFERES_SUCCESS,
          data
        };
      }


      static GetOfferDetail = (orderID, responseHandler) => {
        console.log('GetOfferDetail');
        return {
          type: OrderReducer.GET_OFFER_DETAIL,
          orderID,
          responseHandler
        };
      }
      static GetOfferDetailSuccess = (data) => {
        console.log('GetOfferDetailSuccess');
        return {
          type: OrderReducer.GET_OFFER_DETAIL_SUCCESS,
          data
        };
      }

      static GetOfferesEndSoon = (responseHandler) => {
        console.log('GetOfferesEndSoon');
        return {
          type: OrderReducer.GET_OFFERES_END_SOON,
          responseHandler
        };
      }
      static GetOfferesEndSoonSuccess = (data) => {
        console.log('GetOfferesEndSoonSuccess');
        return {
          type: OrderReducer.GET_OFFERES_END_SOON_SUCCESS,
          data
        };
      }


//----------------------------------- Discounts --------------------------------------------
      static GetDiscountsWithFilter = (orderBy, responseHandler) => {
        console.log('GetDiscountsWithFilter');
        return {
          type: OrderReducer.GET_DISCOUNT_LIST_WITH_FILTER,
          orderBy,
          responseHandler
        };
      }
      static GetBestDiscountsSuccess = (data) => {
        console.log('GetBestDiscountsSuccess');
        return {
          type: OrderReducer.GET_BEST_DISCOUNT_SUCCESS,
          data
        };
      }
      static GetNewDiscountsSuccess = (data) => {
        console.log('GetNewDiscountsSuccess');
        return {
          type: OrderReducer.GET_NEW_DISCOUNT_SUCCESS,
          data
        };
      }
      static GetCatBestDiscountsSuccess = (data) => {
        console.log('GetCatBestDiscountsSuccess');
        return {
          type: OrderReducer.GET_CAT_BEST_DISCOUNT_SUCCESS,
          data
        };
      }


      static GetDiscountDetail = (orderID, responseHandler) => {
        console.log('GetDiscountDetail');
        return {
          type: OrderReducer.GET_DISCOUNT_DETAIL,
          orderID,
          responseHandler
        };
      }
      static GetDiscountDetailSuccess = (data) => {
        console.log('GetDiscountDetailSuccess');
        return {
          type: OrderReducer.GET_DISCOUNT_DETAIL_SUCCESS,
          data
        };
      }

      static GetDiscountsEndSoon = (responseHandler) => {
        console.log('GetDiscountsEndSoon');
        return {
          type: OrderReducer.GET_DISCOUNT_END_SOON,
          responseHandler
        };
      }
      static GetDiscountsEndSoonSuccess = (data) => {
        console.log('GetDiscountsEndSoonSuccess');
        return {
          type: OrderReducer.GET_DISCOUNT_END_SOON_SUCCESS,
          data
        };
      }
}
