import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../modules/colors';
import { GetPhoto } from '../../modules/images';
import fonts from '../../modules/fonts';
import { ImageWithContent } from '../image/image';
import styles from './styling';

export const Card = ({
  onPress, offerImage, offerDiscription, percentage, price, currency, likes, deadline
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: wp('85%'),
        height: hp('16%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: colors.offWhite,
        // overflow: 'hidden',
        alignItems: 'center',
        paddingLeft: wp('2.5%'),
        // borderWidth: 1,
        // borderColor: colors.darkgray,
        // paddingVertical: hp('2%'),
        elevation: 5
      }}>

      <View
        style={{ width: wp('58%'), height: hp('16%'), paddingTop: hp('1.5%') }}>
        <View
          style={{ height: hp('5%'), width: wp('58%'), justifyContent: 'center' }}>
          <Text
            style={{ lineHeight: fonts.size.input, fontSize: fonts.size.medium, fontFamily: fonts.type.medium }}>
            {offerDiscription}
          </Text>
        </View>

        <View
          style={{ width: wp('58%'), height: hp('5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

          <View
            style={{ alignItems: 'flex-start' }}>
            <Text
              style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal }}>
              {currency}
            </Text>
            <Text
              style={{ lineHeight: fonts.size.h5, fontSize: fonts.size.regular, fontFamily: fonts.type.medium }}>
              {price}
            </Text>
          </View>

          <ImageBackground
            resizeMode="contain"
            source={GetPhoto('Union')}
            style={{ width: wp('8%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.white }}>
              {percentage}
            </Text>
          </ImageBackground>

        </View>


        <View style={{ width: wp('58%'), marginTop: hp('0.5%'), height: 0.5, backgroundColor: colors.gray }} />


        <View
          style={{ width: wp('58%'), height: hp('3%'), marginTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <Text
            style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.darkRed }}>
            {deadline}
          </Text>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <Text
              style={{ height: hp('2.5%'), marginRight: wp('0.3%'), fontSize: fonts.size.tiny, fontFamily: fonts.type.normal }}>
              {likes}
            </Text>
            <EvilIcons
              name="heart"
              size={wp('4%')}
              color={colors.black} />
          </View>

        </View>
      </View>

      <View
        style={{
          width: wp('20%'),
          height: hp('16%'),
          backgroundColor: colors.white,
          //   elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderWidth: 1,
          borderColor: colors.grayInput,
        }}>
        <Image
          resizeMode="contain"
          source={offerImage}
          style={{ width: wp('17%'), height: hp('14%') }} />
      </View>
    </TouchableOpacity>
  );
};

export const AdvertiserCard = ({
  onPress, offerImage, offerDiscription, percentage, price, currency, likes, deadline, visited
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: wp('85%'),
        height: hp('20%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: colors.offWhite,
        // overflow: 'hidden',
        alignItems: 'center',
        paddingRight: wp('2.5%'),
        // borderWidth: 1,
        // borderColor: colors.darkgray,
        // paddingVertical: hp('2%'),
        elevation: 10
      }}>

      <View
        style={{
          width: wp('30%'),
          height: hp('20%'),
          // backgroundColor: colors.black,
          //   elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
          // borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          // borderWidth: 1,
          // borderColor: colors.grayInput,
          overflow: 'hidden'
        }}>
        <ImageBackground
          // resizeMode="contain"
          source={offerImage}
          style={{ width: '100%', height: '100%' }}>
          <View style={{ 
            marginTop: hp('4%'),
            alignItems: 'flex-start', 
            paddingVertical: hp('0.5%'),
            width: '50%', 
            paddingLeft:wp('2%'),
            // paddingRight:wp('5%'),
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: colors.white  
            }}>
            <Text style={{lineHeight: fonts.size.medium, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.black }}>{visited}</Text>
            <Text style={{lineHeight: fonts.size.medium, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal,  }}>مشاهدة</Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{ width: wp('48%'), height: hp('20%'), paddingTop: hp('1.5%') }}>
        <View
          style={{ height: hp('6.5%'), width: wp('48%'), justifyContent: 'center',alignItems:'flex-start' }}>
          <Text
            style={{ lineHeight: fonts.size.input, fontSize: fonts.size.medium, fontFamily: fonts.type.medium }}>
            {offerDiscription}
          </Text>
        </View>

        <View
          style={{ width: wp('48%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

          <ImageBackground
            resizeMode="contain"
            source={GetPhoto('Union')}
            style={{ width: wp('8%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.white }}>
              {percentage}
            </Text>
          </ImageBackground>

          <View
            style={{ alignItems: 'flex-start' }}>
            <Text
              style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal }}>
              {currency}
            </Text>
            <Text
              style={{ lineHeight: fonts.size.h5, fontSize: fonts.size.regular, fontFamily: fonts.type.medium }}>
              {price}
            </Text>
          </View>

        </View>


        <View style={{ width: wp('48%'), marginTop: hp('0.5%'), height: 0.5, backgroundColor: colors.gray }} />


        <View
          style={{ width: wp('48%'), height: hp('5%'), marginTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <EvilIcons
              name="heart"
              size={wp('4.5%')}
              color={colors.black} />
            <Text
              style={{ height: hp('3%'), marginLeft: wp('0.3%'), fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}>
              {likes}
            </Text>
          </View>

          <Text
            style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.darkRed }}>
            {deadline}
          </Text>

        </View>
      </View>


    </TouchableOpacity>
  );
};


export const SmallCard = ({
  onPress, offerImage, offerDiscription, percentage, price, currency, deadline
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: wp('40%'),
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        // paddingLeft: wp('2.5%'),
        // borderWidth: 1,
        // borderColor: colors.darkgray,
        paddingVertical: hp('2%'),
        elevation: 3
      }}>

      <Image
        resizeMode="contain"
        source={offerImage}
        style={{ width: wp('30%'), height: hp('10%') }} />

      <Text
        style={{ width: wp('35%'), marginTop: hp('1%'), textAlign: 'center', lineHeight: fonts.size.regular, fontSize: fonts.size.small, fontFamily: fonts.type.medium }}>
        {offerDiscription}
      </Text>

      <View
        style={{ width: wp('35%'), marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
        <ImageBackground
          resizeMode="contain"
          source={GetPhoto('Union')}
          style={{ width: wp('8%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.white }}>
            {percentage}
          </Text>
        </ImageBackground>

        <View
          style={{ alignItems: 'flex-end' }}>
          <Text
            style={{ lineHeight: fonts.size.regular, fontSize: fonts.size.small, fontFamily: fonts.type.medium }}>
            {price}
          </Text>
          <Text
            style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.darkgray }}>
            {currency}
          </Text>
        </View>
      </View>

      <View style={{ width: wp('35%'), marginTop: hp('1%'), height: 0.5, backgroundColor: colors.gray }} />
      <View
        style={{ width: wp('35%'), marginTop: hp('1%'), alignItems: 'center' }}>
        <Text
          style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.darkRed }}>
          {deadline}
        </Text>
      </View>


    </TouchableOpacity>
  );
};

export const NotificationCard = ({
  onPress, NotificatioImage, NotificatioDiscription, percentage, price, currency,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: wp('90%'),
        height: hp('13%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingRight: wp('2.5%'),
        elevation: 5
      }}>

      <View
        style={{
          width: wp('30%'),
          height: hp('13%'),
          backgroundColor: colors.white,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <Image
          resizeMode="cover"
          source={NotificatioImage}
          style={{ width: wp('30%'), height: hp('13%'), borderTopRightRadius: 5, borderBottomRightRadius: 5, }} />
      </View>

      <View
        style={{ width: wp('55%'), height: hp('13%'), paddingTop: hp('1.5%') }}>
        <View
          style={{ width: wp('55%'), height: hp('5%'), justifyContent: 'center', }}>
          <Text
            style={{
              lineHeight: fonts.size.input,
              fontSize: fonts.size.medium,
              fontFamily: fonts.type.medium,
              color: colors.black }}>
            {NotificatioDiscription}
          </Text>
        </View>

        <View
          style={{ width: wp('55%'), height: hp('5%'), marginTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

          <View
            style={{ alignItems: 'flex-start' }}>
            <Text
              style={{ lineHeight: fonts.size.small, fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, }}>
              {currency}
            </Text>
            <Text
              style={{ lineHeight: fonts.size.h5, fontSize: fonts.size.regular, fontFamily: fonts.type.medium }}>
              {price}
            </Text>
          </View>

          <ImageBackground
            resizeMode="contain"
            source={GetPhoto('Union')}
            style={{ width: wp('8%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{ fontSize: fonts.size.tiny, fontFamily: fonts.type.normal, color: colors.white }}>
              {percentage}
            </Text>
          </ImageBackground>

        </View>
      </View>

    </TouchableOpacity>
  );
};


export const AdvertiserNotificationCard = ({
  onPress, NotificatioImage, NotificatioDiscription, status, time, money
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: wp('85%'),
        height: hp('13%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        // paddingRight: wp('2.5%'),
        elevation: 5
      }}>

      <View
        style={{
          width: wp('25%'),
          height: hp('13%'),
          // backgroundColor: colors.white,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Image
          resizeMode="contain"
          source={NotificatioImage}
          style={{ width: wp('25%'), height: hp('8%'), borderTopRightRadius: 5, borderBottomRightRadius: 5, }} />
      </View>

      <View
        style={{ width: wp('60%'), height: hp('13%'), paddingTop: hp('1.5%') }}>
        <View
          style={{ width: wp('60%'), height: hp('5.5%'), justifyContent: 'center' }}>
          <Text
            style={{
              lineHeight: fonts.size.input,
              fontSize: fonts.size.medium,
              fontFamily: fonts.type.medium,
              color: colors.black }}>
            {NotificatioDiscription} <Text style={{ color: colors.darkRed }}> {money || ''} </Text>
          </Text>
        </View>

        <View
          style={{ width: wp('60%'), alignItems: 'flex-start' }}>
          <Text
            style={{
              lineHeight: fonts.size.h6,
              fontSize: fonts.size.medium,
              fontFamily: fonts.type.normal,
              color: colors.darkRed }}>
            {status}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            right: wp('4%'),
            bottom: hp('1%'),
            // width: wp('55%'),
            alignItems: 'flex-start',
            // marginLeft: wp('5%'),
          }}>
          <Text
            style={{
              // lineHeight: fonts.size.h6,
              fontSize: fonts.size.medium,
              fontFamily: fonts.type.normal,
              // color: colors.darkRed
            }}>
            {time}
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

export const OfferCard = ({
  imageStyle,
  imageSource,
  bodyStyle,
  discriptionContainerStyle,
  discriptionTextStyle,
  discriptionText,
  currencyTextStyle,
  currencyText,
  priceTextStyle,
  priceText
}) => {
  return (
    <ImageWithContent
      imageStyle={imageStyle}
      imageSource={imageSource}>
      <View
        style={bodyStyle}>
        <View style={discriptionContainerStyle}>
          <Text style={discriptionTextStyle}>
            {discriptionText}
          </Text>
        </View>
        <Text style={currencyTextStyle}>
          <Text style={priceTextStyle}> {priceText} </Text>
          {currencyText}
        </Text>
      </View>
    </ImageWithContent>
  );
};


export const DiscountCard = ({
  containerStyle,
  imageContainerStyle,
  imageStyle,
  imageSource,
  bodyStyle,
  discriptionContainerStyle,
  discriptionTextStyle,
  discriptionText,
  currencyTextStyle,
  currencyText,
  priceTextStyle,
  priceText,
  percentage
}) => {
  return (
    <View style={containerStyle}>

      <View style={imageContainerStyle}>
        <ImageWithContent
          resizeMode="contain"
          imageStyle={imageStyle}
          imageSource={imageSource} />
      </View>


      <View style={bodyStyle}>

        <View style={discriptionContainerStyle}>
          <Text style={discriptionTextStyle}> {discriptionText} </Text>
          <Text style={currencyTextStyle}>
            <Text style={priceTextStyle}> {priceText} </Text> {currencyText}
          </Text>
        </View>

        <ImageBackground
          resizeMode="contain"
          source={GetPhoto('Union')}
          imageStyle={{ tintColor: colors.darkRed }}
          style={{ width: wp('8%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal, color: colors.white }}>
            {percentage}
          </Text>
        </ImageBackground>

      </View>


    </View>
  );
};


export const CategoryCard = ({
  imageStyle,
  imageSource,
  bodyStyle,
  nameTextStyle,
  nameText,
}) => {
  return (
    <ImageWithContent
      imageStyle={imageStyle}
      imageSource={imageSource}>
      <View
        style={bodyStyle}>
        <Text style={nameTextStyle}> {nameText} </Text>
      </View>
    </ImageWithContent>
  );
};


export const NewArrivalCard = ({
  imageSource,
  percentage,
  titleText,
  price,
  currencyText,
  priceText,
  deadlineText,
  locationText
}) => {
  return (
    <View style={styles.containerStyle}>

      <ImageWithContent
        imageStyle={styles.imageStyle}
        imageSource={imageSource}>

        {price &&
        <ImageBackground
          resizeMode="contain"
          source={GetPhoto('Union')}
          imageStyle={{ tintColor: colors.white }}
          style={styles.percentageImageStyle}>
          <Text style={[styles.normalText, { color: colors.darkerOrange }]}> {percentage}
          </Text>
        </ImageBackground>}
      </ImageWithContent>


      <View style={styles.contentStyle}>

        <View style={styles.section}>
          <View style={[styles.sectionTextStyle,{alignItems: 'flex-start'}]}>
            <Text style={styles.titleText}>{titleText}</Text>
          </View>
          <View style={styles.moreinfo}>
            { price ?
              <Text style={styles.smallText}>
                <Text style={styles.normalText}> {priceText} </Text> {currencyText}
              </Text>
              :
              <ImageBackground
                resizeMode="contain"
                source={GetPhoto('Union')}
                imageStyle={{ tintColor: colors.darkRed }}
                style={styles.percentageMoreInfoImage}>
                <Text style={[styles.smallText, { color: colors.white }]}> {percentage} </Text>
              </ImageBackground>
            }
          </View>
        </View>

        <View style={styles.separtionLine} />

        <View style={styles.section}>
          <View style={styles.sectionTextStyle}>
            <Text style={[styles.smallText, { color: colors.darkRed }]}>{deadlineText}</Text>
          </View>

          <View style={styles.locationContainer}>
            <Image
              resizeMode="contain"
              source={GetPhoto('locationPin')}
              style={styles.locationPin} />
            <Text style={[styles.smallText, { color: colors.black }]}>{locationText}</Text>
          </View>
        </View>

      </View>
    </View>
  );
};
