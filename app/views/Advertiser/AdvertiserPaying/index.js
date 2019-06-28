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
import { RegularTextInput } from '../../../components /textinput';
import { RegularButton } from '../../../components /button';

export class AdvertiserPaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPayment: -1,
    };
  }
  render() {
    const { selectedPayment } = this.state;
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center', backgroundColor: colors.white }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'تحديد وسيلة الدفع'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
            />
        </View>

        <View
          style={{ marginTop: hp('5%'), height: hp('20%'), width: wp('85%'), flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => { this.setState({ selectedPayment: 1 }); }}
            style={{ height: hp('20%'),
              width: wp('38%'),
              backgroundColor: selectedPayment === 1 ? colors.darkRed : colors.white,
              borderRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center' }}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png' }}
              style={{ width: wp('25%'), height: hp('8%') }} />
            <Text
              style={{ fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                color: selectedPayment === 1 ? colors.white : colors.black }}>
              {'فيزا-ماستر كارد'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { this.setState({ selectedPayment: 2 }); }}
            style={{ height: hp('20%'),
              width: wp('38%'),
              backgroundColor: selectedPayment === 2 ? colors.darkRed : colors.white,
              borderRadius: 4,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center' }}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://nerdenterprises.com/wp-content/uploads/2018/12/PayPal-Logo.png' }}
              style={{ width: wp('25%'), height: hp('8%') }} />
            <Text
              style={{ fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                color: selectedPayment === 2 ? colors.white : colors.black }}>
              {'حساب باي بال'}
            </Text>
          </TouchableOpacity>

        </View>

        <RegularTextInput
          selectionColor={colors.darkRed}
          onChangeText={(email) => { this.setState({ email }); }}
          placeholder={'البريد الالكتروني'}
          textInputnStyle={{ marginTop: hp('10%'), width: wp('85%'), }} />

        <RegularButton
          onClick={() => { this.props.navigation.navigate('VisaPayment'); }}
          buttonStyle={{
            marginTop: hp('5%'),
            width: wp('85%'),
            height: hp('8%'),
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.darkRed }}
          buttonText={'متابعه'}
          textStyle={{ color: colors.white }} />
      </View>
    );
  }
}
