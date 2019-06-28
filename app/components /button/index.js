import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import fonts from '../../modules/fonts';

export const RegularButton = ({
  onClick, buttonStyle, buttonText, textStyle
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onClick}
      style={buttonStyle}
      >
      <Text
        style={[{ fontSize: fonts.size.input, fontFamily: fonts.type.medium }, textStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};


export const ImageButton = ({
  onClick, buttonStyle, ImageSource, ImageStyle
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={buttonStyle}>
      <Image
        resizeMode="contain"
        source={ImageSource}
        style={ImageStyle}
      />
    </TouchableOpacity>
  );
};
