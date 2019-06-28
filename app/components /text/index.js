import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const ClickableText = ({
  containerStyle, regularText, regularTextStyle, clickableText, clickableTextStyle, onPress
}) => {
  return (
    <View
      style={[{ flexDirection: 'row', alignItems: 'flex-end' }, containerStyle]}>
      <Text
        style={regularTextStyle}>
        {regularText}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{ marginLeft: wp('2%') }}>
        <Text
          style={clickableTextStyle}>
          {clickableText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const TextWithUnderLine = ({
  containerwidth, onPress, text, selected, selectedColor, notSelectedColor
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: containerwidth || wp('20%'), height: hp('7%'), alignItems: 'center',
      // borderBottomColor: colors.darkgray, borderBottomWidth: 1 
      }}>
      <View
        style={{ width: '100%', height: hp('5%'), alignItems: 'center', }}>
        <Text
          style={{ color: selected ? selectedColor : notSelectedColor, fontSize: fonts.size.medium, fontFamily: fonts.type.medium }}>
          {text}
        </Text>
        <View style={{ marginTop: hp('2%'), width: '100%', height: selected ? 3 : 1, backgroundColor: selected ? selectedColor : colors.darkgray }} />
      </View>
    </TouchableOpacity>
  );
};


export const TextWithCircle = ({
  onPress, text,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: wp('75%'), height: hp('5%'), alignItems: 'center', flexDirection: 'row-reverse', }}>
      <View style={{ width: wp('5%'), height: wp('5%'), borderRadius: wp('2.5%'), backgroundColor: colors.orange }} />
      <Text
        style={{ marginRight: wp('2%'), color: colors.black, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const TextWithImage = ({
  text, textStyle, ImageSource, ImageStyle, container
}) => {
  return (
    <View
      style={[{ width: wp('55%'), height: hp('5%'), alignItems: 'center', flexDirection: 'row', }, container]}>
      <Image
        resizeMode="contain"
        source={ImageSource}
        style={[{ width: wp('13%'), height: hp('7%') }, ImageStyle]} />
      <Text
        style={[{ marginLeft: wp('2%'), width: wp('40%'), color: colors.black, fontSize: fonts.size.regular, fontFamily: fonts.type.medium }, textStyle]}>
        {text}
      </Text>
    </View>
  );
};
