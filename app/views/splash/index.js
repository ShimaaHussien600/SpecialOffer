import React, { Component } from 'react';

import {
  Image,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { OrderReducer } from '../../services/reducers';

const { Getcategories,
  GetOffersWithFilter, GetOfferesEndSoon, GetBestOfferesSuccess, GetNewOfferesSuccess,
   GetDiscountsWithFilter, GetDiscountsEndSoon,
   GetAds } = OrderReducer;


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  getAds = (navigateToNextScreen) =>{
    const BottomAdsResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetBestOfferesSuccess(data)
        if(navigateToNextScreen){
        this.handleNextScreen()
        }
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };

    const TopAdsResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetBestOfferesSuccess(data)
        this.getBottomAds(BottomAdsResponseHandler)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };
    this.getTopAds(TopAdsResponseHandler)
  }

  getSercherDiscountData = (navigateToNextScreen) => {
    // ---------- end soon offers -------
    const EndSoonDiscountsResponseHandler = {
      onSuccess: () => {
      this.getAds(navigateToNextScreen)
        // this.props.GetNewOfferesSuccess(data)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };
    // ---------- new offers -------
    const NewDiscountsResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetNewOfferesSuccess(data)
        this.getEndSoonDiscounts(EndSoonDiscountsResponseHandler)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };

    // ---------- get best offers -------
    const BestDiscountsResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetBestOfferesSuccess(data)
        this.getNewDiscounts(NewDiscountsResponseHandler)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };
    this.getBestDiscounts(BestDiscountsResponseHandler)
  }

  getSercherOfferData = (navigateToNextScreen) => {
    // ---------- end soon offers -------
    const EndSoonOffersResponseHandler = {
      onSuccess: () => {
      this.getSercherDiscountData(navigateToNextScreen);
        // this.props.GetNewOfferesSuccess(data)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };
    // ---------- new offers -------
    const NewOffersResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetNewOfferesSuccess(data)
        this.getEndSoonOffers(EndSoonOffersResponseHandler)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };

    // ---------- get best offers -------
    const BestOffersResponseHandler = {
      onSuccess: (data) => {
        // this.props.GetBestOfferesSuccess(data)
        this.getNewOffers(NewOffersResponseHandler)
      },
      onFail: (error) => {
        alert('هناك شي ما خاطئ');
      }
    };
    this.getBestOffers(BestOffersResponseHandler)
  }

  getBestOffers = (responseHandler) =>{
    this.props.GetOffersWithFilter('best',responseHandler )
  }

  getNewOffers = (responseHandler) =>{
    this.props.GetOffersWithFilter('new',responseHandler )
  }

  getEndSoonOffers = (responseHandler) =>{
    this.props.GetOfferesEndSoon(responseHandler )
  }

  getBestDiscounts = (responseHandler) =>{
    this.props.GetDiscountsWithFilter('best',responseHandler )
  }

  getNewDiscounts = (responseHandler) =>{
    this.props.GetDiscountsWithFilter('new',responseHandler )
  }

  getTopAds = (responseHandler) =>{
    this.props.GetAds('Top',responseHandler )
  }
  getBottomAds = (responseHandler) =>{
    this.props.GetAds('Buttom',responseHandler )
  }

  getEndSoonDiscounts = (responseHandler) =>{
    this.props.GetDiscountsEndSoon(responseHandler )
  }
  navigateToNextScreen = (nextScreen) => {
    this.props.navigation.replace(nextScreen);
  }

  handleNextScreen = () => {
    if(this.props.profile.Token){
      if(this.props.userDetails.publisher){
        this.navigateToNextScreen('AdvertiserStack')
      } else {
        this.navigateToNextScreen('MainScreen')
      }
    }
    else{
      this.navigateToNextScreen('SignIn')
    }
  }

  async componentDidMount() {
    this.props.Getcategories();
    const Tutorial = await AsyncStorage.getItem('Tutorial');
    // let nextScreen = 'SignIn';
    if (!Tutorial) {
      this.getSercherOfferData(false);
      this.navigateToNextScreen('Tutorial')
      // nextScreen = 'Tutorial';
      await AsyncStorage.setItem('Tutorial', '1');
    }
    else{
      this.getSercherOfferData(true);
    }
    // setTimeout(() => {
    //   this.props.navigation.replace(nextScreen);
    // }, 2000);
  }
  render() {
    return (
      <ImageBackground
        source={GetPhoto('bg_main')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <Image
          resizeMode="contain"
          source={GetPhoto('logo')}
          style={{ marginTop: hp('35%'), width: wp('60%'), height: hp('20%') }}
        />
      </ImageBackground>
    );
  }
}
function mapStateToProps(state) {
  return {
    userDetails: state.UserReducer.userDetails,
    profile: state.UserReducer.profile
  };
}


function mapDispatchToProps(dispatch) {
  return {
    Getcategories: (responseHandler) => {
      dispatch(Getcategories(responseHandler));
    },
    GetOffersWithFilter: (orderBy, responseHandler) => {
      dispatch(GetOffersWithFilter(orderBy, responseHandler));
    },
    // GetBestOfferesSuccess: (data)=> {
    //   dispatch(GetBestOfferesSuccess(data));
    // },
    // GetNewOfferesSuccess: (data)=> {
    //   dispatch(GetNewOfferesSuccess(data));
    // },
    GetOfferesEndSoon: (responseHandler) => {
      dispatch(GetOfferesEndSoon(responseHandler));
    },

    GetDiscountsWithFilter: (orderBy, responseHandler) => {
      dispatch(GetDiscountsWithFilter(orderBy, responseHandler));
    },
    GetDiscountsEndSoon: (responseHandler) => {
      dispatch(GetDiscountsEndSoon(responseHandler));
    },
    GetAds: (position, responseHandler) => {
      dispatch(GetAds(position, responseHandler));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
