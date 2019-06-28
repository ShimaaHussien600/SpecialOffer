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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { RegularTextInput } from '../../components /textinput';
import { Header } from '../../components /header';
import { SearhcBar } from '../../components /searchBar';
import { TextWithCircle } from '../../components /text';
import fonts from '../../modules/fonts';

export class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confrimpassword: '',
    };
  }


  render() {
    return (
      <View
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center', backgroundColor: 'white' }}>
        <View
          style={{ width: wp('90%'), height: hp('100%'), alignItems: 'center' }}>
          <View
            style={{ marginTop: hp('2%'), height: hp('5%') }}>
            <Header
              rightImage={GetPhoto('backIcon')}
              rightImageClick={() => { this.props.navigation.goBack(); }}
              headerName={'تعديل معلوماتى'}
              leftImage={GetPhoto('menuButton')}
              leftImageClick={() => { this.props.navigation.openDrawer(); }}
        />
          </View>
          <View
            style={{ marginTop: hp('12%'), width: wp('90%'), height: hp('40%'), alignItems: 'center' }}>
            <RegularTextInput
              selectionColor={colors.lightOrange}
              onChangeText={(username) => { this.setState({ username }); }}
              placeholder={'اسم المستخدم'}
              textInputnStyle={{ width: wp('85%'), }}
              />
            <RegularTextInput
              selectionColor={colors.lightOrange}
              onChangeText={(email) => { this.setState({ email }); }}
              placeholder={'البريد الالكتروني'}
              textInputnStyle={{ marginTop: hp('2%'), width: wp('85%'), }}
              />
            <RegularTextInput
              secureTextEntry={true}
              selectionColor={colors.lightOrange}
              onChangeText={(password) => { this.setState({ password }); }}
              placeholder={'كلمة المرور'}
              textInputnStyle={{ marginTop: hp('2%'), width: wp('85%'), }}
              />
            <RegularTextInput
              secureTextEntry={true}
              selectionColor={colors.lightOrange}
              onChangeText={(confrimpassword) => { this.setState({ confrimpassword }); }}
              placeholder={'تاكيد كلمة المرور'}
              textInputnStyle={{ marginTop: hp('2%'), width: wp('85%'), }}
              />
          </View>

          <View style={{ marginTop: hp('8%') }}>
            <View
              style={{ width: wp('90%'), height: hp('8%'), alignItems: 'center' }}>
              <RegularButton
                onClick={() => {
                }}
                buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightOrange }}
                buttonText={'حفظ'}
                textStyle={{ color: colors.white }}
              />
            </View>
          </View>

        </View>
      </View>
    );
  }
}
