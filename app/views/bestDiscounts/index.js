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
import { Card, OfferCard, DiscountCard } from '../../components /card';
import styles from './styling';
import fonts from '../../modules/fonts';
import { UserReducer, UIReducer, OrderReducer } from '../../services/reducers';
import { adsImage } from '../../assets/image/staticImages';

const { UserLogin } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { GetDiscountDetail, GetDiscountsWithFilter, ChangeSelectedItmeDatailsType } = OrderReducer;

class BestDiscounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      categories: [],
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
        onPress={() => { this.loadDiscountDetails(item.id) }}
        style={[styles.dicountcardContainer, {
          alignItems: (index + 1) % 2 ? 'flex-start' : 'flex-end',
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

  filterDiscount = (CatID) => {
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
    if (CatID == -1) {
      this.props.GetDiscountsWithFilter('best', responseHandler)
    }
    else {
      this.props.GetDiscountsWithFilter(`?cat_id=${CatID}&order_by=most_visited`, responseHandler)
    }
  }

  componentDidMount() {
    let { categories } = this.props;
    let mixed = { name: 'متنوع', id: -1 }
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
            headerName={'افضل الخصومات'}
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
              data={this.props.categories}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ index, item }) => {
                return (
                  <TextWithUnderLine
                    onPress={() => {
                      this.filterDiscount(item.id)
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
              data={this.state.selectedOption == 0 ? this.props.bestDiscount : this.props.catBestDiscount}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ alignItems: 'center', }}
              renderItem={this.renderDiscountItem}
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
    bestDiscount: state.OrderReducer.bestDiscount,
    catBestDiscount: state.OrderReducer.catBestDiscount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetDiscountDetail: (orderID, responseHandler) => {
      dispatch(GetDiscountDetail(orderID, responseHandler));
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestDiscounts);
