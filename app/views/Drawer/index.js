/* eslint-disable max-len */
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { TextWithImage } from '../../components /text';
import fonts from '../../modules/fonts';
import { UserReducer, UIReducer } from '../../services/reducers';

const { Logout } = UserReducer;


class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderDrawerItem = (onPress, name, source) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ marginTop: hp('0.3%'), width: wp('70%'), height: hp('5%'), alignItems: 'center', }}>
        <TextWithImage
          container={{ width: wp('60%') }}
          textStyle={{ color: colors.lightOrange, marginLeft: wp('3%'), }}
          text={name}
          ImageSource={source}
          ImageStyle={{ width: wp('6%'), height: hp('3%') }}
     />
      </TouchableOpacity>
    );
  }

  render() {
    const { userDetails } = this.props;
    return (
      <View
        style={{ width: wp('70%'), height: hp('100%'), alignItems: 'center' }}>
        <ImageBackground
          source={GetPhoto('bg_main')}
          style={{ width: wp('70%'), height: hp('25%') }}>
          {this.props.profile.Token && <View
            style={{ marginTop: hp('1%'), width: wp('70%'), height: hp('24%') }}>
            <Image
              resizeMode="contain"
              source={GetPhoto('logoutWhite')}
              style={{ position: 'absolute', marginLeft: wp('5%'), width: wp('7%'), height: hp('5%') }}
              />

            <View
              style={{ marginTop: hp('2%'), width: wp('70%'), height: wp('25%'), alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={{ uri: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' }}
                style={{ width: wp('25%'), height: wp('25%'), borderRadius: wp('12.5%') }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: wp('22%'),
                  width: wp('6%'),
                  height: wp('6%'),
                  borderRadius: wp('3%'),
                  backgroundColor: colors.white,
                  borderWidth: 1,
                  borderColor: colors.black,
                  alignItems: 'center',
                  justifyContent: 'center' }}>
                <Image
                  resizeMode="contain"
                  source={GetPhoto('settings')}
                  style={{ width: wp('3.5%'), height: hp('3.5%') }}
                  />
              </View>
            </View>

            <View
              style={{ marginTop: hp('1%'), width: wp('70%'), alignItems: 'center' }}>
              <Text
                style={{ color: colors.white, fontSize: fonts.size.input, fontFamily: fonts.type.normal }}>
                {userDetails.searcher?userDetails.searcher.name : ""}
              </Text>
            </View>
          </View>}
          {!this.props.profile.Token && <View style={{width: '100%',height:'100%',alignItems: 'center',justifyContent:'center'}}>
          <TouchableOpacity
          onPress={()=>{
            const resetAction = StackActions.reset({
              index: 0,
              key: null,
              actions: [
                NavigationActions.navigate({ routeName: 'SignIn' }),
              ],
            });
            this.props.navigation.dispatch(resetAction);
          }}>
            <Text style={{color: colors.white, fontSize: fonts.size.h6, fontFamily: fonts.type.medium}}>{"تسجيل الدخول"}</Text>
          </TouchableOpacity>
          </View>}
        </ImageBackground>

        <View
          style={{ marginTop: hp('1%'), width: wp('70%'), height: hp('48%') }}>
          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('Home'); },
            'الرئيسية',
            GetPhoto('home')
          )}

          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('HomeMoreIcons'); },
            'الاقسام',
            GetPhoto('alignRight')
          )}

          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('BestOffers'); },
            'افضل العروض',
            GetPhoto('trophy')
          )}

          {this.props.profile.Token && this.renderDrawerItem(
            () => { this.props.navigation.navigate('Notification'); },
            'الاشعارات',
            GetPhoto('alarm')
          )}

          {this.props.profile.Token && this.renderDrawerItem(
            () => { this.props.navigation.navigate('Profile'); },
            'الملف الشخصي',
            GetPhoto('userAvatar')
          )}
          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('Policy'); },
            'سياسة الاستخدام',
            GetPhoto('verifiedText')
          )}
          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('AboutUs'); },
            'من نحن',
            GetPhoto('alignRight')
          )}
          {this.renderDrawerItem(
            () => { this.props.navigation.navigate('ContactUs'); },
            'اتصل بنا',
            GetPhoto('contact')
          )}
          {this.renderDrawerItem(
            () => {},
            'تفييم التطبيق',
            GetPhoto('star')
          )}
        </View>

        <View style={{ marginTop: hp('1%'), width: wp('70%'), height: hp('6%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        {this.props.profile.Token && <TouchableOpacity
        onPress={()=>{ 
          this.props.Logout()
          const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [
              NavigationActions.navigate({ routeName: 'SignIn' }),
            ],
          });
          this.props.navigation.dispatch(resetAction);
        }}
          style={{ width: wp('70%'), height: hp('6%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Text
            style={{ color: colors.darkRed, fontSize: wp('4%'), }}>
            {'تسجيل الخروج'}
          </Text>
          <Image
            resizeMode="contain"
            source={GetPhoto('logoutRed')}
            style={{ marginLeft: wp('4%'), width: wp('7%'), height: hp('5%') }}
        />
        </TouchableOpacity>}
        </View>

        <Image
          resizeMode="contain"
          source={GetPhoto('logoShadow')}
          style={{ marginTop: hp('3%'), width: wp('70%'), height: hp('10%') }} />

      </View>

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
    Logout: () => {
      dispatch(Logout());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);