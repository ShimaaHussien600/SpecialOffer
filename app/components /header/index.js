import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const Header = ({
  headerstyle, rightImage, rightImageClick, headerName, leftImage, leftImageClick, rightImageColor, noRotate
}) => {
  return (
    <View
      style={[{ width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between' }, headerstyle]}>

      <TouchableOpacity
        onPress={leftImageClick}
        style={{ width: wp('5%'), height: hp('5%') }}>
        {leftImage &&
        <Image
          resizeMode="contain"
          source={leftImage}
          style={{ width: '100%', height: '100%' }} />}
      </TouchableOpacity>

      <Text
        style={{ color: colors.black, fontSize: fonts.size.input, fontFamily: fonts.type.normal }}>
        {headerName}
      </Text>

      <TouchableOpacity
        onPress={rightImageClick}
        style={{ width: wp('5%'), height: hp('5%') }}>
        {rightImage &&
        <Image
          resizeMode="contain"
          source={rightImage}
          style={{ width: '100%', height: '100%', transform: [{ rotate: noRotate ? '0deg' : '180deg' }], tintColor: rightImageColor }} />}
      </TouchableOpacity>

    </View>
  );
};
