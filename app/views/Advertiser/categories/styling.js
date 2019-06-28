import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../modules/colors';
import fonts from '../../../modules/fonts';

export default StyleSheet.create({
  categoryItemContainer: {
    marginTop: hp('2%'),
    marginRight: wp('3%'),
    width: wp('26%'),
    height: hp('20%'),
    // backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryItemImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  categorycontent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  regularText: {
    color: colors.orange,
    fontSize: fonts.size.regular,
    fontFamily: fonts.type.medium
  },
  shadowText: {
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 5,
  },
});
