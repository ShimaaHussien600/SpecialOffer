import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const RegularTextInput = ({
  textInputnStyle, placeholder, value, onChangeText, maxLength, keyboardType, onSubmitEditing, selectionColor, secureTextEntry
}) => {
  return (
    <TextInput
      secureTextEntry={!!secureTextEntry}
      selectionColor={selectionColor}
      onChangeText={onChangeText}
      maxLength={maxLength}
      value={value}
      keyboardType={keyboardType || 'default'}
      placeholder={placeholder}
      placeHolderColor={colors.darkgray}
      style={[{
        textAlign: (secureTextEntry) ? 'right' : 'left',
        width: wp('80%'),
        height: hp('8%'),
        backgroundColor: colors.lightgray,
        borderRadius: 4,
        padding: wp('2%'),
        fontFamily: fonts.type.normal,
        elevation: 1,
      },
      textInputnStyle]}
      onSubmitEditing={onSubmitEditing}
      />
  );
};

export const TextInputWithTitle = ({
  ContainerStyle, titleContainerStyle, title, titleStyle, textInputnStyle, placeholder, onChangeText, maxLength, keyboardType, onSubmitEditing, selectionColor, secureTextEntry
}) => {
  return (
    <View
      style={[{
        alignItems: 'center',
        width: wp('85%'),
      }, ContainerStyle]}>
      <View
        style={[{ width: wp('85%'),
          alignItems: 'flex-end' }, titleContainerStyle]}>
        <Text style={[{ fontSize: fonts.size.medium, fontFamily: fonts.type.medium }, titleStyle]}>{title}</Text>
      </View>
      <TextInput
        secureTextEntry={!!secureTextEntry}
        selectionColor={selectionColor}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType || 'default'}
        placeholder={placeholder}
        placeHolderColor={colors.darkgray}
        style={[{
          textAlign: (secureTextEntry) ? 'right' : 'left',
          width: wp('80%'),
          height: hp('8%'),
          backgroundColor: colors.lightgray,
          borderRadius: 4,
          padding: wp('2%'),
          fontFamily: fonts.type.normal,
          elevation: 1,
        },
        textInputnStyle]}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};
