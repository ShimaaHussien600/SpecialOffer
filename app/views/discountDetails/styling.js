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
  headerImageSlider: {
    marginVertical: hp('2%'),
    width: wp('100%'),
    height: hp('25%'),
    alignItems: 'center'
  },
  scrollViewContent: {
    // paddingTop: hp('2%'),
    width: wp('100%'),
    alignItems: 'center',
    paddingBottom: hp('5%')
  },
  basicInfoContainer: {
    width: wp('90%'),
    // height: hp('10%'),
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  basicItemImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('20%') / 2,
    borderWidth: 0.5,
    borderColor: colors.black,
  },
  mediumText: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: fonts.type.medium,
  },
  smallText: {
    color: colors.black,
    fontSize: fonts.size.small,
    fontFamily: fonts.type.medium
  },
  regularText: {
    color: colors.black,
    fontSize: fonts.size.regular,
    fontFamily: fonts.type.medium
  },
  dateContainer: {
    width: wp('67%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  dateSection: {
    width: wp('26%'),
    // backgroundColor:'green'
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
  headerContainer: {
    marginTop: hp('4%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  headerflatlistContainer: {
    width: wp('90%'),
    // paddingLeft: wp('2%'),
    // backgroundColor: 'red',
  },
  cardContainer: {
    paddingTop: hp('2%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  flatlistContainer: {
    width: wp('90%'),
    height: hp('64%'),
    // alignItems: 'center',
    // paddingLeft: wp('2%'),
    // backgroundColor: 'red',
  },

  // ----------- offers ------------
  offerItemContainer: {
    width: wp('45%'),
    height: hp('32%'),
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  offerItemImageStyle: {
    width: wp('43%'),
    height: hp('30%'),
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
  },
  //--------------------------------------

  // ----------- Dicounts ------------
  dicountcardContainer: {
    width: wp('45%'),
    height: hp('32%'),
  },
  dicountItemContainer: {
    width: wp('43%'),
    height: hp('30%'),
  },
  dicountItemImageContainer: {
    width: wp('43%'),
    height: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 10
  },
  dicountItemImageStyle: {
    width: wp('30%'),
    height: hp('10%')
  },
  dicountItemTextContainer: {
    flexDirection: 'row',
    width: wp('43%'),
    height: hp('10%'),
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dicountItemDecriptionTextContainer: {
    width: wp('35%'),
    height: '100%',
    justifyContent: 'center'
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
