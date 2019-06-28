export class UIReducer {
  static initialUserState = {
    pageLoading: false,
  };

  // Reducer
  static reduce(state = UIReducer.initialUserState, action) {
    switch (action.type) {
      case UIReducer.PAGE_LOADING_ON:
        return {
          ...state,
          pageLoading: true,
        };
      case UIReducer.PAGE_LOADING_OFF:
        return {
          ...state,
          pageLoading: false,
        };
      default:
        return state;
    }
  }

    // Actions
    static PAGE_LOADING_OFF = 'PAGE_LOADING_OFF';
    static PAGE_LOADING_ON = 'PAGE_LOADING_ON';


    // Action Creators
    static turnOffPageLoading = () => {
      return {
        type: UIReducer.PAGE_LOADING_OFF,
      };
    }

    static turnOnPageLoading = () => {
      return {
        type: UIReducer.PAGE_LOADING_ON,
      };
    }
}
