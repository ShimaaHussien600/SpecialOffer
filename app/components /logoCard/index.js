import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';

export const LogoCard = ({
  onPress, logoImage,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.2}
      style={{ width: wp('26%'),
        height: hp('8%'),
      }}>
      <View
        style={{ width: wp('24%'),
          height: hp('7.5%'),
          borderRadius: 5,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5 }}>
        <Image
          resizeMode="contain"
          source={logoImage}
          style={{ width: wp('10%'), height: hp('4%') }} />
      </View>
    </TouchableOpacity>
  );
};
