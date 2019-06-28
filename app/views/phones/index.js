/* eslint-disable max-len */
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationEvents } from "react-navigation";
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { Icon } from '../../components /icon';
import colors from '../../modules/colors';
import { TextWithUnderLine, TextWithImage } from '../../components /text';
import { Card, SmallCard, DiscountCard, OfferCard } from '../../components /card';
import { RegularButton } from '../../components /button';
import styles from './styling';
import fonts from '../../modules/fonts';
import { UserReducer, UIReducer, OrderReducer } from '../../services/reducers';

const { UserLogin } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { GetOfferDetail, GetOffersWithFilter, ChangeSelectedItmeDatailsType,
  GetDiscountsWithFilter,GetDiscountDetail } = OrderReducer;

class Phones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOnNotification: false,
      sectionOptions: [
        {
          name: 'العروض'
        },
        {
          name: 'الخصومات'
        },
      ],
      selectedOption: 0,
      offerData: [
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
    };
  }

  renderDiscountItem = ({ item, index }) => {
    return (
      <TouchableOpacity
      onPress={()=>{this.loadDiscountDetails(item.id)}}
        style={[styles.dicountcardContainer, {
          alignItems: (index + 1) % 2 ? 'flex-start' : 'flex-end', }]}>

        <DiscountCard
          containerStyle={styles.dicountItemContainer}

          imageContainerStyle={styles.dicountItemImageContainer}
          imageStyle={styles.dicountItemImageStyle}
          imageSource={{ uri: item.discount_images[0].image }}


          bodyStyle={styles.dicountItemTextContainer}

          discriptionContainerStyle={styles.dicountItemDecriptionTextContainer}

          discriptionTextStyle={[styles.smallText, { color: colors.black, lineHeight: fonts.size.regular }]}
          discriptionText={item.name}

          currencyTextStyle={[styles.smallText, { fontFamily: fonts.type.normal, color: colors.darkgray, lineHeight: fonts.size.h5 }]}
          currencyText={'درهم'}

          priceTextStyle={[styles.regularText, { color: colors.darkgray, }]}
          priceText={item.price}


          percentage={item.precentage+'%'}
         />
      </TouchableOpacity>
    );
  }


  renderOfferItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
      onPress={()=>{this.loadOfferDetails(item.id)}}
      style={[styles.offerItemContainer, {
        alignItems: (index + 1) % 2 ? 'flex-start' : 'flex-end',
        // backgroundColor: (index + 1) === this.state.offerData.length ? 'red' : 'blue'
      }]}>

        <OfferCard
          imageStyle={styles.offerItemImageStyle}
          imageSource={{ uri: item.offer_images[0].image }}
          bodyStyle={styles.offerItemTextContainer}
          discriptionContainerStyle={styles.offerItemDecriptionTextContainer}
          discriptionTextStyle={[styles.mediumText, styles.shadowText, { lineHeight: fonts.size.input }]}
          discriptionText={item.name}
          currencyTextStyle={[styles.smallText, styles.shadowText, { fontFamily: fonts.type.normal, color: colors.white, }]}
          currencyText={item.currency}
          priceTextStyle={[styles.regularText, { color: colors.white, }]}
          priceText={item.price}
            />
      </TouchableOpacity>
    );
  }

  swipe(targetIndex) {
    const currentIndex = this.state.selectedOption;
    const offset = targetIndex - currentIndex;
    this.swiper.scrollBy(offset);
  }

  loadOffers = (CatID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetOffersWithFilter(`?cat_id=${CatID}`,responseHandler)
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
    this.props.GetOfferDetail(ID,responseHandler)
  }

  
  loadDiscount = (CatID) => {
    this.props.turnOnPageLoading();
    const responseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.GetDiscountsWithFilter(`?cat_id=${CatID}`,responseHandler)
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
    this.props.GetDiscountDetail(ID,responseHandler)
  }

  loadData = (index) =>{
    if(index == 0){
      this.loadDiscount(this.props.SelectedCatItem.id)
    }
    else{
      this.loadOffers(this.props.SelectedCatItem.id)
    }
  }

  loadAllData = (CatID) =>{
    const DiscountresponseHandler = {
      onSuccess: () => {
        this.props.turnOffPageLoading();
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    const responseHandler = {
      onSuccess: () => {
        this.props.GetDiscountsWithFilter(`?cat_id=${CatID}`,DiscountresponseHandler)
      },
      onFail: (error) => {
        this.props.turnOffPageLoading();
        alert('هناك شي ما خاطئ');
      }
    };
    this.props.turnOnPageLoading();
    this.props.GetOffersWithFilter(`?cat_id=${CatID}`,responseHandler)
  }

  
  // componentDidMount(){
  //   this.loadOffers(this.props.SelectedCatItem.id)
  //   this.loadDiscount(this.props.SelectedCatItem.id)
  // }

  render() {
    const { turnOnNotification } = this.state;
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
           <NavigationEvents
              onWillFocus={() => {
                console.log('onWillFocus','this.state.selectedOption',this.state.selectedOption)
                // this.swipe(1);
                // this.setState({selectedOption: 1})
                // this.loadOffers(this.props.SelectedCatItem.id)
                // this.loadDiscount(this.props.SelectedCatItem.id)
                this.loadAllData(this.props.SelectedCatItem.id)
          }}
        />
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={`قسم ${this.props.SelectedCatItem.name}`}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.headerflatlistContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.sectionOptions}
              // contentContainerStyle={{flexDirection:'row-reverse'}}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ index, item }) => {
                return (
                  <TextWithUnderLine
                    containerwidth={wp('45%')}
                    onPress={() => {
                console.log('Phones','Header FlatList','index = ',index, ' this.state.selectedOption = ',this.state.selectedOption )
                      // this.loadData(index);
                      this.swipe(index);
                      this.setState({ selectedOption: index });
                    }}
                    text={item.name}
                    selected={(this.state.selectedOption === index)}
                    selectedColor={colors.lightOrange}
                    notSelectedColor={colors.darkgray}
                    />
                );
              }}
           />
          </View>
        </View>

        <View
          style={{
            marginTop: hp('4%'),
            width: wp('85%'),
            height: hp('7%'),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between', }}>

          <View style={{ width: wp('55%'), alignItems: 'center', }}>
            <TextWithImage
              text={'احصل على اشعارات جديد القسم'}
              ImageSource={GetPhoto('mailbox')}
        />
          </View>
          <View style={{ width: wp('25%'), alignItems: 'center', }}>
            <RegularButton
              onClick={() => {
                this.setState(prevState => ({
                  turnOnNotification: !prevState.turnOnNotification
                }));
              }}
              buttonStyle={{ width: wp('25%'), height: hp('7%'), borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: turnOnNotification ? colors.darkerOrange : 'transparent', borderWidth: 1, borderColor: colors.darkerOrange }}
              buttonText={'تفعيل'}
              textStyle={{ color: turnOnNotification ? colors.white : colors.darkerOrange }}
              />
          </View>
        </View>

        {/* <View
          style={{
            marginTop: hp('2%'),
            width: wp('100%'),
            height: hp('64%'),
            alignItems: 'center',
            backgroundColor: colors.black
          }}> */}
        <Swiper
          style={{
            marginTop: hp('2%'),
            width: wp('100%'),
            height: hp('64%'),
            alignItems: 'center',
            // backgroundColor: colors.black
          }}
          scrollEnabled={false}
          loop={false}
          ref={component => this.swiper = component}
          index={0}
          // onIndexChanged={(selected) => {
          //   this.loadData(selected);
          //   this.setState({ selectedOption: selected });
          // }}
          showsPagination={false}>

          <View style={styles.cardContainer}>
            <View style={styles.flatlistContainer}>
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={this.props.catBestOfferes}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ alignItems: 'center', }}
                renderItem={this.renderOfferItem}
           />
            </View>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.flatlistContainer}>
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={this.props.catBestDiscount}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ alignItems: 'center', }}
                renderItem={this.renderDiscountItem}
           />
            </View>
          </View>

        </Swiper>

        {/* <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={this.state.orderItems}
            extraData={this.state}
            contentContainerStyle={{ paddingBottom: hp('2%') }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ index, item }) => {
              return (
                <View
                  style={{ marginTop: hp('2%'), width: wp('45%'), alignItems: 'center', }}>
                  <SmallCard
                    onPress={item.onPress}
                    offerImage={item.offerImage}
                    offerDiscription={item.offerDiscription}
                    percentage={item.percentage}
                    price={item.price}
                    currency={item.currency}
                    deadline={item.deadline}
            />
                </View>

              );
            }}
           /> */}
        {/* </View> */}

      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.OrderReducer.categories,
    catBestOfferes: state.OrderReducer.catBestOfferes,
    catBestDiscount: state.OrderReducer.catBestDiscount,
    SelectedCatItem: state.OrderReducer.SelectedCatItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetDiscountDetail: (orderID, responseHandler) => {
      dispatch(GetDiscountDetail(orderID, responseHandler));
    },
    GetOfferDetail: (orderID, responseHandler) => {
      dispatch(GetOfferDetail(orderID, responseHandler));
    },
    turnOnPageLoading: () => {
      dispatch(turnOnPageLoading());
    },
    turnOffPageLoading: () => {
      dispatch(turnOffPageLoading());
    },
    ChangeSelectedItmeDatailsType: (type) => {
      dispatch(ChangeSelectedItmeDatailsType(type));
    },
    GetDiscountsWithFilter: (orderBy, responseHandler) => {
      dispatch(GetDiscountsWithFilter(orderBy, responseHandler));
    },
    GetOffersWithFilter: (orderBy, responseHandler) => {
      dispatch(GetOffersWithFilter(orderBy, responseHandler));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phones);
