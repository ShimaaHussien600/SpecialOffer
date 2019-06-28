/* eslint-disable max-len */
import React, { Component } from 'react';

import {
  View,
  Image,
  FlatList,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { TextWithCircle } from '../../components /text';
import fonts from '../../modules/fonts';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'وليد عيسى اسماعيل',
      email: 'test@test.com',
      password: '************',
      notificationOptions: [
        {
          name: 'سيارات'
        },
        {
          name: 'هواتف'
        },
        {
          name: 'طعام'
        },
        {
          name: 'لاب توب'
        },
        {
          name: 'معلبات'
        },
      ],
    };
  }

  renderSection = (text) => {
    let Height = hp('8%');
    return (
      <TouchableOpacity
        onPress={() => {
          Height = hp('10%');
          this.setState({ Height });
        }}
        style={{
          marginTop: hp('4%'),
          width: wp('70%'),
          height: Height,
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: 5,
          elevation: 5
        }}>
        <View
          style={{ width: wp('60%'),
            height: hp('8%'),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between' }}>
          <Image
            resizeMode="contain"
            source={GetPhoto('backIcon')}
            style={{ width: wp('5%'), height: hp('5%') }}
        />

          <Text style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal, color: colors.black, }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { userDetails } = this.props;
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center', backgroundColor: 'white' }}>
        <View
          style={{ marginTop: hp('2%'), height: hp('5%') }}>
          <Header
            rightImage={GetPhoto('backIcon')}
            rightImageClick={() => { this.props.navigation.goBack(); }}
            headerName={'الملف الشخصي'}
            leftImage={GetPhoto('menuButton')}
            leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
        </View>

        <View
          style={{width: wp('85%'), alignItems: 'center' }}>
          <View style={{
            marginTop: hp('4%'),
            width: wp('85%'),
            paddingVertical: hp('5%'),
            paddingHorizontal: wp('5%'),
            alignItems: 'flex-start',
            backgroundColor: colors.white,
            borderRadius: 5,
            elevation: 5
          }}>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.normal, color: colors.black, }}>
              {userDetails.publisher? userDetails.publisher.name : userDetails.searcher.name}
            </Text>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.normal, color: colors.black, }}>
              {userDetails.email}
            </Text>
            <Text style={{ fontSize: fonts.size.medium, fontFamily: fonts.type.normal, color: colors.black, }}>
              {this.state.password}
            </Text>
            <View style={{
              marginTop: hp('2%'),
              width: '100%',
              alignItems: 'flex-end',
            }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('EditInfo');
                }}
                style={{
                  width: wp('25%'),
                  height: hp('6%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.lightOrange,
                  borderRadius: 25,
                }}>
                <Text style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.medium, color: colors.white, }}>
                  {'تعديل'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{
            marginTop: hp('4%'),
            width: wp('85%'),
            paddingVertical: hp('5%'),
            // paddingHorizontal: wp('5%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            borderRadius: 5,
            elevation: 5
          }}>
            <Image
              resizeMode="contain"
              source={GetPhoto('mailbox')}
              style={{ width: wp('50%'), height: hp('6%') }}
        />
            <Text style={{ fontSize: fonts.size.regular, fontFamily: fonts.type.medium, color: colors.black, }}>
              {'الأقسام التي تتباعها'}
            </Text>
            <Text style={{ fontSize: fonts.size.small, fontFamily: fonts.type.normal, textAlign: 'center' }}>
              {'انك تستفيد من احدث عروض وتخفضيات الاقسام'}
            </Text>
            <ScrollView>
              <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                data={this.state.notificationOptions}
                extraData={this.state}
                // contentContainerStyle={{ flexDirection: 'row-reverse' }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{ width: wp('25%'), height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                      <View
                        style={{
                          width: wp('22%'),
                          height: hp('5%'),
                          alignItems: 'center',
                          backgroundColor: colors.lightOrange,
                          borderRadius: wp('5%'),
                          paddingHorizontal: wp('3%'),
                          flexDirection: 'row',
                          justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: fonts.size.small, fontFamily: fonts.type.medium, color: colors.white }}>{item.name}</Text>
                        <View style={{
                          width: wp('5%'),
                          height: wp('5%'),
                          borderRadius: wp('2.5%'),
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: colors.white }}>
                          <EvilIcons
                            name="close"
                            size={wp('5%')}
                            color={colors.lightOrange} />
                        </View>
                      </View>

                    </View>

                  );
                }}
          />
            </ScrollView>
          </View>
          {/* {this.renderSection(this.state.username)}
          {this.renderSection(this.state.email)}
          {this.renderSection(this.state.password)} */}
        </View>

      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    userDetails: state.UserReducer.userDetails,
    profile: state.UserReducer.profile
  };
}


function mapDispatchToProps(dispatch) {
  return {
    Logout: () => {
      dispatch(Logout());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);