import { metrics, colors, fonts } from '../../../themes';
import { Width } from '../../../constant/dimention';
import { isIos } from '../../../constant/util';

export default {
  swiperConainer: {
    width: '100%',
    height: metrics.screenHeight * 0.065
  },
  buttonsTab: {
    width: '100%', height: metrics.screenHeight * 0.065,backgroundColor: colors.colorPrimaryExpert,
   flexDirection: 'row'
  },
  button: {
    width: '50%', height: '100%', backgroundColor: colors.colorPrimaryExpert, alignItems: 'center', justifyContent: 'center'
  },
  textButton: {
    fontWeight: '500', fontSize: fonts.size.medium,fontFamily:fonts.type.normal
  },
  animationLine:{
    width: metrics.screenWidth * 0.5, backgroundColor: colors.darkBlue, height: 2, position: 'absolute', bottom: 0, borderRadius: 2
  },
  swiperContentContainer:{
    width: Width, height: metrics.screenHeight * 0.75
  },
  swiper:{
      width:!isIos()?'100%':undefined
  },
  ContentSwip:{
    width: '100%', alignItems: 'center', marginTop: metrics.screenHeight * 0.015
  },
  upcomingAppointmentsText:{
    color: colors.darkGrayX, fontSize: fonts.size.medium, fontFamily: fonts.type.medium, marginBottom: metrics.screenHeight * 0.02
  },
  flatList:{
    width: metrics.screenWidth, alignItems: 'center'
  }
};
