/* eslint-disable max-len */
import React, { Component } from 'react';

import {
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { TextWithCircle } from '../../components /text';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOptions: [
        {
          name: 'هاتف محمول ايفون',
          onPress: () => { }
        },
        {
          name: 'هناك حقيقة مثبتة منذ زمن',
          onPress: () => { }
        },
        {
          name: 'رمضان كريم',
          onPress: () => { }
        },
        {
          name: 'اهلا رمضان',
          onPress: () => { }
        },
      ]
    };
  }
  render() {
    return (
      <ImageBackground
        source={GetPhoto('bg_account')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'البحث'}
            leftImageClick={() => {}}
        />
        </View>

        <View
          style={{ marginTop: hp('5%') }}>
          <SearhcBar
            onChangeText={(searchText) => { this.setState({ searchText }); }}
            onPressSearch={() => {}}
            />
          {/* ------------------ icons ---------------------------- */}
        </View>

        <View
          style={{ marginTop: hp('5%'), width: wp('85%'), height: hp('50%'), backgroundColor: colors.white, borderRadius: 5, elevation: 3 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.searchOptions}
            extraData={this.state}
            contentContainerStyle={{ paddingBottom: hp('2%') }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ index, item }) => {
              return (
                <View
                  style={{ marginTop: hp('2%'), width: wp('85%'), alignItems: 'center', }}>
                  <TextWithCircle
                    onPress={item.onPress}
                    text={item.name} />
                  <View style={{ marginTop: hp('1%'), height: 1, width: wp('75%'), backgroundColor: colors.gray }} />
                </View>

              );
            }}
           />
        </View>

      </ImageBackground>
    );
  }
}
