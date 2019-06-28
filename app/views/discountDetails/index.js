/* eslint-disable max-len */
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { Icon } from '../../components /icon';
import colors from '../../modules/colors';
import { TextWithUnderLine, TextWithImage } from '../../components /text';
import { Card, SmallCard } from '../../components /card';
import { RegularButton } from '../../components /button';
import { LogoCard } from '../../components /logoCard';
import fonts from '../../modules/fonts';
import styles from './styling';

export class DiscountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileImages: [
        {
          ImageLink: { uri: 'https://placeimg.com/640/480/tech' }
        },
        {
          ImageLink: { uri: 'https://placeimg.com/640/480/tech' }
        },
        {
          ImageLink: { uri: 'https://placeimg.com/640/480/tech' }
        },
        {
          ImageLink: { uri: 'https://placeimg.com/640/480/tech' }
        },
        {
          ImageLink: { uri: 'https://placeimg.com/640/480/tech' }
        },
      ],
      socialMedia: [
        {
          icon: GetPhoto('facebook'),
          onPress: () => {}
        },
        {
          icon: GetPhoto('instagram'),
          onPress: () => {}
        },
        {
          icon: GetPhoto('twitter'),
          onPress: () => {}
        },
      ],
      offerSpecification: [
        {
          name: 'الرام',
          value: '8 G'
        },
        {
          name: 'الذاكره',
          value: '128 GB'
        },
        {
          name: 'اللون',
          value: 'ابيض'
        },
        {
          name: 'عدد البطاقات',
          value: '2 SIM'
        },
        {
          name: 'المعالج',
          value: '1.4 GHZ'
        },
        {
          name: 'الكاميرا الاماميه',
          value: '12 Pixsel'
        },
        {
          name: 'لكماميرا الخلفيه',
          value: '21 Pixsel'
        },
      ]
    };
  }

    renderDate = () => {
      return (
        <View
          style={{ width: wp('20%'),
            height: hp('10%'),
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            overflow: 'hidden',
            borderColor: colors.darkgray, }}>
          <View
            style={{ width: wp('20%'),
              height: hp('5%'),
              borderBottomColor: colors.darkgray,
              borderBottomWidth: 1,
              alignItems: 'center',
              justifyContent: 'center' }}>
            <Text
              style={{ color: colors.orange, fontSize: fonts.size.small, fontFamily: fonts.type.normal }}> {'8 - 27'}
            </Text>
          </View>
          <View
            style={{ width: wp('20%'),
              height: hp('5%'),
              backgroundColor: colors.grayInput,
              alignItems: 'center',
              justifyContent: 'center' }}>
            <Text
              style={{ fontSize: fonts.size.small, fontFamily: fonts.type.medium }}> {'ابريل 2019'}
            </Text>
          </View>
        </View>
      );
    }
    renderDetails = () => {
      return (
        <View
          style={{
            width: wp('58%'),
            height: hp('10%'),
            alignItems: 'center',
          }}>
          <Text
            style={{ width: wp('58%'), fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.black }}> {'هواتف هواوي فرصة mate 10 pro'}
          </Text>
          <View
            style={{ width: wp('58%'),
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('1%'), }}>
            <View
              style={{ width: wp('18%'), alignItems: 'flex-end' }}>
              <Text
                style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.black }}>
                {'درهم'}
              </Text>
              <Text
                style={{ lineHeight: fonts.size.h3, fontSize: fonts.size.h6, fontFamily: fonts.type.medium, color: colors.black }}>
                {3780}
              </Text>
            </View>

            <View style={{ width: wp('18%'), alignItems: 'flex-end' }}>
              <Text
                style={{ lineHeight: fonts.size.input, fontSize: fonts.size.medium, fontFamily: fonts.type.medium }}>
                {4308}
              </Text>
              <Text
                style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal }}>
                {'مشاهدة'}
              </Text>
            </View>

            <View
              style={{ width: wp('18%'), alignItems: 'flex-end' }}>
              <ImageBackground
                resizeMode="contain"
                source={GetPhoto('Union')}
                style={{ width: wp('10%'), height: hp('6%'), alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal, color: colors.white }}>
                  {'30%'}
                </Text>
              </ImageBackground>
            </View>

          </View>
        </View>
      );
    }

    renderPublisherContact = () => {
      return (
        <View
          style={{
            width: wp('80%'),
            height: hp('17%'),
            alignItems: 'center',
          }}>
          <Text
            style={{ width: wp('80%'), height: hp('3%'), fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.black }}>
            {'معلومات الناشر'}
          </Text>
          <View
            style={{
              width: wp('80%'),
              height: hp('14%'),
              alignItems: 'center',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between', }
          }>
            <View
              style={{ width: wp('35%'), height: hp('14%'), alignItems: 'center', }}>
              <View
                style={{
                  width: wp('35%'),
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between', }}>
                <Text
                  style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
                  {'مفتوح'}
                </Text>
                <Text
                  style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
                  {'09:00 ص'}
                </Text>
              </View>

              <View
                style={{
                  marginTop: hp('0.5%'),
                  width: wp('35%'),
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between', }}>
                <Text
                  style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
                  {'مغلص'}
                </Text>
                <Text
                  style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
                  {'11:00 م'}
                </Text>
              </View>

              <View
                style={{
                  marginTop: hp('0.5%'),
                  width: wp('35%'),
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between', }}>
                <Image
                  resizeMode="contain"
                  source={GetPhoto('phoneContact')}
                  style={{ width: wp('5%'), height: hp('3%') }}
                />
                <Text
                  style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
                  {'01110214557'}
                </Text>
              </View>
              <Text
                style={{ marginTop: hp('1%'), fontSize: fonts.size.small, fontFamily: fonts.type.normal, color: colors.lightOrange }}>
                {'الموقع على الخريطة'}
              </Text>

            </View>

            <View style={{
              width: wp('35%'),
              elevation: 5,
              backgroundColor: colors.white,
              height: hp('14%'),
              alignItems: 'center',
              justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={{ uri: 'https://placeimg.com/640/480/tech' }}
                style={{ width: wp('30%'), height: hp('10%') }}
             />
            </View>

          </View>
        </View>
      );
    }

    renderHeaderImageItem = ({ item, index }) => {
      return (
        <View
          style={{ elevation: 5, backgroundColor: colors.white, width: wp('90%'), height: hp('25%'), borderRadius: 5 }}>
          <Image
            resizeMode="cover"
            source={item.ImageLink}
            style={{ width: wp('90%'), height: hp('25%'), borderRadius: 5 }} />
        </View>
      );
    }

    renderItemSpecification= ({ item, index }) => {
      return (
        <View
          style={{ marginTop: hp('1%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.regularText}>{item.name}</Text>
          <Text style={styles.regularText}>{item.value}</Text>
        </View>
      );
    }


    render() {
      return (
        <View style={styles.container}>
          {/* ---------------- header ---------------- */}
          <View style={styles.header}>
            <Header
              rightImage={GetPhoto('backIcon')}
              rightImageClick={() => { this.props.navigation.goBack(); }}
              headerName={'تفاصيل العرض'}
              leftImage={GetPhoto('menuButton')}
              leftImageClick={() => { this.props.navigation.openDrawer(); }}
            />
          </View>
          {/* ---------------- header slider -------------- */}
          <View style={styles.headerImageSlider}>
            <Carousel
              firstItem={0}
              activeSlideAlignment={'center'}
              inactiveSlideOpacity={0.7}
              data={this.state.mobileImages}
              itemWidth={wp('90%')}
              sliderWidth={wp('100%')}
              inactiveSlideScale={0.95}
              inactiveSlideShift={1}
              renderItem={this.renderHeaderImageItem}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            {/* --------------- item basic info ------------------ */}
            <View style={styles.basicInfoContainer}>
              <Image
                source={{ uri: 'https://placeimg.com/640/480/tech' }}
                style={styles.basicItemImage}
              />

              <View style={{ width: wp('67%') }}>
                <Text style={styles.regularText}>{'هواتف هواوى فرصه pro 10 Mate'}</Text>

                <View style={styles.dateContainer}>
                  <View style={[styles.dateSection, { width: wp('22%'), }]}>
                    <TextWithImage
                      container={{ width: wp('22%') }}
                      text={'تاريخ بدايه'}
                      textStyle={[styles.smallText, { marginLeft: wp('1%') }]}
                      ImageSource={GetPhoto('settings')}
                      ImageStyle={{ width: wp('6%'), height: hp('3%') }}
                    />
                    <View style={{ width: wp('22%'), flexDirection: 'row' }}>
                      <Text style={[styles.mediumText, { width: wp('6%'), textAlign: 'center', color: colors.lightOrange }]}>{'8'}</Text>
                      <Text style={styles.smallText}> {'ابريل 2019'} </Text>
                    </View>
                  </View>

                  <View style={{ height: '80%', width: 1.5, backgroundColor: colors.black }} />
                  <View style={[styles.dateSection, { alignItems: 'flex-end' }]}>
                    <TextWithImage
                      container={{ width: wp('26%') }}
                      text={'انتهاء الخصم'}
                      textStyle={[styles.smallText, { marginLeft: wp('1%') }]}
                      ImageSource={GetPhoto('settings')}
                      ImageStyle={{ width: wp('6%'), height: hp('3%') }}
                    />
                    <View style={{ width: wp('26%'), flexDirection: 'row' }}>
                      <Text style={[styles.mediumText, { width: wp('6%'), textAlign: 'center', color: colors.lightOrange }]}>{'28'}</Text>
                      <Text style={styles.smallText}> {'ابريل 2019'} </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.dateContainer}>
                  <TextWithImage
                    container={{ width: wp('22%') }}
                    text={'السعر الاجمالى'}
                    textStyle={[styles.smallText, { marginLeft: wp('1%') }]}
                    ImageSource={GetPhoto('settings')}
                    ImageStyle={{ width: wp('6%'), height: hp('3%') }}
                    />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.regularText, { color: colors.darkRed }]}>{'3788'}</Text>
                    <Text style={styles.smallText}> {'درهم'} </Text>
                  </View>
                </View>

              </View>
              {/* {this.renderDetails()}
            {this.renderDate()} */}

            </View>


            <View
              style={{ marginTop: hp('1%'), width: wp('90%'), }}>
              <Text
                style={[styles.regularText, { color: colors.darkerOrange }]}>
                {'معلومات العرض'}
              </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.offerSpecification}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemSpecification}
              />
              <Text style={[styles.regularText, { marginTop: hp('1%') }]}>{'ملاحظات'}</Text>
              <Text style={[styles.smallText, { marginTop: hp('1%'), color: colors.darkgray }]}>{'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز'}</Text>
              {/* <Text
                style={{ width: wp('80%'), fontSize: fonts.size.tiny, fontFamily: fonts.type.normal }}>
                {'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"'}
              </Text> */}
            </View>

            <View
              style={{ marginTop: hp('1%'), width: wp('90%'), alignItems: 'center' }}>
              <Text
                style={[styles.regularText, { color: colors.darkerOrange }]}>
                {'معلومات الناشر'}
              </Text>
              <View style={{ marginTop: hp('1%'), width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextWithImage
                  container={{ width: wp('22%') }}
                  text={'اتصال مباشر'}
                  textStyle={[styles.mediumText, { color: colors.black, marginLeft: wp('1%') }]}
                  ImageSource={GetPhoto('phoneContact')}
                  ImageStyle={{ width: wp('6%'), height: hp('3%') }}
                    />
                <View style={{ width: wp('36'), flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image
                    resizeMode="contain"
                    source={GetPhoto('instagram')}
                    style={{ width: wp('10%'), height: hp('4%') }} />
                  <Image
                    resizeMode="contain"
                    source={GetPhoto('twitter')}
                    style={{ width: wp('10%'), height: hp('4%') }} />
                  <Image
                    resizeMode="contain"
                    source={GetPhoto('facebook')}
                    style={{ width: wp('10%'), height: hp('4%') }} />
                </View>
              </View>
            </View>

            <View
              style={{ marginTop: hp('1%'), width: wp('90%') }}>
              <TextWithImage
                container={{ width: wp('90%') }}
                text={'رأس الخميه شارع الأمير محمد بن سلمان'}
                textStyle={[styles.regularText, { width: wp('75%'), color: colors.black, marginLeft: wp('1%') }]}
                ImageSource={GetPhoto('locationPin')}
                ImageStyle={{ width: wp('6%'), height: hp('4%'), tintColor: colors.darkRed }}
                    />
            </View>

            <TouchableOpacity
              style={{ marginTop: hp('1%'), width: wp('90%'), alignItems: 'flex-end' }}>
              <Text style={[styles.mediumText, { color: colors.lightOrange, textDecorationLine: 'underline' }]}>{'الموقع على الخريطه'}</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>

      );
    }
}

