import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export default StyleSheet.create({
  containerStyle: {
    width: wp('75%'),
    height: hp('25%'),
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.white,
    // backgroundColor: 'red',
    elevation: 5
  },
  imageStyle: {
    width: '100%',
    height: hp('14%'),
    // backgroundColor: 'red',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'flex-end',
    // paddinHorizontal: '5%',
    // paddingHorizental: '4%',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    elevation: 2
  },
  percentageImageStyle: {
    width: wp('11%'),
    height: hp('11%'),
    marginRight: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  percentageMoreInfoImage: {
    width: wp('7.5%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: fonts.size.regular,
    fontFamily: fonts.type.medium,
    color: colors.darkOrange
  },
  mediumText: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.type.medium,
    color: colors.darkOrange
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.type.normal,
    color: colors.black
  },
  smallText: {
    fontSize: fonts.size.small,
    fontFamily: fonts.type.normal,
    color: colors.darkgray
  },
  contentStyle: {
    width: '90%',
    height: hp('10%'),
    // height: '40%',
    paddingVertical: '2%',
    // backgroundColor: 'red',
  },
  section: {
    width: '100%',
    height: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  sectionTextStyle: {
    width: '60%',
    // alignItems: 'flex-end'
  },
  locationPin: {
    width: wp('4%'),
    height: hp('5%'),
    tintColor: 'gray'
  },
  moreinfo: {
    width: '40%',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  locationContainer: {
    width: '28%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separtionLine:{
    width: '100%',
    marginVertical: '0.5%', 
    height: 0.5, 
    backgroundColor: colors.darkgray
  }

});
