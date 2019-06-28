/* eslint-disable max-len */
import {
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import colors from '../../../modules/colors';
import { RegularButton } from '../../../components /button';
import { Header } from '../../../components /header';
import { Card, AdvertiserCard } from '../../../components /card';
import fonts from '../../../modules/fonts';

export class Accept extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <LinearGradient
        colors={[colors.lightOrange, colors.darkRed]}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('10%'),
            width: wp('85%'),
            // backgroundColor: 'red',
            height: hp('30%'),
            alignItems: 'center' }}>
          <Image
            resizeMode="contain"
            source={GetPhoto('check')}
            style={{ width: wp('30%'), height: hp('30%') }} />
        </View>

        <View
          style={{ marginTop: hp('1%'),
            width: wp('85%'),
            alignItems: 'center' }}>
          <Text
            style={{ fontSize: fonts.size.h6,
              fontFamily: fonts.type.medium,
              color: colors.white }}>{'تم ارسال الاعلان الي الادارة للمراجعة'}
          </Text>
          <Text
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              textAlign: 'center',
              fontSize: fonts.size.regular,
              fontFamily: fonts.type.normal,
              color: colors.white }}>{'لن يستغرق ذلك الكثير من الوقت ومن المعتاد انه يتم الرد في خلال 24 ساعة لا اكثر'}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: hp('75%'),
            height: hp('10%'),
            width: wp('100%'),
            alignItems: 'center',
          }}>
          <RegularButton
            onClick={() => { this.props.navigation.navigate('AdvertiserPaying'); }}
            buttonStyle={{
              width: wp('85%'),
              height: hp('9%'),
              //   borderBottomRightRadius: wp('8%'),
              //   borderBottomLeftRadius: wp('8%'),
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white }}
            buttonText={'موافق'}
            textStyle={{ color: colors.darkRed }} />
        </View>
        
      </LinearGradient>
    );
  }
}
