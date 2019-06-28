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
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
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

class OfferDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.navigation.getParam('type', false),
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

  getCatImage = (ID) => {
    const categories = this.props.categories
    for(let i=0;i<categories.length;i+=1){
      if(categories[i].id == ID){
        return categories[i].image
      }
    }
    return 'https://placeimg.com/640/480/tech'
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
          source={{ uri: item.image }}
          style={{ width: wp('90%'), height: hp('25%'), borderRadius: 5 }} />
      </View>
    );
  }

  renderItemSpecification= ({ item, index }) => {
    return (
      <View
        style={{ marginTop: hp('1%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.regularText}>{item.name}</Text>
        <Text style={styles.regularText}>{item.desc}</Text>
      </View>
    );
  }


  render() {
    let type = this.props.itemDatailsType
    let itemDatails = {}
    if(type === 'Offer'){
      itemDatails = this.props.offerDetails
    } else {
      itemDatails = this.props.discountDetails
    }
    return (
      <View style={styles.container}>
        {/* ---------------- header ---------------- */}
        <View style={styles.header}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={`تفاصيل ${type === 'Offer' ? 'العرض': 'الخصم'}`}
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
            data={type == 'Offer'? itemDatails.offer_images : itemDatails.discount_images}
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
              source={{ uri: this.getCatImage(itemDatails.category) }}
              style={styles.basicItemImage}
            />

            <View style={{ width: wp('67%') }}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.regularText}>{itemDatails.name}</Text>
              </View>
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
                    <Text style={[styles.mediumText, { width: wp('6%'), textAlign: 'center', color: colors.lightOrange }]}>{moment(itemDatails.start_date).format('D')}</Text>
                    <Text style={styles.smallText}> {moment(itemDatails.start_date).format('MMM YYYY')} </Text>
                  </View>
                </View>

                <View style={{ height: '80%', width: 1.5, backgroundColor: colors.black }} />
                <View style={[styles.dateSection, { alignItems: 'flex-end' }]}>
                  <TextWithImage
                    container={{ width: wp('26%') }}
                    text={`انتهاء ${type === 'Offer' ? 'العرض': 'الخصم'}`}
                    textStyle={[styles.smallText, { marginLeft: wp('1%') }]}
                    ImageSource={GetPhoto('settings')}
                    ImageStyle={{ width: wp('6%'), height: hp('3%') }}
                  />
                  <View style={{ width: wp('26%'), flexDirection: 'row' }}>
                    <Text style={[styles.mediumText, { width: wp('6%'), textAlign: 'center', color: colors.lightOrange }]}>{moment(itemDatails.end_date).format('D')}</Text>
                    <Text style={styles.smallText}> {moment(itemDatails.end_date).format('MMM YYYY')} </Text>
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
                  <Text style={[styles.regularText, { color: colors.darkRed }]}>{itemDatails.price}</Text>
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
              {`معلومات ${type === 'Offer' ? 'العرض': 'الخصم'}`}
            </Text>
            {type === 'Offer' ? 
            <View>
              <FlatList
              showsVerticalScrollIndicator={false}
              data={itemDatails.offer_features}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItemSpecification}
              />
              <Text style={[styles.regularText, { marginTop: hp('1%') }]}>{'ملاحظات'}</Text>
              <Text style={[styles.smallText, { marginTop: hp('1%'), color: colors.darkgray }]}>{itemDatails.description}</Text>
            </View>
            :
            <View style={{width: wp('80%'), alignItems: 'flex-start'}}>
            <Text
              style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.normal}}>
              {itemDatails.description}
            </Text>
          </View>}
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
            style={{ marginTop: hp('1%'), width: wp('90%'),alignItems: 'flex-end' }}>
            <Text style={[styles.mediumText, { color: colors.lightOrange,textDecorationLine: 'underline' }]}>{'الموقع على الخريطه'}</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.OrderReducer.categories,
    itemDatailsType: state.OrderReducer.itemDatailsType,
    offerDetails: state.OrderReducer.offerDetails,
    discountDetails : state.OrderReducer.discountDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferDetails);
