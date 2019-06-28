import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const CustomCheckBox = ({
  Containerstyle, selected, firstOption, firstOptionOnPress, secondOption, secondOptionOnPress,
}) => {
  return (
    <View
      style={[{
        width: wp('45%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
      }, Containerstyle]}>

      <TouchableOpacity
        onPress={firstOptionOnPress}
        style={{
          width: wp('16%'),
          height: wp('8%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        {selected !== 1 ?
          <View style={{
            width: wp('6%'),
            height: wp('6%'),
            //   alignItems:'center',
            //   justifyContent:'center',
            borderWidth: 1.5,
            borderColor: colors.darkgray
          }} />
          :
          <Ionicons
            name="md-checkbox-outline"
            size={wp('8%')}
            color={colors.darkRed} />}
        <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: selected === 1 ? colors.darkRed : 'gray' }}>
          {firstOption}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={secondOptionOnPress}
        style={{
          width: wp('16%'),
          height: wp('8%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        {selected !== 2 ?
          <View style={{
            width: wp('6%'),
            height: wp('6%'),
            //   alignItems:'center',
            //   justifyContent:'center',
            borderWidth: 1.5,
            borderColor: colors.darkgray
          }} />
          :
          <Ionicons
            name="md-checkbox-outline"
            size={wp('8%')}
            color={colors.darkRed} />}
        <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium, color: selected === 2 ? colors.darkRed : 'gray' }}>
          {secondOption}
        </Text>
      </TouchableOpacity>

    </View>
  );
};
