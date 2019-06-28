export class UserReducer {
  static initialUserState = {
    profile: {},
    userDetails: {},
    advertiserInsights: {
      likes: 0,
      total_visites: 0
    },
  };

  // Reducer
  static reduce(state = UserReducer.initialUserState, action) {
    switch (action.type) {
      case UserReducer.REGISTER_NEW_USER_SUCCESS:
        return {
          ...state
        };
      case UserReducer.USER_LOGIN_SUCCESS:
        return {
          ...state, profile: action.data
        };
      case UserReducer.USER_DETAILS_SUCCESS:
        return {
          ...state, userDetails: action.data
        };
      case UserReducer.GET_ADVERTISER_INSIGHTS_SUCCESS:
        return {
          ...state, advertiserInsights: action.data
        };
      case UserReducer.LOGOUT:
        return {
          ...state, 
          profile: UserReducer.initialUserState.profile, 
          userDetails:UserReducer.initialUserState.userDetails, 
          advertiserInsights: UserReducer.initialUserState.advertiserInsights
        };
      default:
        return state;
    }
  }

    // Actions
    static REGISTER_NEW_USER = 'USERS/Register_new_user';
    static REGISTER_NEW_USER_SUCCESS = 'USERS/REGISTER_NEW_USER_SUCCESS';
    static USER_LOGIN = 'USERS/USER_LOGIN';
    static USER_LOGIN_SUCCESS = 'USERS/USER_LOGIN_SUCCESS';

    static USER_DETAILS = 'USERS/USER_DETAILS';
    static USER_DETAILS_SUCCESS = 'USERS/USER_DETAILS_SUCCESS';

    static GET_ADVERTISER_INSIGHTS = 'USERS/GET_ADVERTISER_INSIGHTS';
    static GET_ADVERTISER_INSIGHTS_SUCCESS = 'USERS/GET_ADVERTISER_INSIGHTS_SUCCESS';

    static LOGOUT = 'USERS/LOGOUT';



    // Action Creators
    static RegisterNewUser = (userType, data, responseHandler) => {
      console.log('RegisterNewUser', 'data ', data);
      return {
        type: UserReducer.REGISTER_NEW_USER,
        userType,
        data,
        responseHandler
      };
    }
    static RegisterNewUserSuccess = (data) => {
      return {
        type: UserReducer.REGISTER_NEW_USER_SUCCESS,
        data,
      };
    }


    static UserLogin = (data, responseHandler) => {
      return {
        type: UserReducer.USER_LOGIN,
        data,
        responseHandler
      };
    }
    static UserLoginSuccess = (data) => {
      return {
        type: UserReducer.USER_LOGIN_SUCCESS,
        data,
      };
    }


    static GetUserDetails = (userID, responseHandler) => {
      return {
        type: UserReducer.USER_DETAILS,
        userID,
        responseHandler,
      };
    }
    static GetUserDetailsSuccess = (data) => {
      return {
        type: UserReducer.USER_DETAILS_SUCCESS,
        data
      };
    }


    static GetAdvertiserInsights = (responseHandler) => {
      return {
        type: UserReducer.GET_ADVERTISER_INSIGHTS,
        responseHandler,
      };
    }

    static GetAdvertiserInsightsSuccess = (data) => {
      return {
        type: UserReducer.GET_ADVERTISER_INSIGHTS_SUCCESS,
        data,
      };
    }

    static Logout = () => {
      return {
        type: UserReducer.LOGOUT,
      };
    }
}
