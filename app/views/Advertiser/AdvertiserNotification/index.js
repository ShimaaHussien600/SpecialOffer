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
import { GetPhoto } from '../../../modules/images';
import { Header } from '../../../components /header';
import colors from '../../../modules/colors';
import { NotificationCard, AdvertiserNotificationCard } from '../../../components /card';
import fonts from '../../../modules/fonts';

export class AdvertiserNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      notificationData: [
        {
          notificatioDiscription: 'تم الموافقة على عرض اعلانك',
          notificatioImage: GetPhoto('newProduct'),
          status: 'تهانيا',
          time: '10 د',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'اعلانك مخالف للقوانين الخاصة بالتطبيق',
          notificatioImage: GetPhoto('sad'),
          status: 'ناسف',
          time: '19 د',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'لتفعيل عرض الاعلان مستحق',
          notificatioImage: GetPhoto('coins'),
          status: 'مبالغ مالية',
          money: '2240',
          time: '23 د',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'اعلانك مخالف للقوانين الخاصة بالتطبيق',
          notificatioImage: GetPhoto('sad'),
          status: 'ناسف',
          time: '27 د',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'لتفعيل عرض الاعلان مستحق',
          notificatioImage: GetPhoto('coins'),
          status: 'مبالغ مالية',
          time: '33 د',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          notificatioDiscription: 'تم الموافقة على عرض اعلانك',
          notificatioImage: GetPhoto('newProduct'),
          status: 'تهانيا',
          time: '41 د',
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
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'الاشعارات'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
          />
        </View>
        <View
          style={{
            width: wp('95%'),
            height: hp('20%'),
            marginTop: hp('3%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.lightgray
          }}>
          <Image
            resizeMode="contain"
            source={GetPhoto('mailbox')}
            style={{ width: wp('50%'), height: hp('6%') }}
          />
          <Text style={{ marginTop: hp('1%'), fontSize: fonts.size.input, fontFamily: fonts.type.medium, color: colors.black }}>{'جديد الاشعارات'}</Text>
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
                  <AdvertiserNotificationCard
                    onPress={() => { }}
                    NotificatioImage={item.notificatioImage}
                    NotificatioDiscription={item.notificatioDiscription}
                    status={item.status}
                    time={item.time}
                    money={item.money ? item.money : false}
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
