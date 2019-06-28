/* eslint-disable max-len */
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import colors from '../../../modules/colors';
import { TextWithImage } from '../../../components /text';
import fonts from '../../../modules/fonts';
import { UserReducer, UIReducer } from '../../../services/reducers';
import { StackActions, NavigationActions } from 'react-navigation';


const { Logout } = UserReducer;

class AdvertiserDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    renderDrawerItem = (onPress, name, source) => {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ marginTop: hp('1.3%'), width: wp('70%'), height: hp('5%'), alignItems: 'center' }}>
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
            <View
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
                  {userDetails.publisher.name}
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{ marginTop: hp('1%'), width: wp('70%'), height: hp('48%') }}>
            {this.renderDrawerItem(
              () => { this.props.navigation.navigate('AdvertiserHome'); },
              'الرئيسية',
              GetPhoto('home')
            )}

            {this.renderDrawerItem(
              () => { this.props.navigation.navigate('AdvertiserNotification'); },
              'الاشعارات',
              GetPhoto('alarm')
            )}

            {this.renderDrawerItem(
              () => { this.props.navigation.navigate('AdvertiserProfile'); },
              'البروفايل',
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
              () => { this.props.navigation.navigate('AdvertiserContactUs'); },
              'اتصل بنا',
              GetPhoto('contact')
            )}
            {this.renderDrawerItem(
              () => {},
              'تفييم التطبيق',
              GetPhoto('star')
            )}
          </View>

          <TouchableOpacity
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
            style={{ marginTop: hp('1%'), width: wp('70%'), height: hp('6%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <Text
              style={{ color: colors.darkRed, fontSize: wp('4%'), }}>
              {'تسجيل الخروج'}
            </Text>
            <Image
              resizeMode="contain"
              source={GetPhoto('logoutRed')}
              style={{ marginLeft: wp('4%'), width: wp('7%'), height: hp('5%') }}
          />
          </TouchableOpacity>
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
)(AdvertiserDrawer);
