/* eslint-disable max-len */
import React, { Component } from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { Header } from '../../components /header';
import fonts from '../../modules/fonts';

export class AboutUs extends Component {
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
            headerName={'من نحن'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>
        <Image
          resizeMode="contain"
          source={GetPhoto('logo2')}
          style={{ marginTop: hp('5%'), width: wp('70%'), height: hp('25%') }}
        />
        <View
          style={{
            marginTop: hp('3%'),
            width: wp('85%'),
            height: hp('50%'),
            elevation: 5,
            alignItems: 'center',
            backgroundColor: colors.white,
            paddingHorizontal: wp('2%'),
            paddingVertical: hp('2%') }}>
          <Text
            style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.black }}>
            {'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي الخير والشر"'}
          </Text>
        </View>

      </View>
    );
  }
}
