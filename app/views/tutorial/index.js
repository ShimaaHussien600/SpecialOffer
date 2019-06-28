/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { RegularTextInput } from '../../components /textinput';
import { ClickableText } from '../../components /text';
import fonts from '../../modules/fonts';

export class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Step: 0,
      TutData: [
        {
          image: 'intro1',
          header: 'ابدا الان في الحصول على فرص جديدة',
          text: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"'
        },
        {
          image: 'intro2',
          header: 'لديك العديد من الخيارات في مكان واحد',
          text: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"'
        },
        {
          image: 'intro3',
          header: 'اختر قارن وفر مبورك عليك العرض',
          text: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"'
        },
      ]
    };
  }
  render() {
    const { Step } = this.state;
    return (
      <ImageBackground
        resizeMode="cover"
        source={GetPhoto('bg_main')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{
            // backgroundColor: 'red',
            marginTop: hp('10%'),
            width: wp('80%'),
            height: hp('70%'),
            alignItems: 'center'
          }}>

          <Image
            resizeMode="contain"
            source={GetPhoto(this.state.TutData[Step].image)}
            style={{ width: wp('60%'), height: hp('25%') }}
                      />
          <Text
            style={{
              lineHeight: fonts.size.h2,
              fontSize: fonts.size.input,
              fontFamily: fonts.type.medium,
              marginTop: hp('10%'),
              color: colors.white }}>
            {this.state.TutData[Step].header}
          </Text>
          <Text
            style={{ textAlign: 'center',
              marginTop: hp('2%'),
              lineHeight: fonts.size.regular,
              fontSize: fonts.size.small,
              fontFamily: fonts.type.normal,
              color: colors.white }}>
            {this.state.TutData[Step].text}
          </Text>

          <View
            style={{
              marginTop: hp('8%'),
              width: wp('35%'),
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <View
              style={{
                width: wp('8%'),
                height: hp('1%'),
                backgroundColor: Step === 2 ? colors.white : 'transparent',
                borderWidth: 1,
                borderColor: colors.white
              }} />
            <View
              style={{
                width: wp('8%'),
                height: hp('1%'),
                backgroundColor: Step >= 1 ? colors.white : 'transparent',
                borderWidth: 1,
                borderColor: colors.white
              }} />
            <View
              style={{
                width: wp('8%'),
                height: hp('1%'),
                backgroundColor: Step >= 0 ? colors.white : 'transparent',
                borderWidth: 1,
                borderColor: colors.white
              }} />

          </View>


          {/* <Swiper
            ref="swiper"
            loop={false}
            showsPagination={false}
            onIndexChanged={(index) => {
              console.log('TAG', 'index', index, this.state.Step);
              this.setState({ Step: index });
            }}
            style={{}}>
            {this.state.TutData.map((item, index) => {
              return (
                <View
                  key={`${index}`}
                  style={{
                    marginTop: hp('15%'),
                    width: wp('80%'),
                    height: hp('100%'),
                    alignItems: 'center'
                  }}>
                  <View
                    style={{ width: wp('80%'), alignItems: 'center' }}>
                    <Image
                      resizeMode="contain"
                      source={GetPhoto(item.image)}
                      style={{ width: wp('60%'), height: hp('25%') }}
                      />
                    <Text
                      style={{ fontSize: 20,
                        marginTop: '4%',
                        fontWeight: 'bold',
                        color: colors.white }}>
                      {item.header}
                    </Text>
                    <Text
                      style={{ textAlign: 'center',
                        marginTop: '2%',
                        fontSize: 12 }}>
                      {item.text}
                    </Text>
                  </View>
                </View>
              );
            })}

          </Swiper> */}

        </View>
        <View
          style={{
            // position: 'absolute',
            // bottom: 0,
            marginTop: hp('7%'),
            height: hp('10%'),
            width: wp('100%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.orange
          }}>
          <View
            style={{
            //   backgroundColor: 'red',
              zIndex: 100,
              position: 'absolute',
              width: wp('85%'),
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.Step === 2) {
                  this.props.navigation.replace('SignIn');
                } else {
                  this.setState(prevState => ({
                    Step: prevState.Step + 1
                  }));
                }
              }}
            >
              <Text style={{ color: colors.white,
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium, }}> {'التالي'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (this.state.Step > 0) {
                  this.setState(prevState => ({
                    Step: prevState.Step - 1
                  }));
                }
              }}>
              <Text style={{ color: colors.gray,
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium, }}> {'السابق'}
              </Text>
            </TouchableOpacity>

          </View>
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              left: -wp('35%'),
              bottom: -wp('62%'),
              height: wp('80%'),
              width: wp('80%'),
              borderRadius: wp('40%'),
              backgroundColor: colors.lightOrange,
            }} />
          {/* <View
          style={
            flexDirection: "row",
            justifyContent: "space-between"
          }>

          </View> */}

        </View>
      </ImageBackground>
    );
  }
}
