/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { Icon } from '../../components /icon';
import colors from '../../modules/colors';
import { TextWithUnderLine } from '../../components /text';
import { Card, OfferCard } from '../../components /card';
import styles from './styling';
import fonts from '../../modules/fonts';
import { UserReducer, UIReducer, OrderReducer } from '../../services/reducers';

const { UserLogin } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { GetOfferDetail, GetOffersWithFilter, ChangeSelectedItmeDatailsType } = OrderReducer;

class BestOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      categories:[],
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
      ]
    };
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
          currencyText={'درهم'}
          priceTextStyle={[styles.regularText, { color: colors.white, }]}
          priceText={item.price}
            />
      </TouchableOpacity>
    );
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

  filterOffer = (CatID) => {
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
    if(CatID == -1){
      this.props.GetOffersWithFilter('best',responseHandler )
    }
    else{
      this.props.GetOffersWithFilter(`?cat_id=${CatID}&order_by=most_visited`,responseHandler)
    }
  }

  componentDidMount(){
    let { categories } = this.props;
    let mixed={name: 'متنوع', id: -1}
    categories.splice(0, 0, mixed);
    this.setState({ categories })
  }

  render() {
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'افضل العروض'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>
        {/* <View style={{ width: wp('100%'), height: 2, marginTop: hp('4%'), backgroundColor: colors.grayInput }} /> */}

        <View style={styles.headerContainer}>
          <View style={styles.headerflatlistContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.categories}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ index, item }) => {
                return (
                  <TextWithUnderLine
                    onPress={() => {
                      this.filterOffer(item.id)
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


        <View style={styles.cardContainer}>
          <View style={styles.flatlistContainer}>

            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={this.state.selectedOption == 0 ? this.props.bestOffers: this.props.catBestOfferes}
              extraData={this.props}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ alignItems: 'center',  }}
              renderItem={this.renderOfferItem}
           />
          </View>
        </View>

      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.OrderReducer.categories,
    bestOffers: state.OrderReducer.bestOffers,
    catBestOfferes: state.OrderReducer.catBestOfferes
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
    GetOffersWithFilter: (orderBy, responseHandler) => {
      dispatch(GetOffersWithFilter(orderBy, responseHandler));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestOffers);
