import React from 'react';
import {
  ImageBackground,
} from 'react-native';

export const ImageWithContent = props => {
  return (
    <ImageBackground
      style={props.imageStyle}
      source={props.imageSource}
      imageStyle={{
        tintColor: props.imageStyle.tintColor,
        borderRadius: props.imageStyle.borderRadius,
        borderTopRightRadius: props.imageStyle.borderTopRightRadius,
        borderBottomRightRadius: props.imageStyle.borderBottomRightRadius,
        borderTopLeftRadius: props.imageStyle.borderTopLeftRadius,
        borderBottomLeftRadius: props.imageStyle.borderBottomLeftRadius
      }}
      resizeMode={props.resizeMode ? props.resizeMode : 'cover'}
    >
      {props.children}
    </ImageBackground>
  );
};
