import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const Icon = ({
  IconStyle, IconColor, item, onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress || item.onPress}
      style={{ width: wp('21.25%'), height: hp('13%'), alignItems: 'center', }}>
      <View
        style={[{ width: wp('18%'),
          height: hp('10%'),
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
          borderWidth: 0.5,
          borderColor: colors.darkgray }, IconStyle]}>
        <Image
          tintColor={IconColor}
          resizeMode="contain"
          source={item.image}
          style={{ width: wp('10%'), height: hp('5%') }} />
      </View>

      <Text
        style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
