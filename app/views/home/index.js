/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton, ImageButton } from '../../components /button';
import { RegularTextInput } from '../../components /textinput';
import { ClickableText } from '../../components /text';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { Icon } from '../../components /icon';
import { Card, OfferCard, DiscountCard, CategoryCard, NewArrivalCard } from '../../components /card';
import { LogoCard } from '../../components /logoCard';
import fonts from '../../modules/fonts';
import { ImageWithContent } from '../../components /image/image';
import styles from './styling';
import { UserReducer, UIReducer, OrderReducer } from '../../services/reducers';
import { adsImage } from '../../assets/image/staticImages';

const { UserLogin } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { GetOfferDetail, GetDiscountDetail, ChangeSelectedItmeDatailsType, ChangeSelectedCatItem } = OrderReducer;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      expand: false,
      headerOfferData: [
        {
          image: 'https://placeimg.com/640/480/tech',
          description: 'ايفون 6 بلس 126 جيجا مساحة تخزين'
        },
        {
          image: 'https://placeimg.com/640/480/tech',
          description: 'ايفون 7 بلس 126 جيجا مساحة تخزين'
        },
        {
          image: 'https://placeimg.com/640/480/tech',
          description: 'ايفون 8 بلس 126 جيجا مساحة تخزين'
        },
        {
          image: 'https://placeimg.com/640/480/tech',
          description: 'ايفون xs 126 جيجا مساحة تخزين'
        }
      ],
      icons: [
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'طعام',
          image: GetPhoto('restaurant'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'لاب توب',
          image: GetPhoto('notebook'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'معلبات',
          image: GetPhoto('milk'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'سيارات',
          image: GetPhoto('car'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'ملابس',
          image: GetPhoto('tshirt'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        // {
        //   name: 'المزيد',
        //   image: { uri: 'http://www.sclance.com/pngs/plus-png/plus_png_1046150.png' },
        //   onPress: () => { this.props.navigation.navigate('HomeMoreIcons'); }
        // },
        {
          name: 'كهربائية',
          image: GetPhoto('lamp'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'هواتف',
          image: GetPhoto('mobilePhone'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },
        {
          name: 'طعام',
          image: GetPhoto('restaurant'),
          onPress: () => { this.props.navigation.navigate('Phones'); }
        },


      ],
      cards: [
        {
          logoImage: { uri: 'http://pngimg.com/uploads/lg_logo/lg_logo_PNG14.png' },
          onPress: () => { }
        },
        {
          logoImage: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/1280px-Panasonic_logo_%28Blue%29.svg.png' },
          onPress: () => { }
        },
        {
          logoImage: { uri: 'https://image.flaticon.com/icons/png/512/23/23656.png' },
          onPress: () => { }
        },
        {
          logoImage: GetPhoto('restaurant'),
          onPress: () => { }
        },

      ],
      offerData: [
        {
          offerDiscription: ' كلام كتير شوية ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          offerDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://placeimg.com/640/480/tech' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
        {
          offerDiscription: 'ايفون 6 بلس 128 جيجا مساحة تخزين',
          offerImage: { uri: 'https://placeimg.com/640/480/tech' },
          percentage: '20%',
          price: '2240',
          currency: 'درهم',
          likes: '30',
          deadline: '14 يوم على انتهاء العرض',
          onPress: () => { this.props.navigation.navigate('OfferDetails'); }
        },
      ]
    };
  }

  loadOfferDetails = (ID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
        this.props.ChangeSelectedItmeDatailsType('Offer')
        this.props.navigation.navigate('OfferDetails');
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetOfferDetail(ID, responseHandler)
  }

  loadDiscountDetails = (ID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
        this.props.ChangeSelectedItmeDatailsType('Discount')
        this.props.navigation.navigate('OfferDetails');
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetDiscountDetail(ID, responseHandler)
  }

  renderHeaderItem = ({ item, index }) => {
    return (
      <ImageWithContent
        imageStyle={styles.headerItemContainer}
        imageSource={{ uri: item.image }}
      >
        <View
          style={styles.headerItemTextContainer}>
          <Text style={[styles.mediumText, { marginTop: hp('18%') }]}>
            {item.name}
          </Text>
        </View>
      </ImageWithContent>
    );
  }

  renderOfferItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { this.loadOfferDetails(item.id) }}
        style={[styles.offerItemContainer, {
          marginRight: (index + 1) !== this.state.offerData.length ? wp('4%') : 0,
        }]}>

        <OfferCard
          imageStyle={styles.offerItemImageStyle}
          imageSource={item.offer_images[0] ? { uri: item.offer_images[0].image } : { uri: adsImage }}
          bodyStyle={styles.offerItemTextContainer}
          discriptionContainerStyle={styles.offerItemDecriptionTextContainer}
          discriptionTextStyle={[styles.mediumText, styles.shadowText, { lineHeight: fonts.size.input }]}
          discriptionText={item.name}
          currencyTextStyle={[styles.smallText, styles.shadowText, { fontFamily: fonts.type.normal, color: colors.white, }]}
          currencyText={'درهم'}
          priceTextStyle={[styles.regularText, { color: colors.white, }]}
          priceText={item.price}
        />
      </TouchableOpacity>
    );
  }

  renderDiscountItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { this.loadDiscountDetails(item.id) }}
        style={[styles.dicountItemContainer, {
          marginRight: (index + 1) !== this.state.cards.length ? wp('4%') : 0,
        }]}>

        <DiscountCard
          containerStyle={styles.dicountItemContainer}

          imageContainerStyle={styles.dicountItemImageContainer}
          imageStyle={styles.dicountItemImageStyle}
          imageSource={item.discount_images[0] ? { uri: item.discount_images[0].image } : { uri: adsImage }}

          bodyStyle={styles.dicountItemTextContainer}

          discriptionContainerStyle={styles.dicountItemDecriptionTextContainer}

          discriptionTextStyle={[styles.smallText, { color: colors.black, lineHeight: fonts.size.regular }]}
          discriptionText={item.name}

          currencyTextStyle={[styles.smallText, { fontFamily: fonts.type.normal, color: colors.darkgray, lineHeight: fonts.size.h5 }]}
          currencyText={'درهم'}

          priceTextStyle={[styles.regularText, { color: colors.darkgray, }]}
          priceText={item.price}


          percentage={item.precentage + '%'}
        />
      </TouchableOpacity>
    );
  }

  renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.ChangeSelectedCatItem(item);
          this.props.navigation.navigate('Phones');
        }}
        style={[styles.categoryItemContainer, {
          marginRight: (index + 1) !== this.state.icons.length ? wp('4%') : 0,
        }]}>
        <CategoryCard
          imageStyle={styles.categoryItemImageStyle}
          imageSource={{ uri: item.image }}
          bodyStyle={styles.categorycontent}
          nameTextStyle={[styles.regularText, styles.shadowText, { color: colors.white, lineHeight: fonts.size.h5 }]}
          nameText={item.name}
        />
      </TouchableOpacity>
    );
  }

  renderNewArrivalOfferItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { this.loadOfferDetails(item.id) }}
        style={styles.NewArrivalItemContainer}>
        <NewArrivalCard
          imageSource={{ uri: item.offer_images[0].image }}
          percentage={'15%'}
          titleText={item.name}
          price={true}
          currencyText={'درهم'}
          priceText={item.price}
          deadlineText={`${item.days_remaining} يوم على انتهاء العرض`}
          locationText={'راس خيمة'}
        />
      </TouchableOpacity>
    );
  }

  renderNewArrivalDiscountItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { this.loadDiscountDetails(item.id) }}
        style={styles.NewArrivalItemContainer}>
        <NewArrivalCard
          imageSource={item.discount_images[0] ? { uri: item.discount_images[0].image } : { uri: adsImage }}
          percentage={item.precentage + '%'}
          titleText={item.name}
          price={false}
          // currencyText={'درهم'}
          // priceText={'174'}
          deadlineText={`${item.days_remaining} يوم على انتهاء العرض`}
          locationText={'راس خيمة'}
        />
      </TouchableOpacity>
    );
  }

  componentDidMount() {

  }


  render() {
    return (
      <View
        style={styles.container}>

        <View
          style={styles.header}>
          <Header
            rightImage={GetPhoto('search')}
            noRotate={true}
            rightImageClick={() => { this.props.navigation.navigate('Search'); }}
            rightImageColor={colors.orange}
            headerName={'الرئيسية'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {/* -------------- header images  ------------------- */}
          {this.props.topADS.length > 0 && <View style={styles.sectionConainer}>
            {/* -------------- header buttons ------------------- */}
            <View style={styles.headerNavigationButton}>
              <ImageButton
                onClick={() => { this._carousel.snapToPrev(); }}
                buttonStyle={styles.headerNavigationButtonItem}
                ImageSource={GetPhoto('backIcon')}
                ImageStyle={styles.headerNavigationButtonImage}
              />
              <ImageButton
                onClick={() => { this._carousel.snapToNext(); }}
                buttonStyle={styles.headerNavigationButtonItem}
                ImageSource={GetPhoto('forwardIcon')}
                ImageStyle={styles.headerNavigationButtonImage}
              />
            </View>
            {/* ----------------- headerImage ------------------ */}
            <Carousel
              data={this.props.topADS}
              sliderWidth={wp('100%')}
              itemWidth={wp('100%')}
              ref={(c) => { this._carousel = c; }}
              inactiveSlideScale={1}
              renderItem={this.renderHeaderItem}
            />
          </View>}

          {/* ----------------- best offer  ------------------- */}
          {this.props.bestOffers.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('3%') }]}>
            {/* ----------------- best offer header ------------------- */}
            <View style={styles.sectionLabelContainer}>
              <Text style={styles.regularText}> {'افضل العروض'} </Text>
              <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('BestOffers'); }}>
                <Text style={styles.smallText}> {'عرض الكل'} </Text>
              </TouchableOpacity>
            </View>
            {/* ----------------- best offer cards ------------------ */}
            <View style={styles.cardContainer}>
              <View style={styles.flatlistContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.bestOffers}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderOfferItem}
                />
              </View>
            </View>
          </View>}

          {/* ----------------- best discounts  ------------------- */}
          {this.props.bestDiscount.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('3%') }]}>
            {/* ----------------- best discounts header  ------------------- */}
            <View style={styles.sectionLabelContainer}>
              <Text style={styles.regularText}> {'افضل الخصومات'} </Text>
              <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('BestDiscounts'); }}>
                <Text style={styles.smallText}> {'عرض الكل'} </Text>
              </TouchableOpacity>
            </View>
            {/* ------------------------ best discounts cards ----------------------- */}
            <View style={styles.cardContainer}>
              <View style={styles.flatlistContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.bestDiscount}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderDiscountItem}
                />
              </View>
            </View>
          </View>}

          {/* ----------------- Categores  ------------------- */}
          {this.props.categories.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('0%') }]}>
            {/* ----------------- Categores header  ------------------- */}
            <View style={[styles.sectionLabelContainer, { justifyContent: 'center' }]}>
              <Text style={styles.regularText}> {'فلتر بالاقسام'} </Text>
            </View>
            {/* ------------------------ Categores cards ----------------------- */}
            <View style={styles.cardContainer}>
              <View style={styles.flatlistContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.categories}
                  horizontal
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderCategoryItem}
                />
              </View>
            </View>
          </View>}

          {/* -------------------- Ad ---------------------- */}
          <View style={[styles.sectionConainer, { marginTop: hp('2%') }]}>
            <Carousel
              data={this.props.bottomADS}
              sliderWidth={wp('100%')}
              itemWidth={wp('100%')}
              ref={(c2) => { this._carousel12 = c2; }}
              inactiveSlideScale={1}
              renderItem={this.renderHeaderItem}
            />
            {/* <ImageWithContent
              imageStyle={{ width: wp('100%'), height: hp('25%'), }}
              imageSource={{ uri: 'https://i.ytimg.com/vi/QDaH-B6NY-4/maxresdefault.jpg' }} /> */}
          </View>


          {/* ----------------- New arrivals orders  ------------------- */}
          {this.props.newOffers.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('2%') }]}>
            {/* ----------------- New arrivals orders header  ------------------- */}
            <View style={[styles.sectionLabelContainer, { justifyContent: 'center' }]}>
              <Text style={styles.regularText}> {'اضيف حديثا للعروض'} </Text>
            </View>
            {/* ------------------------ New arrivals orders cards ----------------------- */}
            <View style={[styles.cardContainer, { marginTop: hp('0%'), }]}>
              <View style={[styles.flatlistContainer]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.newOffers}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderNewArrivalOfferItem}
                />
              </View>
            </View>
          </View>}

          {/* ----------------- New arrivals discounts  ------------------- */}
          {this.props.newDiscount.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('2%') }]}>
            {/* ----------------- New arrivals discounts header  ------------------- */}
            <View style={[styles.sectionLabelContainer, { justifyContent: 'center' }]}>
              <Text style={styles.regularText}> {'اضيف حديثا للخصومات'} </Text>
            </View>
            {/* ------------------------ New arrivals discounts cards ----------------------- */}
            <View style={[styles.cardContainer, { marginTop: hp('0%'), }]}>
              <View style={[styles.flatlistContainer]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.newDiscount}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderNewArrivalDiscountItem}
                />
              </View>
            </View>
          </View>}

          {/* ----------------- offer less than 3 days  ------------------- */}
          {this.props.endSoonOffers.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('3%') }]}>
            {/* ----------------- offer less than 3 days header ------------------- */}
            <View style={[styles.sectionLabelContainer, { justifyContent: 'center' }]}>
              <Text style={styles.regularText}> {'عروض باقي عليها اقل من 3 ايام'} </Text>
            </View>
            {/* ----------------- offer less than 3 days cards ------------------ */}
            <View style={styles.cardContainer}>
              <View style={styles.flatlistContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.endSoonOffers}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderOfferItem}
                />
              </View>
            </View>
          </View>}

          {/* ----------------- discounts less than 3 days  ------------------- */}
          {this.props.endSoonDiscount.length > 0 && <View style={[styles.sectionConainer, { marginTop: hp('3%') }]}>
            {/* ----------------- discounts less than 3 days header  ------------------- */}
            <View style={[styles.sectionLabelContainer, { justifyContent: 'center' }]}>
              <Text style={styles.regularText}> {'خصومات باقي عليها اقل من 3 ايام'} </Text>
            </View>
            {/* ------------------------ discounts less than 3 days cards ----------------------- */}
            <View style={styles.cardContainer}>
              <View style={styles.flatlistContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.props.endSoonDiscount}
                  horizontal
                  extraData={this.props}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderDiscountItem}
                />
              </View>
            </View>
          </View>}


        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.OrderReducer.categories,

    bestOffers: state.OrderReducer.bestOffers,
    newOffers: state.OrderReducer.newOffers,
    endSoonOffers: state.OrderReducer.endSoonOffers,

    bestDiscount: state.OrderReducer.bestDiscount,
    newDiscount: state.OrderReducer.newDiscount,
    endSoonDiscount: state.OrderReducer.endSoonDiscount,

    topADS: state.OrderReducer.topADS,
    bottomADS: state.OrderReducer.bottomADS,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    UserLogin: (data, responseHandler) => {
      dispatch(UserLogin(data, responseHandler));
    },
    turnOnPageLoading: () => {
      dispatch(turnOnPageLoading());
    },
    turnOffPageLoading: () => {
      dispatch(turnOffPageLoading());
    },
    GetOfferDetail: (orderID, responseHandler) => {
      dispatch(GetOfferDetail(orderID, responseHandler));
    },
    GetDiscountDetail: (orderID, responseHandler) => {
      dispatch(GetDiscountDetail(orderID, responseHandler));
    },
    ChangeSelectedItmeDatailsType: (type) => {
      dispatch(ChangeSelectedItmeDatailsType(type));
    },
    ChangeSelectedCatItem: (CatItem) => {
      dispatch(ChangeSelectedCatItem(CatItem));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
