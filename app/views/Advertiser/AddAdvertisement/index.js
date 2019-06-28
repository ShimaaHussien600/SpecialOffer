/* eslint-disable max-len */
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  I18nManager
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import React, { Component } from 'react';
import { GetPhoto } from '../../../modules/images';
import colors from '../../../modules/colors';
import { RegularButton } from '../../../components /button';
import { Header } from '../../../components /header';
import { Card, AdvertiserCard } from '../../../components /card';
import fonts from '../../../modules/fonts';
import { RegularTextInput } from '../../../components /textinput';
import { UserReducer, UIReducer, AdvertiserReducer } from '../../../services/reducers';
import { CustomCheckBox } from '../../../components /checkBox';

const { CreateDiscount, CreateOffer } = AdvertiserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddAdvertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      precentage: 0,
      description: '',
      selectedType: -1,
      startSelectedDay: -1,
      finishSelectedDay: -1,
      newProductImages: [],
      numbers: [1, 2, 3, 4, 5, 6, 7],
      days: ['ج', 'خ', 'ر', 'ث', 'ا', 'ح', 'س'],
      startDateTimePickerVisible: false,
      startDate: '',
      finishDateTimePickerVisible: false,
      finishDate: '',
      offerFeatures: [
        {
          name: '',
          desc: ''
        },
      ],
      offerPrice: '',
    };
  }


  handleImagePicked = () => {
    ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('FLAG', 'AddProduct', 'handleImagePicked', 'response', response);
        let x = [];
        if (this.state.newProductImages.length > 0) {
          x = JSON.parse(JSON.stringify(this.state.newProductImages));
        }
        const source = { uri: response.uri, type: response.type ? response.type : 'image/jpeg', name: response.fileName ? response.fileName : 'prof.jpg' };
        const source64 = `data:${response.type ? response.type : 'image/jpeg'};base64,${response.data}`;
        x.push({ image: source64 });

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('FLAG', 'AddProduct', 'handleImagePicked', 'x', x);

        this.setState({
          newProductImages: x,
        });
      }
    });
  }

  hideDateTimePicker = () => {
    this.setState({ startDateTimePickerVisible: false, finishDateTimePickerVisible: false });
  };

  handleStartDatePicked = date => {
    console.log('A Start date has been picked: ', moment(date).locale('en').format('YYYY-MM-DD'));
    this.setState({ startDate: date });
    this.hideDateTimePicker();
  };

  handleFinishDatePicked = date => {
    console.log('A Finish date has been picked: ', date);
    this.setState({ finishDate: date });
    this.hideDateTimePicker();
  };


  handlePublishAd = () => {
    this.props.turnOnPageLoading();
    const { name, precentage, description, startDate, finishDate, offerFeatures, offerPrice } = this.state;
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: 'AdvertiserStack' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('Accept');
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        console.log('handlePublishAd', 'onFail', 'error', error);
        alert('هناك شي ما خاطئ');
      }
    };
    if (this.state.selectedType === 1) {
      const date = {
        name,
        description,
        price: '1000',
        precentage: parseInt(precentage, 10),
        start_date: moment(startDate).locale('en').format('YYYY-MM-DD'),
        end_date: moment(finishDate).locale('en').format('YYYY-MM-DD'),
        category: this.props.categories[this.props.selectedCategories].id,
        discount_images: this.state.newProductImages,
        discount_features: []
      };
      this.props.CreateDiscount(date, responseHandler);
    } else {
      const date = {
        name,
        description,
        price: offerPrice,
        start_date: moment(startDate).locale('en').format('YYYY-MM-DD'),
        end_date: moment(finishDate).locale('en').format('YYYY-MM-DD'),
        category: this.props.categories[this.props.selectedCategories].id,
        plus_offer: [],
        offer_features: offerFeatures,
        offer_images: this.state.newProductImages
      };
      this.props.CreateOffer(date, responseHandler);
    }
  }

  render() {
    const { selectedType } = this.state;
    console.log('this.state.offerFeatures',this.state.offerFeatures)
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'اعلان جديد'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
          />
        </View>
        <ScrollView
          style={{ width: wp('100%') }}
          contentContainerStyle={{ paddingBottom: hp('12%'), alignItems: 'center' }}
          >
          <View style={{ marginTop: hp('5%'),
            width: wp('85%'),
            // height: hp('10%'),
            // backgroundColor: 'red',
            alignItems: 'center',
            flexDirection: 'row',
          }}>

            <Text style={{ width: wp('30%'), fontSize: fonts.size.regular, fontFamily: fonts.type.medium }}>{'نوع الاعلان'}</Text>
            <CustomCheckBox
              selected={this.state.selectedType}
              firstOption={'خصم'}
              firstOptionOnPress={() => { this.setState({ selectedType: 1 }); }}
              secondOption={'عرض'}
              secondOptionOnPress={() => { this.setState({ selectedType: 2 }); }}
               />
          </View>


          <View style={{ marginTop: hp('5%'),
            width: wp('100%'),
            height: hp('8%'),
            // backgroundColor: 'red',
            alignItems: 'center' }}>

            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Categories'); }}
              style={{ width: wp('85%'),
                height: hp('8%'),
                flexDirection: 'row',
                backgroundColor: colors.lightgray,
                elevation: 1,
                borderRadius: 5,
                justifyContent: 'space-between',
                paddingHorizontal: wp('4%'),
                alignItems: 'center', }}
           >
              <Text
                style={{ fontSize: fonts.size.regular,
                  fontFamily: fonts.type.medium,
                  color: 'gray' }}>{this.props.selectedCategories === -1 ? 'التصنيف' : this.props.categories[this.props.selectedCategories].name }
              </Text>
              <Image
                resizeMode="contain"
                source={GetPhoto('forwardIcon')}
                style={{ width: wp('7%'), height: hp('7%') }} />
            </TouchableOpacity>

          </View>

          <View
            style={{ marginTop: hp('2%'),
              width: wp('100%'),
              // height: hp('45%'),
              // backgroundColor:'red',
              alignItems: 'center' }}>

            <RegularTextInput
              selectionColor={colors.darkRed}
              onChangeText={(name) => { this.setState({ name }); }}
              placeholder={'الاسم الاعلاني'}
              textInputnStyle={{ width: wp('85%'), }}
              />
            <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), alignItems: 'center' }}>
              {selectedType === 1 &&
              <RegularTextInput
                keyboardType={'phone-pad'}
                selectionColor={colors.darkRed}
                onChangeText={(precentage) => { this.setState({ precentage }); }}
                placeholder={'نسبة الخصم'}
                textInputnStyle={{ width: wp('85%') }}
              />}

              {selectedType === 2 &&
              <Text style={{
                width: wp('40%'),
                // backgroundColor: 'red',
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                // color: 'black'
              }}>
                {'السعر النهائي للعرض'}
              </Text>}
              {selectedType === 2 &&
              <RegularTextInput
                keyboardType={'phone-pad'}
                selectionColor={colors.darkRed}
                onChangeText={(offerPrice) => { this.setState({ offerPrice }); }}
                placeholder={'سعر العرض'}
                textInputnStyle={{ width: wp('40%') }}
              />}
            </View>
            {selectedType === 2 &&
            <View style={{
              marginTop: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('85%'),
              height: hp('8%'),
              alignItems: 'center' }}>
              <Text style={{
                // width: wp('40%'),
                // backgroundColor: 'red',
                fontSize: fonts.size.regular,
                fontFamily: fonts.type.medium,
                // color: 'black'
              }}>
                {'مكونات العرض'}
              </Text>
              <View style={{ width: wp('55%'), height: 1, backgroundColor: colors.darkgray }} />
            </View>}

            {selectedType === 2 &&
            <ScrollView>
              <FlatList
                data={this.state.offerFeatures}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index }) => {
                  const editableofferFeatures = [...this.state.offerFeatures];
                  return (
                    <View
                      style={{
                        marginTop: hp('2%'),
                        width: wp('85%'),
                        height: hp('18.1%'),
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: wp('85%'),
                          height: hp('8%'),
                          alignItems: 'center' }}>
                        <RegularTextInput
                          selectionColor={colors.darkRed}
                          onChangeText={(name) => {
                            editableofferFeatures[index].name = name;
                            this.setState({ offerFeatures: editableofferFeatures });
                          }}
                          placeholder={'الاسم'}
                          textInputnStyle={{ width: wp('65%') }}
                          />
                        <TouchableOpacity
                          onPress={() => {
                            const newFeatures = {
                              name: '',
                              desc: ''
                            };
                            editableofferFeatures.push(newFeatures);
                            this.setState({ offerFeatures: editableofferFeatures });
                          }}
                          style={{ width: wp('15%'),
                            height: hp('8%'),
                            backgroundColor: colors.lightgray,
                            elevation: 1,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center', }}>
                          <Text
                            style={{ fontSize: fonts.size.regular,
                              fontFamily: fonts.type.medium,
                              color: 'gray' }}>{'+'}
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{
                        marginTop: hp('2%'),
                        width: wp('85%'),
                        alignItems: 'center'
                      }}>
                        <RegularTextInput
                          // keyboardType={'phone-pad'}
                          selectionColor={colors.darkRed}
                          onChangeText={(desc) => {
                            editableofferFeatures[index].desc = desc;
                            this.setState({ offerFeatures: editableofferFeatures });
                          }}
                          placeholder={'الوصف'}
                          textInputnStyle={{ width: wp('85%') }}
                          />
                      </View>
                    </View>
                  );
                }} />
            </ScrollView>}
            {/* <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), }}>
              <RegularTextInput
                selectionColor={colors.darkRed}
                onChangeText={(confrimpassword) => { this.setState({ confrimpassword }); }}
                placeholder={'العملة'}
                textInputnStyle={{ width: wp('40%') }}
              />

              <RegularTextInput
                keyboardType={'phone-pad'}
                selectionColor={colors.darkRed}
                onChangeText={(confrimpassword) => { this.setState({ confrimpassword }); }}
                placeholder={'السعر بعد الخصم'}
                textInputnStyle={{ width: wp('40%') }}
              />
            </View> */}
            <RegularTextInput
              selectionColor={colors.darkRed}
              onChangeText={(description) => { this.setState({ description }); }}
              placeholder={selectedType === 2 ? 'ملاحظات' : 'الوصف'}
              textInputnStyle={{ width: wp('85%'), marginTop: hp('2%'), height: hp('15%') }}
              />

            {/* ----------------- calender buttons ----------------- */}
            <View style={{
              marginTop: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp('85%'), }}>

              <TouchableOpacity
                onPress={() => { this.setState({ startDateTimePickerVisible: true }); }}
                style={{ width: wp('40%'),
                  height: hp('8%'),
                  flexDirection: 'row',
                  backgroundColor: colors.lightgray,
                  elevation: 1,
                  borderRadius: 5,
                  // justifyContent: 'space-between',
                  paddingHorizontal: wp('2%'),
                  alignItems: 'center', }}
           >
                <MaterialCommunityIcons
                  name="calendar-text"
                  size={wp('8%')}
                  color={'gray'} />
                <Text
                  style={{
                    marginLeft: wp('1%'),
                    fontSize: fonts.size.medium,
                    fontFamily: fonts.type.medium,
                    color: 'gray' }}>{this.state.startDate === '' ? 'تاريخ بدايه' : moment(this.state.startDate).format('D MMM YYYY')}
                </Text>
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.startDateTimePickerVisible}
                onConfirm={this.handleStartDatePicked}
                mode="date"
                locale={'vi'}
                date={this.state.startDate === '' ? new Date() : this.state.startDate}
                onCancel={this.hideDateTimePicker} />

              <TouchableOpacity
                onPress={() => {
                  if (this.state.startDate !== '') {
                    this.setState({ finishDateTimePickerVisible: true });
                  }
                }}
                style={{ width: wp('40%'),
                  height: hp('8%'),
                  flexDirection: 'row',
                  backgroundColor: colors.lightgray,
                  elevation: 1,
                  borderRadius: 5,
                  // justifyContent: 'space-between',
                  paddingHorizontal: wp('2%'),
                  alignItems: 'center', }}
           >
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={wp('8%')}
                  color={'gray'} />
                <Text
                  style={{
                    marginLeft: wp('1%'),
                    fontSize: fonts.size.medium,
                    fontFamily: fonts.type.medium,
                    color: 'gray' }}>{this.state.finishDate === '' ? 'انتهاء العرض' : moment(this.state.finishDate).format('D MMM YYYY')}
                </Text>
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.finishDateTimePickerVisible}
                onConfirm={this.handleFinishDatePicked}
                date={this.state.finishDate === '' ? this.state.startDate : this.state.finishDate}
                mode="date"
                onCancel={this.hideDateTimePicker} />

            </View>

          </View>

          {/* --------------------- ad images ---------------- */}
          <Text style={{
            marginTop: hp('2%'),
            fontSize: fonts.size.regular,
            fontFamily: fonts.type.medium
          }}>
            {`صور ${this.state.selectedType === 1 ? 'الخصم' : 'الاعلان'}`}
          </Text>

          <View
            style={{ marginTop: hp('2%'),
              width: wp('100%'),
              paddingLeft: wp('7.5%'),
              height: hp('15%'),
              // backgroundColor: 'red',
              flexDirection: 'row', }}>

            <TouchableOpacity
              onPress={this.handleImagePicked}
              style={{ width: wp('35%'),
                height: hp('15%'),
                backgroundColor: colors.lightgray,
                borderStyle: 'dashed',
                borderWidth: 1,
                borderRadius: 4,
                borderColor: colors.darkgray,
                alignItems: 'center',
                justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={GetPhoto('addImage')}
                style={{ width: wp('15%'), height: hp('15%') }} />
            </TouchableOpacity>
            <View
              style={{ width: wp('53%'),
                height: hp('15%'),
                marginLeft: wp('4%') }}>
              <FlatList
                horizontal
                data={this.state.newProductImages}
                // contentContainerStyle={{ alignItems: 'center' }}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{ width: wp('35%'),
                        height: hp('15%'),
                        marginLeft: index ? wp('4%') : wp('0%'),
                        borderRadius: 3,
                        overflow: 'hidden' }}>
                      <Image
                        resizeMode="cover"
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: '100%' }} />
                    </View>
                  );
                }} />

            </View>
          </View>

          {/* <View
            style={{ marginTop: hp('3%'),
              width: wp('100%'),
              // height: hp('50%'),
              alignItems: 'center' }}>

            -------------------- Start date calender view ----------------------
            <View
              style={{ width: wp('95%'),
                height: hp('20%'),
                alignItems: 'center' }}>
              ------- fist row (month) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('7%'),
                  alignItems: 'center',
                  flexDirection: 'row-reverse',
                  paddingHorizontal: wp('5%'),
                  justifyContent: 'space-between',
                  backgroundColor: colors.lightOrange }}>
                <Text
                  style={{ fontSize: fonts.size.medium,
                    fontFamily: fonts.type.normal,
                    color: colors.white }}>{'ابريل 2019'}
                </Text>

                <Text
                  style={{ fontSize: fonts.size.medium,
                    fontFamily: fonts.type.normal,
                    color: colors.white }}>{'تاريخ بدء الاعلان'}
                </Text>
              </View>
              ---------------------------------
              ------- second row (days name) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('5%'),
                  alignItems: 'center',
                  backgroundColor: colors.gray }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={this.state.days}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item }) => {
                    return (
                      <View
                        activeOpacity={0.8}
                        style={{ width: wp('12%'),
                          height: hp('5%'),
                          alignItems: 'center',
                          justifyContent: 'center', }}>

                        <Text
                          style={{ fontSize: fonts.size.medium,
                            fontFamily: fonts.type.medium }}>{item}
                        </Text>
                      </View>
                    );
                  }} />
              </View>
              ---------------------------------------
              ------- third row (days numbers) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('8%'),
                  alignItems: 'center',
                  backgroundColor: colors.lightgray }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={this.state.numbers}
                  extraData={this.state.startSelectedDay}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => { this.setState({ startSelectedDay: index }); }}
                        activeOpacity={0.8}
                        style={{ width: wp('12%'),
                          height: hp('8%'),
                          alignItems: 'center',
                          justifyContent: 'center', }}>
                        <View
                          style={{ width: wp('8%'),
                            height: wp('8%'),
                            borderRadius: wp('4%'),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: index === this.state.startSelectedDay ? colors.lightOrange : 'transparent' }}>
                          <Text
                            style={{ fontSize: fonts.size.medium,
                              fontFamily: fonts.type.medium }}>{item}
                          </Text>
                        </View>
                      </TouchableOpacity>

                    );
                  }} />
              </View>
              ------------------------------------------
            </View>
            ----------------------------------------------------------------------

            -------------------- finsish data calender view ----------------------
            <View
              style={{ marginTop: hp('3%'),
                width: wp('95%'),
                height: hp('20%'),
                alignItems: 'center' }}>
              ------- fist row (month) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('7%'),
                  alignItems: 'center',
                  flexDirection: 'row-reverse',
                  paddingHorizontal: wp('5%'),
                  justifyContent: 'space-between',
                  backgroundColor: colors.darkerOrange }}>
                <Text
                  style={{ fontSize: fonts.size.medium,
                    fontFamily: fonts.type.normal,
                    color: colors.white }}>{'ابريل 2019'}
                </Text>

                <Text
                  style={{ fontSize: fonts.size.medium,
                    fontFamily: fonts.type.normal,
                    color: colors.white }}>{'تاريخ انتهاء الاعلان'}
                </Text>
              </View>
              ---------------------------------
              ------- second row (days name) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('5%'),
                  alignItems: 'center',
                  backgroundColor: colors.gray }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={this.state.days}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item }) => {
                    return (
                      <View
                        activeOpacity={0.8}
                        style={{ width: wp('12%'),
                          height: hp('5%'),
                          alignItems: 'center',
                          justifyContent: 'center', }}>

                        <Text
                          style={{ fontSize: fonts.size.medium,
                            fontFamily: fonts.type.medium }}>{item}
                        </Text>
                      </View>
                    );
                  }} />
              </View>
              ---------------------------------------
              ------- third row (days numbers) --------
              <View
                style={{ width: wp('95%'),
                  height: hp('8%'),
                  alignItems: 'center',
                  backgroundColor: colors.lightgray }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={this.state.numbers}
                  extraData={this.state.finishSelectedDay}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => { this.setState({ finishSelectedDay: index }); }}
                        activeOpacity={0.8}
                        style={{ width: wp('12%'),
                          height: hp('8%'),
                          alignItems: 'center',
                          justifyContent: 'center', }}>
                        <View
                          style={{ width: wp('8%'),
                            height: wp('8%'),
                            borderRadius: wp('4%'),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: index === this.state.finishSelectedDay ? colors.darkerOrange : 'transparent' }}>
                          <Text
                            style={{ fontSize: fonts.size.medium,
                              fontFamily: fonts.type.medium }}>{item}
                          </Text>
                        </View>
                      </TouchableOpacity>

                    );
                  }} />
              </View>
            </View>

          </View> */}

        </ScrollView>
        <View
          style={{
            position: 'absolute',
            top: hp('88.5%'),
            // height: hp('10%'),
            width: wp('100%'),
            alignItems: 'center',
            backgroundColor: colors.white
          }}>
          <RegularButton
            onClick={() => {
              this.handlePublishAd();
            }}
            buttonStyle={{
              width: wp('100%'),
              height: hp('8%'),
              //   borderBottomRightRadius: wp('8%'),
              //   borderBottomLeftRadius: wp('8%'),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.darkRed }}
            buttonText={'نشر الاعلان'}
            textStyle={{ color: colors.white }} />
        </View>
      </View>

    );
  }
}
function mapStateToProps(state) {
  return {
    selectedCategories: state.AdvertiserReducer.selectedCategories,
    icons: state.AdvertiserReducer.icons,
    categories: state.OrderReducer.categories
  };
}


function mapDispatchToProps(dispatch) {
  return {
    CreateDiscount: (data, responseHandler) => {
      dispatch(CreateDiscount(data, responseHandler));
    },
    CreateOffer: (data, responseHandler) => {
      dispatch(CreateOffer(data, responseHandler));
    },
    turnOnPageLoading: () => {
      dispatch(turnOnPageLoading());
    },
    turnOffPageLoading: () => {
      dispatch(turnOffPageLoading());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAdvertisement);
