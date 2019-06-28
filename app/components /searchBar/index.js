import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export const SearhcBar = ({
  onChangeText, onPressSearch
}) => {
  return (
    <View
      style={{ width: wp('85%'),
        height: hp('8%'),
        paddingHorizontal: wp('2%'),
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        elevation: 3 }}>
      <TouchableOpacity
        onPress={onPressSearch}
        style={{ width: wp('10%'), height: hp('6%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.orange }}>
        <EvilIcons
          name="search"
          size={wp('8%')}
          color={colors.white} />
      </TouchableOpacity>

      <TextInput
        onSubmitEditing={onPressSearch}
        selectionColor={colors.darkOrange}
        onChangeText={onChangeText}
        placeholder={'هل تبحث عن شئ'}
        style={{ width: wp('68%'), fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
      />
    </View>
  );
};
