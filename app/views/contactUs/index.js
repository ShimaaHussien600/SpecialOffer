/* eslint-disable max-len */
import React, { Component } from 'react';

import {
  View,
  Image,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { Header } from '../../components /header';
import { RegularTextInput } from '../../components /textinput';
import { RegularButton } from '../../components /button';

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center', backgroundColor: colors.white }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'اتصل بنا'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>
        <Image
          resizeMode="contain"
          source={GetPhoto('contactUs')}
          style={{ marginTop: hp('5%'), width: wp('60%'), height: hp('25%') }}
        />
        <View
          style={{
            marginTop: hp('3%'),
            width: wp('80%'),
            alignItems: 'center', }}>
          <RegularTextInput
            selectionColor={colors.darkRed}
            onChangeText={(email) => { this.setState({ email }); }}
            placeholder={'الاسم'}
            textInputnStyle={{ marginTop: hp('2%') }}
              />
          <RegularTextInput
            selectionColor={colors.darkRed}
            onChangeText={(email) => { this.setState({ email }); }}
            placeholder={'البريد الالكتروني'}
            textInputnStyle={{ marginTop: hp('2%') }}
              />
          <RegularTextInput
            selectionColor={colors.darkRed}
            onChangeText={(email) => { this.setState({ email }); }}
            placeholder={'محتوي الرسالة'}
            textInputnStyle={{ marginTop: hp('2%'), height: hp('15%') }}
              />
          <RegularButton
            onClick={() => { }}
            buttonStyle={{ marginTop: hp('4%'), width: wp('80%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightOrange }}
            buttonText={'ارسال'}
            textStyle={{ color: colors.white }}
              />
        </View>

      </View>
    );
  }
}
