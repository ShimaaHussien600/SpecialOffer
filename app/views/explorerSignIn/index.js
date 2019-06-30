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

const { UserLogin } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;

class ExplorerSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <ImageBackground
        source={GetPhoto('bg_account')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <View
          style={{ width: wp('90%'), height: hp('100%'), alignItems: 'center' }}>
          <View style={{ marginTop: hp('8%'), alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              source={GetPhoto('logo2')}
              style={{ width: wp('80%'), height: hp('12%') }} />
          </View>
          <View
            style={{ marginTop: hp('20%'), width: wp('90%'), height: hp('18%'), alignItems: 'center' }}>
            <RegularTextInput
              selectionColor={colors.lightOrange}
              onChangeText={(email) => { this.setState({ email }); }}
              placeholder={'البريد الالكتروني'}
            />
            <RegularTextInput
              secureTextEntry={true}
              selectionColor={colors.lightOrange}
              onChangeText={(password) => { this.setState({ password }); }}
              placeholder={'كلمة المرور'}
              textInputnStyle={{ marginTop: hp('2%') }}
            />
          </View>
          <View style={{ marginTop: hp('20%') }}>
            <View
              style={{ width: wp('90%'), height: hp('8%'), alignItems: 'center' }}>
              <RegularButton
                onClick={() => {
                  if (this.state.email && this.state.password) {
                    if (validateEmail(this.state.email)) {
                      const data = {
                        email: this.state.email,
                        password: this.state.password,
                      };
                      const responseHandler = {
                        onSuccess: () => {
                          this.props.turnOffPageLoading();
                          const resetAction = StackActions.reset({
                            index: 0,
                            key: null,
                            actions: [
                              NavigationActions.navigate({ routeName: 'MainScreen' }),
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
                      this.props.UserLogin(data, responseHandler);
                    }
                    else {
                      alert('عليك ان تدخل بريد إلكتروني صالح');
                    }
                  }
                  else {
                    alert('لا يمكن لأي حقل ان يكون فارغاً');
                  }
                }

                }
                buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightOrange }}
                buttonText={'دخول'}
                textStyle={{ color: colors.white }}
              />
            </View>
            <View style={{ marginTop: hp('4%'), alignItems: 'center' }}>
              <ClickableText
                onPress={() => { this.props.navigation.navigate('ExplorerRegister'); }}
                regularText={'ليس لديك حساب'}
                regularTextStyle={{ color: colors.black, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
                clickableText={'سجل من هنا'}
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
    UserLogin: (data, responseHandler) => {
      dispatch(UserLogin(data, responseHandler));
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
)(ExplorerSignIn);
