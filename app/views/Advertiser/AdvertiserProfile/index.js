/* eslint-disable max-len */
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import colors from '../../../modules/colors';
import { RegularButton } from '../../../components /button';
import { Header } from '../../../components /header';
import { Card, AdvertiserCard } from '../../../components /card';
import fonts from '../../../modules/fonts';
import { UserCard, UserStats } from '../../../components /profie';
import { ClickableText } from '../../../components /text';
import { CustomeAlert } from '../../../components /CustomeAlert';
import { TextInputWithTitle, RegularTextInput } from '../../../components /textinput';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AdvertiserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: null,
      commercialRegistryImage: null,
      openAlert: false,
      website: 'www.google.com',
      facebook: 'www.facebook.com/test123',
      twitter: 'www.twitter.com/test123',
      instagram: '',
      changingText: '',
      changingTextArbic: '',
    };
  }

  handleImagePicked = (which) => {
    ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('FLAG', 'AddProduct', 'handleImagePicked', 'response', response);
        const source = { uri: response.uri, type: response.type ? response.type : 'image/jpeg', name: response.fileName ? response.fileName : 'prof.jpg' };
        if (which) {
          this.setState({ commercialRegistryImage: source });
        } else {
          this.setState({ userImage: source });
        }
      }
    });
  }

  render() {
    const { website, facebook, twitter, instagram } = this.state;
    const { userDetails } = this.props;
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'الملف الشخصي'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
          />
        </View>

        <View
          style={{ marginTop: hp('1%'),
            width: wp('100%'),
            height: hp('15%'),
            alignItems: 'center' }}>

          <UserCard
            noImage={!this.state.userImage}
            UserImage={this.state.userImage || GetPhoto('addImage')}
            onPressImage={() => { this.handleImagePicked(0); }}
            UserName={userDetails.publisher.name}
            UserPhoneNumber={userDetails.publisher.phone}
            UserEmail={userDetails.email}
          />
        </View>

        <View style={{ marginTop: hp('2%'), height: 1, width: wp('85%'), backgroundColor: colors.gray }} />
        <View
          style={{ marginTop: hp('2%'),
            width: wp('100%'),
            height: hp('8%'),
            // backgroundColor: 'red',
            alignItems: 'center' }}>
          <UserStats
            activeOffersNumber={this.props.activeDiscounts.length + this.props.activeOffers.length}
            watchNumers={this.props.advertiserInsights.total_visites}
            followersNumber={this.props.advertiserInsights.likes}
          />
        </View>
        <View style={{ marginTop: hp('2%'), height: 1, width: wp('85%'), backgroundColor: colors.gray }} />

        <View
          style={{ marginTop: hp('2%'),
            width: wp('100%'),
            // height: hp('40%'),
            // backgroundColor: 'red',
            alignItems: 'center'
          }}>
          <ClickableText
            containerStyle={{ width: wp('85%'), justifyContent: 'space-between' }}
            regularText={'رابط العنوان على الخريطة'}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}
            clickableText={'اضافة'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkRed }}
            onPress={() => {}}
              />

          {website !== '' &&
          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              alignItems: 'flex-start' }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}>{'الموقع الالكتروني'}</Text>
          </View>}
          <ClickableText
            containerStyle={{ marginTop: website === '' ? hp('2%') : hp('0%'), width: wp('85%'), justifyContent: 'space-between' }}
            regularText={website === '' ? 'الموقع الالكتروني' : website}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: website === '' ? colors.gray : colors.darkgray }}
            clickableText={website === '' ? 'اضافة' : 'تعديل'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: website === '' ? colors.darkRed : colors.lightOrange }}
            onPress={() => { this.setState({ openAlert: true, changingText: 'website', changingTextArbic: 'الموقع الالكتروني' }); }}
              />

          {facebook !== '' &&
          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              alignItems: 'flex-start' }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}>{'حساب الفيسبوك'}</Text>
          </View>}
          <ClickableText
            containerStyle={{ marginTop: facebook === '' ? hp('2%') : hp('0%'), width: wp('85%'), justifyContent: 'space-between' }}
            regularText={facebook === '' ? 'حساب الفيسبوك' : facebook}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: facebook === '' ? colors.gray : colors.darkgray }}
            clickableText={facebook === '' ? 'اضافة' : 'تعديل'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: facebook === '' ? colors.darkRed : colors.lightOrange }}
            onPress={() => { this.setState({ openAlert: true, changingText: 'facebook', changingTextArbic: 'حساب الفيسبوك' }); }}
              />

          {twitter !== '' &&
          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              alignItems: 'flex-start' }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}>{'حساب تويتر'}</Text>
          </View>}
          <ClickableText
            containerStyle={{ marginTop: twitter === '' ? hp('2%') : hp('0%'), width: wp('85%'), justifyContent: 'space-between' }}
            regularText={twitter === '' ? 'حساب تويتر' : twitter}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: twitter === '' ? colors.gray : colors.darkgray }}
            clickableText={twitter === '' ? 'اضافة' : 'تعديل'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: twitter === '' ? colors.darkRed : colors.lightOrange }}
            onPress={() => { this.setState({ openAlert: true, changingText: 'twitter', changingTextArbic: 'حساب تويتر' }); }}
              />

          {instagram !== '' &&
          <View
            style={{ marginTop: hp('2%'),
              width: wp('85%'),
              alignItems: 'flex-start' }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}>{'حساب الانستجرام'}</Text>
          </View>}
          <ClickableText
            containerStyle={{ marginTop: instagram === '' ? hp('2%') : hp('0%'), width: wp('85%'), justifyContent: 'space-between' }}
            regularText={instagram === '' ? 'حساب الانستجرام' : instagram}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: instagram === '' ? colors.gray : colors.darkgray }}
            clickableText={instagram === '' ? 'اضافة' : 'تعديل'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: instagram === '' ? colors.darkRed : colors.lightOrange }}
            onPress={() => { this.setState({ openAlert: true, changingText: 'instagram', changingTextArbic: 'حساب الانستجرام' }); }}
              />

          {/* <ClickableText
            containerStyle={{ marginTop: hp('2%'), width: wp('85%'), justifyContent: 'space-between' }}
            regularText={'حساب الانستجرام'}
            regularTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}
            clickableText={'اضافة'}
            clickableTextStyle={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkRed }}
            onPress={() => {}}
              /> */}
        </View>

        <View
          style={{ marginTop: hp('3%'),
            width: wp('100%'),
            paddingLeft: wp('7.5%'),
            height: hp('15%'),
            // backgroundColor: 'red',
            flexDirection: 'row', }}>

          <View
            style={{ width: wp('50%'),
              alignItems: 'flex-start' }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.gray }}>{'رقم السجل التجاري'}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { this.handleImagePicked(1); }}
            style={{ width: wp('35%'),
              height: hp('13%'),
              backgroundColor: colors.lightgray,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderRadius: 4,
              borderColor: colors.darkgray,
              alignItems: 'center',
              justifyContent: 'center' }}>
            <Image
              resizeMode="contain"
              source={this.state.commercialRegistryImage || GetPhoto('addImage')}
              style={{
                width: this.state.commercialRegistryImage ? '100%' : wp('15%'),
                height: this.state.commercialRegistryImage ? '100%' : hp('13%') }} />
          </TouchableOpacity>

        </View>

        <CustomeAlert
          AlertWidth={0.85}
          AlertHeight={0.40}
          AlertPosition="center"
          borderRadius={8}
          CloseAlert={() => {
            this.setState({ openAlert: false });
          }}
          AlertOpen={this.state.openAlert}>
          <View
            style={{
              width: wp('85%'),
              height: hp('40%'),
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.medium }}>{this.state.changingTextArbic}</Text>
            <RegularTextInput
              value={this.state[this.state.changingText]}
              selectionColor={colors.darkRed}
              onChangeText={(text) => { this.setState({ [this.state.changingText]: text }); }}
              placeholder={'الرابط'}
              textInputnStyle={{ marginTop: hp('5%'), width: wp('70%'), height: hp('7%'), }}
              />
            <View
              style={{
                marginTop: hp('5%'),
                width: wp('70%'),
                alignItems: 'flex-start',
              }}>
              <RegularButton
                onClick={() => { this.setState({ openAlert: false }); }}
                buttonStyle={{
                  width: wp('30%'),
                  height: hp('7%'),
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.darkerOrange }}
                buttonText={'حفط'}
                textStyle={{ color: colors.white }} />
            </View>
          </View>
        </CustomeAlert>

      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    userDetails: state.UserReducer.userDetails,
    advertiserInsights: state.UserReducer.advertiserInsights,
    activeDiscounts: state.AdvertiserReducer.activeDiscounts,
    activeOffers: state.AdvertiserReducer.activeOffers,

  };
}


function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvertiserProfile);

