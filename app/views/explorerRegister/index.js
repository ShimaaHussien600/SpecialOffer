/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { RegularTextInput } from '../../components /textinput';
import { ClickableText } from '../../components /text';
import fonts from '../../modules/fonts';
import { UserReducer, UIReducer } from '../../services/reducers';
import { validateEmail, DisplayError } from '../../global/helper';

const { RegisterNewUser } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;

class ExplorerRegister extends Component {
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
      <ImageBackground
        source={GetPhoto('bg_account')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ width: wp('90%'), height: hp('100%'), alignItems: 'center' }}>
          <View style={{ marginTop: hp('10%'), alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              source={GetPhoto('logo2')}
              style={{ width: wp('80%'), height: hp('12%') }} />
          </View>
          <View
            style={{ marginTop: hp('8%'), width: wp('90%'), height: hp('40%'), alignItems: 'center' }}>
            <RegularTextInput
              selectionColor={colors.lightOrange}
              onChangeText={(username) => { this.setState({ username }); }}
              placeholder={'اسم المستخدم'}
            />
            <RegularTextInput
              selectionColor={colors.lightOrange}
              onChangeText={(email) => { this.setState({ email }); }}
              placeholder={'البريد الالكتروني'}
              textInputnStyle={{ marginTop: hp('2%') }}
            />
            <RegularTextInput
              secureTextEntry={true}
              selectionColor={colors.lightOrange}
              onChangeText={(password) => { this.setState({ password }); }}
              placeholder={'كلمة المرور'}
              textInputnStyle={{ marginTop: hp('2%') }}
            />
            <RegularTextInput
              secureTextEntry={true}
              selectionColor={colors.lightOrange}
              onChangeText={(confrimpassword) => { this.setState({ confrimpassword }); }}
              placeholder={'تاكيد كلمة المرور'}
              textInputnStyle={{ marginTop: hp('2%') }}
            />
          </View>
          <View style={{ marginTop: hp('8%') }}>
            <View
              style={{ width: wp('90%'), height: hp('8%'), alignItems: 'center' }}>
              <RegularButton
                onClick={() => {
                  if (this.state.email && this.state.password &&
                    this.state.username && this.state.confrimpassword) {
                    if (validateEmail(this.state.email)) {
                      const data = {
                        basic_info: {
                          email: this.state.email,
                          password: this.state.password,
                          password1: this.state.confrimpassword,
                        },
                        more_info: {
                          name: this.state.username
                        }
                      };

                      const responseHandler = {
                        onSuccess: () => {
                          this.props.turnOffPageLoading();
                          const resetAction = StackActions.reset({
                            index: 0,
                            key: null,
                            actions: [
                              NavigationActions.navigate({ routeName: 'ExplorerSignIn' }),
                            ],
                          });
                          this.props.navigation.dispatch(resetAction);
                          // this.props.navigation.navigate('AdvertiserStack');
                        },
                        onFail: (error) => {
                          this.props.turnOffPageLoading();
                          console.log('AdvertiserRegister', 'onFail', 'error', error);
                          DisplayError(error);
                          // alert('هناك شي ما خاطئ');
                        }
                      };
                      this.props.turnOnPageLoading();
                      this.props.RegisterNewUser('searcher', data, responseHandler);
                    }
                    else {
                      alert('عليك ان تدخل بريد إلكتروني صالح');
                    }
                  }
                  else {
                    alert('لا يمكن لأي حقل ان يكون فارغاً');
                  }
                }}
                buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightOrange }}
                buttonText={'تسجيل حساب'}
                textStyle={{ color: colors.white }}
              />
            </View>
            <View style={{ marginTop: hp('4%'), alignItems: 'center' }}>
              <ClickableText
                onPress={() => { this.props.navigation.navigate('ExplorerSignIn'); }}
                regularText={'لديك حساب'}
                regularTextStyle={{ color: colors.black, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
                clickableText={'ادخل من هنا'}
                clickableTextStyle={{ color: colors.darkRed, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
function mapStateToProps(state) {
  return {

  };
}


function mapDispatchToProps(dispatch) {
  return {
    RegisterNewUser: (userType, data, responseHandler) => {
      dispatch(RegisterNewUser(userType, data, responseHandler));
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
)(ExplorerRegister);
