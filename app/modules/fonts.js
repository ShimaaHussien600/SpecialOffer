import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const type = {
  normal: 'Cairo-Regular_1',
  light: 'Cairo-Light',
  medium: 'Cairo-SemiBold_0',
};

const size = {
  h1: wp('7.5%'),
  h2: wp('7%'),
  h3: wp('6.5%'),
  h4: wp('6%'),
  h5: wp('5.5%'),
  h6: wp('5%'),
  input: wp('4.5%'),
  regular: wp('4%'),
  medium: wp('3.5%'),
  small: wp('3%'),
  tiny: wp('2.5%'),
  xSmall: wp('2%'),
};

export default {
  type,
  size,
};
