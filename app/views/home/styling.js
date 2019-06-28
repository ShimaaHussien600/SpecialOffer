import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../modules/colors';
import fonts from '../../modules/fonts';

export default StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center'
  },
  header: {
    marginTop: hp('2%'),
    height: hp('5%')
  },
  scrollViewContent: {
    width: wp('100%'),
    alignItems: 'center',
    paddingBottom: hp('7%')
  },
  sectionConainer: {
    marginTop: hp('5%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  headerNavigationButton: {
    position: 'absolute',
    height: hp('25%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    // backgroundColor: 'red'
  },
  headerNavigationButtonItem: {
    zIndex: 1,
    width: wp('10%'),
    height: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  headerNavigationButtonImage: {
    width: wp('5%'),
    height: wp('5%'),
    tintColor: colors.white
  },
  headerItemContainer: {
    width: wp('100%'),
    height: hp('25%')
  },
  headerItemTextContainer: {
    width: wp('100%'),
    height: hp('25%'),
    alignItems: 'center'
  },
  mediumText: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.type.medium,
    color: colors.white
  },
  smallText: {
    color: colors.lightOrange,
    fontSize: fonts.size.small,
    fontFamily: fonts.type.medium
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
  sectionLabelContainer: {
    height: hp('4%'),
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardContainer: {
    marginTop: hp('1%'),
    width: wp('100%'),
    alignItems: 'flex-end',
  },
  flatlistContainer: {
    width: wp('92.5%'),
    // paddingLeft: wp('2%'),
    // backgroundColor: 'red',
  },

  // ----------- offers ------------
  offerItemContainer: {
    width: wp('37%'),
    height: hp('28%'),
    alignItems: 'center',
  },
  offerItemImageStyle: {
    width: wp('37%'),
    height: hp('28%'),
    borderRadius: 10
  },
  offerItemTextContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: wp('2%'),
  },
  offerItemDecriptionTextContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  //--------------------------------------

  // ----------- Dicounts ------------
  dicountItemContainer: {
    width: wp('37%'),
    height: hp('30%'),
  },
  dicountItemImageContainer: {
    width: wp('37%'),
    height: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 10
  },
  dicountItemImageStyle: {
    width: wp('37%'),
    height: hp('20%'),
    borderRadius: 10
  },
  dicountItemTextContainer: {
    flexDirection: 'row',
    width: wp('37%'),
    height: hp('10%'),
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dicountItemDecriptionTextContainer: {
    width: wp('29%'),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  //--------------------------------------

  // ----------- Category ------------
  categoryItemContainer: {
    width: wp('32%'),
    height: hp('20%'),
    alignItems: 'center',
  },
  categoryItemImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10
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

  // ----------- New Arrivals ------------
  NewArrivalItemContainer: {
    width: wp('79%'),
    height: hp('26%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
