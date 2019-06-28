import { GetPhoto } from '../../modules/images';

export class AdvertiserReducer {
    static initialUserState = {
      selectedCategories: -1,
      activeDiscounts: [],
      activeOffers: [],
      icons: [
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
        },
        {
          name: 'طعام',
          image: GetPhoto('restaurant'),
        },
        {
          name: 'لاب توب',
          image: GetPhoto('notebook'),
        },
        {
          name: 'معلبات',
          image: GetPhoto('milk'),
        },
        {
          name: 'سيارات',
          image: GetPhoto('car'),
        },
        {
          name: 'ملابس',
          image: GetPhoto('tshirt'),
        },
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
        },
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
        },
        {
          name: 'طعام',
          image: GetPhoto('restaurant'),
        },
        {
          name: 'ملابس',
          image: GetPhoto('tshirt'),
        },
        {
          name: 'لاب توب',
          image: GetPhoto('notebook'),
        }, {
          name: 'سيارات',
          image: GetPhoto('car'),
        }, {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
        },
        {
          name: 'طعام',
          image: GetPhoto('restaurant'),
        }, {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
        },
      ],
    };

    // Reducer
    static reduce(state = AdvertiserReducer.initialUserState, action) {
      switch (action.type) {
        case AdvertiserReducer.CHANGE_SELECTED_CATEGORIES:
          return {
            ...state, selectedCategories: action.selectedCategories
          };
        case AdvertiserReducer.GET_ACTIVE_DISCOUNTTS_SUCCESS:
          return {
            ...state, activeDiscounts: action.data
          };
        case AdvertiserReducer.GET_ACTIVE_OFFERS_SUCCESS:
          return {
            ...state, activeOffers: action.data
          };
        default:
          return state;
      }
    }

      // Actions
      static CHANGE_SELECTED_CATEGORIES = 'Advertiser/CHANGE_SELECTED_CATEGORIES';
      static CREATE_DISCOUNT = 'Advertiser/CREATE_DISCOUNT';
      static CREATE_OFFER = 'Advertiser/CREATE_OFFER';

      static GET_ACTIVE_DISCOUNTTS = 'Advertiser/GET_ACTIVE_DISCOUNTTS';
      static GET_ACTIVE_DISCOUNTTS_SUCCESS = 'Advertiser/GET_ACTIVE_DISCOUNTTS_SUCCESS';

      static GET_ACTIVE_OFFERS = 'Advertiser/GET_ACTIVE_OFFERS';
      static GET_ACTIVE_OFFERS_SUCCESS = 'Advertiser/GET_ACTIVE_OFFERS_SUCCESS';


      // Action Creators
      static ChangeSelectedCategories = (selectedCategories) => {
        console.log('ChangeSelectedCategories', 'selectedCategories ', selectedCategories);
        return {
          type: AdvertiserReducer.CHANGE_SELECTED_CATEGORIES,
          selectedCategories
        };
      }

      static CreateDiscount = (data, responseHandler) => {
        console.log('CreateDiscount', 'data ', data);
        return {
          type: AdvertiserReducer.CREATE_DISCOUNT,
          data,
          responseHandler
        };
      }

      static CreateOffer = (data, responseHandler) => {
        console.log('CreateOffer', 'data ', data);
        return {
          type: AdvertiserReducer.CREATE_OFFER,
          data,
          responseHandler
        };
      }

      static GetActiveDiscounts = (responseHandler) => {
        return {
          type: AdvertiserReducer.GET_ACTIVE_DISCOUNTTS,
          responseHandler
        };
      }
      static GetActiveDiscountsSuccess = (data) => {
        return {
          type: AdvertiserReducer.GET_ACTIVE_DISCOUNTTS_SUCCESS,
          data
        };
      }

      static GetActiveOffers = (responseHandler) => {
        return {
          type: AdvertiserReducer.GET_ACTIVE_OFFERS,
          responseHandler
        };
      }
      static GetActiveOffersSuccess = (data) => {
        return {
          type: AdvertiserReducer.GET_ACTIVE_OFFERS_SUCCESS,
          data
        };
      }
}
