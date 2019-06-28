/* eslint-disable max-len */
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import { Header } from '../../../components /header';
import colors from '../../../modules/colors';
import { NotificationCard, AdvertiserNotificationCard } from '../../../components /card';
import fonts from '../../../modules/fonts';
import { RegularTextInput, TextInputWithTitle } from '../../../components /textinput';
import { RegularButton } from '../../../components /button';

export class VisaPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPayment: -1,
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
            headerName={'الدفع بالفيزا'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
              />
        </View>

        <View
          style={{ marginTop: hp('5%'), height: hp('10%'), width: wp('85%'), alignItems: 'center' }}>
          <Image
            resizeMode="contain"
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png' }}
            style={{ width: wp('40%'), height: hp('10%') }} />
        </View>

        <View
          style={{
            marginTop: hp('5%'),
            width: wp('100%'),
            alignItems: 'center'
          }}>
          <TextInputWithTitle
            title={'اسم صاحب البطاقة'}
            selectionColor={colors.darkRed}
            onChangeText={(name) => { this.setState({ name }); }}
            textInputnStyle={{ marginTop: hp('1%'), width: wp('85%'), height: hp('7%'), backgroundColor: colors.white, elevation: 3 }} />

          <TextInputWithTitle
            ContainerStyle={{ marginTop: hp('2%') }}
            title={'رقم البطاقة'}
            keyboardType={'phone-pad'}
            selectionColor={colors.darkRed}
            onChangeText={(cardNumber) => { this.setState({ cardNumber }); }}
            textInputnStyle={{ marginTop: hp('1%'), width: wp('85%'),height: hp('7%'), backgroundColor: colors.white, elevation: 3 }} />

          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              flexDirection: 'row-reverse',
              justifyContent: 'space-between' }}>

            <TextInputWithTitle
              ContainerStyle={{ width: wp('38%') }}
              title={'الشهر'}
              titleContainerStyle={{ width: wp('38%') }}
              keyboardType={'phone-pad'}
              selectionColor={colors.darkRed}
              onChangeText={(month) => { this.setState({ month }); }}
              textInputnStyle={{ marginTop: hp('1%'), width: wp('38%'),height: hp('7%'), backgroundColor: colors.white, elevation: 3 }} />

            <TextInputWithTitle
              ContainerStyle={{ width: wp('38%') }}
              title={'السنة'}
              titleContainerStyle={{ width: wp('38%') }}
              keyboardType={'phone-pad'}
              selectionColor={colors.darkRed}
              onChangeText={(year) => { this.setState({ year }); }}
              textInputnStyle={{ marginTop: hp('1%'), width: wp('38%'),height: hp('7%'), backgroundColor: colors.white, elevation: 3 }} />
          </View>

          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              alignItems: 'flex-end' }}>
            <TextInputWithTitle
              ContainerStyle={{ width: wp('38%') }}
              title={'الرقم السري'}
              titleContainerStyle={{ width: wp('38%') }}
              keyboardType={'phone-pad'}
              selectionColor={colors.darkRed}
              onChangeText={(cvv) => { this.setState({ cvv }); }}
              textInputnStyle={{ marginTop: hp('1%'), width: wp('38%'),height: hp('7%'), backgroundColor: colors.white, elevation: 3 }} />
          </View>

        </View>

        <View
          style={{ marginTop: hp('5%'),
            width: wp('100%'),
            alignItems: 'center' }}>
          <RegularButton
            onClick={() => { this.props.navigation.navigate('AdvertiserHome'); }}
            buttonStyle={{
              width: wp('85%'),
              height: hp('8%'),
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.darkRed }}
            buttonText={'متابعه'}
            textStyle={{ color: colors.white }} />
        </View>

      </View>

    );
  }
}
