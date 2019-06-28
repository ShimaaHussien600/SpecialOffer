/* eslint-disable max-len */
import React, { Component } from './node_modules/react';
import {
  View,
  FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { GetPhoto } from '../../modules/images';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { Icon } from '../../components /icon';

export class BestOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
            leftImageClick={() => {}}
        />
        </View>
      </View>
    );
  }
}
