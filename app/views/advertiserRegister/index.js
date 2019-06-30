/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { GetPhoto } from '../../modules/images';
import colors from '../../modules/colors';
import { RegularButton } from '../../components /button';
import { RegularTextInput } from '../../components /textinput';
import { ClickableText } from '../../components /text';
import fonts from '../../modules/fonts';
// import { UserReducer } from '../../services/reducers/UserReducer';
import { UserReducer, UIReducer } from '../../services/reducers';
import { validateEmail, DisplayError } from '../../global/helper';


const { RegisterNewUser } = UserReducer;
const { turnOnPageLoading, turnOffPageLoading } = UIReducer;

class AdvertiserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: '',
      email: '',
      phoneCode: '',
      phoneNumber: '',
      password: '',
      confrimpassword: '',
    };
  }
  
  render() {
    return (
      <ImageBackground
        resizeMode="contain"
        source={GetPhoto('bg_account')}
        style={{ width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          enableAutomaticScroll={true}>
          <View
            style={{ width: wp('90%'), height: hp('100%'), alignItems: 'center' }}>
            <View style={{ marginTop: hp('8%'), alignItems: 'center' }}>
              <Image
                resizeMode="contain"
                source={GetPhoto('logo2')}
                style={{ width: wp('80%'), height: hp('12%') }} />
            </View>
            <View
              style={{ marginTop: hp('8%'), width: wp('90%'), height: hp('48%'), alignItems: 'center' }}>
              <RegularTextInput
                selectionColor={colors.darkRed}
                onChangeText={(companyname) => { this.setState({ companyname }); }}
                placeholder={'اسم الشركة'}
                // value={this.state.companyname}
              />
              <RegularTextInput
                selectionColor={colors.darkRed}
                onChangeText={(email) => { this.setState({ email }); }}
                placeholder={'البريد الالكتروني'}
                textInputnStyle={{ marginTop: hp('2%') }}
                // value={this.state.email}
              />
              <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-between', width: wp('80%') }}>
                <RegularTextInput
                  keyboardType={'phone-pad'}
                  selectionColor={colors.darkRed}
                  onChangeText={(phoneNumber) => { this.setState({ phoneNumber }); }}
                  placeholder={'رقم الهاتف'}
                  textInputnStyle={{ width: wp('60%') }}
                  // value={this.state.phoneNumber}
                />
                <RegularTextInput
                  keyboardType={'phone-pad'}
                  maxLength={4}
                  selectionColor={colors.darkRed}
                  onChangeText={(phoneCode) => { this.setState({ phoneCode }); }}
                  placeholder={'+97'}
                  textInputnStyle={{ width: wp('15%'), textAlign: 'center' }}
                  // value={this.state.phoneCode}
                />
              </View>
              <RegularTextInput
                secureTextEntry={true}
                selectionColor={colors.darkRed}
                onChangeText={(password) => { this.setState({ password }); }}
                placeholder={'كلمة المرور'}
                textInputnStyle={{ marginTop: hp('2%') }}
                // value={this.state.password}
              />
              <RegularTextInput
                secureTextEntry={true}
                selectionColor={colors.darkRed}
                onChangeText={(confrimpassword) => { this.setState({ confrimpassword }); }}
                placeholder={'تاكيد كلمة المرور'}
                textInputnStyle={{ marginTop: hp('2%') }}
                // value={this.state.confrimpassword}
              />
            </View>
            <View style={{ marginTop: hp('2%'), height: hp('22%') }}>
              <View
                style={{ width: wp('90%'), height: hp('8%'), alignItems: 'center' }}>
                <RegularButton
                  onClick={() => {
                    if (this.state.email && this.state.password
                      && this.state.confrimpassword && this.state.companyname
                      && this.state.phoneNumber) {
                      if (validateEmail(this.state.email)) {
                        const data = {
                          basic_info: {
                            email: this.state.email,
                            password: this.state.password,
                            password1: this.state.confrimpassword,
                          },
                          more_info: {
                            name: this.state.companyname,
                            image: 'data:image/gif;base64,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',
                            trading_doc: 'data:image/gif;base64,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',
                            phone: this.state.phoneCode + this.state.phoneNumber,
                            work_start_at: '08:00',
                            work_end_at: '18:00'
                          }
                        };
                        const responseHandler = {
                          onSuccess: () => {
                            this.props.turnOffPageLoading();
                            const resetAction = StackActions.reset({
                              index: 0,
                              key: null,
                              actions: [
                                NavigationActions.navigate({ routeName: 'AdvertiserSignIn' }),
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
                        this.props.RegisterNewUser('publisher', data, responseHandler);
                      }
                      else {
                        alert('عليك ان تدخل بريد إلكتروني صالح');
                      }
                    }
                    else {
                      alert('لا يمكن لأي حقل ان يكون فارغاً');
                    }
                  }}
                  buttonStyle={{ marginTop: hp('2%'), width: wp('90%'), height: hp('8%'), borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.darkRed }}
                  buttonText={'حساب معلن'}
                  textStyle={{ color: colors.white }}
                />
              </View>
              <View style={{ marginTop: hp('4%'), height: hp('10%'), alignItems: 'center' }}>
                <ClickableText
                  onPress={() => { this.props.navigation.navigate('AdvertiserSignIn'); }}
                  regularText={'لديك حساب'}
                  regularTextStyle={{ color: colors.black, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
                  clickableText={'ادخل من هنا'}
                  clickableTextStyle={{ color: colors.darkRed, fontSize: fonts.size.medium, fontFamily: fonts.type.normal }}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
)(AdvertiserRegister);
