import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const UserCard = ({
  UserImage, onPressImage, noImage, UserName, UserPhoneNumber, UserEmail
}) => {
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp('15%'),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
      }}>
      <TouchableOpacity
        onPress={onPressImage}
        style={{ width: wp('22%'),
          height: wp('22%'),
          borderRadius: wp('11%'),
          backgroundColor: colors.lightgray,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: colors.darkgray,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Image
          resizeMode="contain"
          source={UserImage}
          style={{ width: noImage ? '50%' : '100%', height: noImage ? '50%' : '100%' }} />
      </TouchableOpacity>

      <View
        style={{ height: hp('15%'),
          marginLeft: wp('3%'),
          alignItems: 'flex-start',
          justifyContent: 'center' }}>
        <Text
          style={{ fontSize: fonts.size.input, fontFamily: fonts.type.medium, color: colors.black }}> {UserName}
        </Text>
        <Text
          style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.medium, color: colors.darkerOrange }}> {UserPhoneNumber}
        </Text>
        <Text
          style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.medium, color: colors.lightOrange }}> {UserEmail}
        </Text>
      </View>
    </View>
  );
};

export const UserStats = ({
  activeOffersNumber, watchNumers, followersNumber
}) => {
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp('8%'),
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor: 'red'
      }}>
      <View
        style={{ height: hp('8%'),
          alignItems: 'center',
          justifyContent: 'center' }}>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkRed }}> {activeOffersNumber}
        </Text>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkgray }}> {'العروض النشطة'}
        </Text>
      </View>

      <View
        style={{ height: hp('8%'),
          alignItems: 'center',
          justifyContent: 'center' }}>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkRed }}> {watchNumers}
        </Text>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkgray }}> {'المشاهدات'}
        </Text>
      </View>

      <View
        style={{ height: hp('8%'),
          alignItems: 'center',
          justifyContent: 'center' }}>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkRed }}> {followersNumber}
        </Text>
        <Text
          style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: colors.darkgray }}> {'المتابعين'}
        </Text>
      </View>

    </View>
  );
};
