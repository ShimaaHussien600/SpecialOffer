/* eslint-disable max-len */
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import { Icon } from '../../components /icon';
import { RegularButton } from '../../components /button';
import colors from '../../modules/colors';
import { CategoryCard } from '../../components /card';
import styles from './homeMoreIconsStyles';
import fonts from '../../modules/fonts';
import { UIReducer, AdvertiserReducer, OrderReducer } from '../../services/reducers';

const { ChangeSelectedCategories } = AdvertiserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;
const { ChangeSelectedCatItem } = OrderReducer;

class HomeMoreIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: this.props.selectedCategories,
    };
  }


  renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
      onPress={() => {
        this.props.ChangeSelectedCatItem(item); 
        this.props.navigation.navigate('Phones'); 
      }}
        style={[styles.categoryItemContainer, {
          borderRadius: 10,
          borderWidth: this.state.selectedCategory === index ? 0.5 : 0,
          borderColor: colors.darkRed,
          elevation: this.state.selectedCategory === index ? 5 : 0,
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

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            headerstyle={{ width: wp('85%') }}
            rightImage={GetPhoto('alarm')}
            rightImageClick={() => { this.props.navigation.navigate('Notification'); }}
            headerName={'الاقسام'}
            noRotate={true}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>

        {/* ------------------ icons ---------------------------- */}
        <View
          style={{ marginTop: hp('1%'), width: wp('100%'), alignItems: 'center' }}>
          <View style={{ width: wp('85%'), height: hp('88%'), }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.props.categories}
              numColumns={3}
              extraData={this.state}
              contentContainerStyle={{ paddingBottom: hp('8%'), }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderCategoryItem}
           />
          </View>
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
    ChangeSelectedCategories: (selectedCategories) => {
      dispatch(ChangeSelectedCategories(selectedCategories));
    },
    turnOnPageLoading: () => {
      dispatch(turnOnPageLoading());
    },
    turnOffPageLoading: () => {
      dispatch(turnOffPageLoading());
    },
    ChangeSelectedCatItem: (CatItem) => {
      dispatch(ChangeSelectedCatItem(CatItem));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMoreIcons);
