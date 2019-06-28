/* eslint-disable max-len */
import {
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { Component } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import colors from '../../modules/colors';
import { NotificationCard } from '../../components /card';
import fonts from '../../modules/fonts';

export class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      notificationOptions: [
        {
          name: 'سيارات'
        },
        {
          name: 'هواتف'
        },
        {
          name: 'طعام'
        },
        {
          name: 'لاب توب'
        },
        {
          name: 'معلبات'
        },
      ],
      notificationData: [
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/tech' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/arch' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/nature' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/any' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/tech' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          notificatioImage: { uri: 'https://placeimg.com/640/480/tech' },
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
  render() {
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center', backgroundColor: colors.white }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'الاشعارات'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>
        <View
          style={{
            width: wp('80%'),
            height: hp('15%'),
            marginTop: hp('3%'),
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={GetPhoto('mailbox')}
            style={{ width: wp('50%'), height: hp('6%') }}
        />
          <Text style={{ marginTop: hp('1%'), fontSize: fonts.size.regular, fontFamily: fonts.type.medium, color: colors.black }}>{'جديد الاقسام التي تتابعها'}</Text>
          <Text style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal }}>{'متابعة الاقسام لاعتنام الفرص والتخفيضات'}</Text>
        </View>

        <View
          style={{
            width: wp('100%'),
            height: hp('10%'),
            marginTop: hp('2%'),
            backgroundColor: '#F5F5F5',
            alignItems: 'flex-end',
            // justifyContent: 'center'
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={this.state.notificationOptions}
            extraData={this.state}
            contentContainerStyle={{ flexDirection: 'row-reverse' }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View
                  style={{ width: wp('30%'), height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                  <View
                    style={{
                      width: wp('25%'),
                      height: hp('5%'),
                      alignItems: 'center',
                      backgroundColor: colors.lightOrange,
                      borderRadius: wp('5%'),
                      paddingHorizontal: wp('3%'),
                      flexDirection: 'row-reverse',
                      justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: fonts.size.small, fontFamily: fonts.type.medium, color: colors.white }}>{item.name}</Text>
                    <View style={{
                      width: wp('5%'),
                      height: wp('5%'),
                      borderRadius: wp('2.5%'),
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.white }}>
                      <EvilIcons
                        name="close"
                        size={wp('5%')}
                        color={colors.lightOrange} />
                    </View>
                  </View>

                </View>

              );
            }}
          />
        </View>

        <View
          style={{
            width: wp('100%'),
            height: hp('58%'),
            marginTop: hp('3%'),
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.notificationData}
            extraData={this.state}
            contentContainerStyle={{ paddingBottom: hp('2%') }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View
                  style={{ marginTop: hp('2%'), width: wp('100%'), height: hp('14%'), alignItems: 'center' }}>
                  <NotificationCard
                    onPress={item.onPress}
                    NotificatioImage={item.notificatioImage}
                    NotificatioDiscription={item.notificatioDiscription}
                    percentage={item.percentage}
                    price={item.price}
                    currency={item.currency}
                  />

                </View>

              );
            }}
          />
        </View>
      </View>
    );
  }
}
