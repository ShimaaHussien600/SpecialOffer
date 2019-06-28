/* eslint-disable max-len */
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import colors from '../../../modules/colors';
import { RegularButton } from '../../../components /button';
import { Header } from '../../../components /header';
import { Card, AdvertiserCard } from '../../../components /card';
import fonts from '../../../modules/fonts';
import { UserReducer, UIReducer, AdvertiserReducer, OrderReducer } from '../../../services/reducers';
import { adsImage } from '../../../assets/image/staticImages';

const { GetActiveDiscounts, GetActiveOffers } = AdvertiserReducer;
const { GetAdvertiserInsights } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { GetOfferDetail, GetDiscountDetail, ChangeSelectedItmeDatailsType, ChangeSelectedCatItem } = OrderReducer;


class AdvertiserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      expand: false,
      offerData: [
        {
          offerDiscription: ' كلام كتير شوية ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://img.xfinitymobile.com/image/upload/h_540,c_fit,f_auto,q_auto,fl_lossy/v1512165916/client/v2/images/plan_btg_phone-usage_crop.png' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          offerDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://www.phonescoop.com/img/a/f/21650_460_m_7bc499c161bf40ffb298c4e5bcf657e6.jpg' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          offerDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://www.phonescoop.com/img/a/p/84532_800.jpg' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
      ]
    };
  }

  getActiveOfferAd = () => {
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        console.log('AdvertiserHome', 'getActiveAd', 'onFail', 'error', error);
        alert('لم نستطيع تحميل ارقام الاحصائيات');
      }
    };
    this.props.GetActiveOffers(responseHandler);
  }

  getActiveDiscountAd = () => {
    const responseHandler = {
      onSuccess: () => {
        this.getActiveOfferAd();
        // this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        console.log('AdvertiserHome', 'getActiveAd', 'onFail', 'error', error);
        alert('لم نستطيع تحميل ارقام الاحصائيات');
      }
    };
    this.props.GetActiveDiscounts(responseHandler);
  }

  componentDidMount() {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.getActiveDiscountAd();
        // this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        console.log('AdvertiserHome', 'componentDidMount', 'onFail', 'error', error);
        alert('لم نستطيع تحميل ارقام الاحصائيات');
      }
    };
    this.props.GetAdvertiserInsights(responseHandler);
  }

  loadOfferDetails = (ID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
        this.props.ChangeSelectedItmeDatailsType('Offer')
        this.props.navigation.navigate('OfferDetails');
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetOfferDetail(ID, responseHandler)
  }

  loadDiscountDetails = (ID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
        this.props.ChangeSelectedItmeDatailsType('Discount')
        this.props.navigation.navigate('OfferDetails');
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetDiscountDetail(ID, responseHandler)
  }

  render() {
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('alarm')}
            rightImageClick={() => { this.props.navigation.navigate('AdvertiserNotification'); }}
            headerName={'الرئيسية'}
            leftImage={GetPhoto('menuButton')}
            noRotate
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
          />
        </View>

        <View
          style={{ marginTop: hp('3%'), height: hp('20%'), width: wp('85%'), flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              height: hp('20%'),
              width: wp('38%'),
              backgroundColor: colors.darkerOrange,
              borderRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                color: colors.white
              }}>
              {'المشاهدات'}
            </Text>
            <Text
              style={{
                marginTop: hp('1%'),
                fontSize: fonts.size.h1,
                fontFamily: fonts.type.medium,
                // fontWeight: 'bold',
                color: colors.lightOrange
              }}>
              {`${this.props.advertiserInsights.total_visites}`}
            </Text>
          </View>

          <View
            style={{
              height: hp('20%'),
              width: wp('38%'),
              backgroundColor: colors.lightOrange,
              borderRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                color: colors.white
              }}>
              {'الاعجابات'}
            </Text>
            <Text
              style={{
                marginTop: hp('1%'),
                fontSize: fonts.size.h1,
                fontFamily: fonts.type.medium,
                // fontWeight: 'bold',
                color: colors.darkerOrange
              }}>
              {`${this.props.advertiserInsights.likes}`}
            </Text>
          </View>

        </View>


        <View style={{ marginTop: hp('2%'), height: hp('60%'), width: wp('100%'), alignItems: 'center' }}>
          <View
            style={{ width: wp('85%') }}>
            <Text
              style={{
                fontSize: fonts.size.input,
                fontFamily: fonts.type.medium,
                color: colors.black
              }}>
              {'الاعلانات الفعالة'}
            </Text>
          </View>
          <View style={{ height: hp('55%'), width: wp('100%'), }}>
            <ScrollView
              style={{ width: wp('100%') }}
              contentContainerStyle={{ paddingBottom: hp('2%'), alignItems: 'center' }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.activeDiscounts}
                extraData={this.props}
                contentContainerStyle={{ paddingBottom: hp('2%') }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ index, item }) => {
                  return (
                    <View
                      style={{ marginTop: index === 0 ? hp('0.5%') : hp('2%'), width: wp('100%'), alignItems: 'center' }}>
                      <AdvertiserCard
                        onPress={() => { this.loadDiscountDetails(item.id) }}
                        offerImage={item.discount_images[0] ? { uri: item.discount_images[0].image } : { uri: adsImage }}
                        offerDiscription={item.name}
                        percentage={item.precentage}
                        price={item.price}
                        currency={'درهم'}
                        likes={item.likes}
                        deadline={`${item.days_remaining} يوم على انتهاء العرض`}
                        visited={item.visited} />
                    </View>
                  );
                }}
              />
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.activeOffers}
                extraData={this.state}
                contentContainerStyle={{ paddingBottom: hp('3%') }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ index, item }) => {
                  return (
                    <View
                      style={{ marginTop: index === 0 ? hp('0.5%') : hp('2%'), width: wp('100%'), alignItems: 'center' }}>
                      <AdvertiserCard
                        onPress={() => { this.loadOfferDetails(item.id) }}
                        offerImage={{ uri: item.offer_images[0].image }}
                        offerDiscription={item.name}
                        percentage={'0'}
                        price={item.price}
                        currency={'درهم'}
                        likes={item.likes}
                        deadline={`${item.days_remaining} يوم على انتهاء العرض`}
                        visited={item.visited} />
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>

        </View>

        <View
          style={{
            position: 'absolute',
            top: hp('88.5%'),
            // height: hp('10%'),
            width: wp('100%'),
            alignItems: 'center',
            backgroundColor: colors.white
          }}>
          <RegularButton
            onClick={() => { this.props.navigation.navigate('AddAdvertisement'); }}
            buttonStyle={{
              width: wp('100%'),
              height: hp('8%'),
              //   borderBottomRightRadius: wp('8%'),
              //   borderBottomLeftRadius: wp('8%'),
              // borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.darkRed
            }}
            buttonText={'اضف اعلان جديد'}
            textStyle={{ color: colors.white }} />
        </View>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    advertiserInsights: state.UserReducer.advertiserInsights,
    activeDiscounts: state.AdvertiserReducer.activeDiscounts,
    activeOffers: state.AdvertiserReducer.activeOffers,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    GetAdvertiserInsights: (responseHandler) => {
      dispatch(GetAdvertiserInsights(responseHandler));
    },
    GetActiveDiscounts: (responseHandler) => {
      dispatch(GetActiveDiscounts(responseHandler));
    },
    GetActiveOffers: (responseHandler) => {
      dispatch(GetActiveOffers(responseHandler));
    },
    turnOnPageLoading: () => {
      dispatch(turnOnPageLoading());
    },
    turnOffPageLoading: () => {
      dispatch(turnOffPageLoading());
    },
    GetOfferDetail: (orderID, responseHandler) => {
      dispatch(GetOfferDetail(orderID, responseHandler));
    },
    GetDiscountDetail: (orderID, responseHandler) => {
      dispatch(GetDiscountDetail(orderID, responseHandler));
    },
    ChangeSelectedItmeDatailsType: (type) => {
      dispatch(ChangeSelectedItmeDatailsType(type));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvertiserHome);
