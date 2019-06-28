/* eslint-disable max-len */
import React, { Component } from 'react';

import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import fonts from '../../modules/fonts';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ImageBackground
        source={GetPhoto('bg_account')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ width: wp('90%'), height: hp('100%'), alignItems: 'center' }}>
          <View style={{ marginTop: hp('15%') }}>
            <Image
              resizeMode="contain"
              source={GetPhoto('logo2')}
              style={{ width: wp('80%'), height: hp('12%') }}
        />
          </View>
          <View
            style={{ marginTop: hp('32%'), width: wp('90%'), height: hp('40%'), alignItems: 'center' }}>
            <RegularButton
              onClick={() => { this.props.navigation.navigate('MainScreen'); }}
              buttonStyle={{ width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.darkgray }}
              buttonText={'دخول كضيف'}
              textStyle={{ color: colors.darkgray }}
              />
            <RegularButton
              onClick={() => { this.props.navigation.navigate('ExplorerRegister'); }}
              buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightOrange }}
              buttonText={'حساب مستكشف'}
              textStyle={{ color: colors.white }}
              />
            <RegularButton
              onClick={() => { this.props.navigation.navigate('AdvertiserRegister'); }}
              buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.darkRed }}
              buttonText={'حساب معلن'}
              textStyle={{ color: colors.white }}
              />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
