import React, { Component } from 'react';

import { View, Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NavigationService from './NavigationService';
import Splash from './views/splash';
import { SignIn } from './views/signIn';
import ExplorerRegister from './views/explorerRegister';
import ExplorerSignIn from './views/explorerSignIn';
import AdvertiserRegister from './views/advertiserRegister';
import AdvertiserSignIn from './views/advertiserSignIn';
import Home from './views/home';
import HomeMoreIcons from './views/home/homeMoreIcons';
import BestOffers from './views/bestOffers';
import { Search } from './views/search';
import Phones from './views/phones';
import OfferDetails from './views/offerDetails';
import Drawer from './views/Drawer';
import { Notification } from './views/notification';
import Profile from './views/profile';
import { EditInfo } from './views/profile/editInfo';
import { Policy } from './views/policy';
import { AboutUs } from './views/aboutUs';
import { ContactUs } from './views/contactUs';
import { Tutorial } from './views/tutorial';
import AdvertiserHome from './views/Advertiser/AdvertiserHome';
import AddAdvertisement from './views/Advertiser/AddAdvertisement';
import Categories from './views/Advertiser/categories';
import { Accept } from './views/Advertiser/Accept';
import AdvertiserProfile from './views/Advertiser/AdvertiserProfile';
import AdvertiserDrawer from './views/Advertiser/AdvertiserDrawer';
import { AdvertiserNotification } from './views/Advertiser/AdvertiserNotification';
import { AdvertiserPaying } from './views/Advertiser/AdvertiserPaying';
import { VisaPayment } from './views/Advertiser/AdvertiserPaying/visaPayment';
import { AdvertiserContactUs } from './views/Advertiser/AdvertiserContactUs';
import BestDiscounts from './views/bestDiscounts';
// import { DiscountDetails } from './';


const AdvertiserDrawerScreens = createDrawerNavigator({
  AdvertiserHome: { screen: AdvertiserHome },
  AddAdvertisement: { screen: AddAdvertisement },
  AdvertiserContactUs: { screen: AdvertiserContactUs },
  VisaPayment: { screen: VisaPayment },
  AdvertiserPaying: { screen: AdvertiserPaying },
  AdvertiserNotification: { screen: AdvertiserNotification },
  AdvertiserProfile: { screen: AdvertiserProfile },
  Categories: { screen: Categories },
  AboutUs: { screen: AboutUs },
  Accept: { screen: Accept },
  Policy: { screen: Policy },
  OfferDetails: { screen: OfferDetails },
}, {
  drawerWidth: wp('70%'),
  drawerPosition: 'right',
  contentComponent: (props) => <AdvertiserDrawer {...props} />
});

// const Advertiser = createStackNavigator(
//   {
//     // AdvertiserProfile: { screen: AdvertiserProfile },
//     // AdvertiserHome: { screen: AdvertiserHome },
//     // AddAdvertisement: { screen: AddAdvertisement },
//     // Categories: { screen: Categories },
//     // Accept: { screen: Accept },
//     AdvertiserDrawer: { screen: AdvertiserDrawerScreens }
//   },
//   {
//     headerMode: 'none',
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 200,
//         timing: Animated.timing,
//         easing: Easing.linear
//       }
//     }),
//     navigationOptions: {
//       cardStack: {
//         gesturesEnabled: false
//       }
//     }
//   }
// );

const MainScreen = createDrawerNavigator({
  Home: { screen: Home },
  ContactUs: { screen: ContactUs },
  AboutUs: { screen: AboutUs },
  Policy: { screen: Policy },
  Profile: { screen: Profile },
  EditInfo: { screen: EditInfo},
  Notification: { screen: Notification },
  OfferDetails: { screen: OfferDetails },
  Phones: { screen: Phones },
  BestOffers: { screen: BestOffers },
  BestDiscounts: { screen: BestDiscounts },
  HomeMoreIcons: { screen: HomeMoreIcons },
  Search: { screen: Search },
}, {
  drawerWidth: wp('70%'),
  drawerPosition: 'right',
  contentComponent: (props) => <Drawer {...props} />
});

const AppStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        cardStack: {
          gesturesEnabled: false
        }
      }
    },
    AdvertiserStack: { screen: AdvertiserDrawerScreens },
    // OfferDetails: { screen: OfferDetails },
    // Phones: { screen: Phones },
    // BestDiscounts: { screen: BestDiscounts },
    // BestOffers: { screen: BestOffers },
    Tutorial: { screen: Tutorial },
    MainScreen: { screen: MainScreen },
    SignIn: { screen: SignIn },
    ExplorerRegister: { screen: ExplorerRegister },
    ExplorerSignIn: { screen: ExplorerSignIn },
    AdvertiserRegister: { screen: AdvertiserRegister },
    AdvertiserSignIn: { screen: AdvertiserSignIn },

  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 200,
        timing: Animated.timing,
        easing: Easing.linear
      }
    }),
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      }
    }
  }
);


const App = createAppContainer(AppStack);

export default class AppNavigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ width: wp('100%'), height: hp('100%') }}>
        <App
          onNavigationStateChange={this.props.onNavigationStateChange}
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          />
      </View>
    );
  }
}
