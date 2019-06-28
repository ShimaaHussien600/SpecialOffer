/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, I18nManager, AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';
import moment from 'moment';
import 'moment/locale/ar';
import { connect } from 'react-redux';
import AppNavigator from './app/appNavigator';
import { Loader } from './app/components /Loader';
import colors from './app/modules/colors';

moment.locale('ar');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      isConnected: true,
      showAlert: false,
      finishRTLCheck: false,
    };
  }
  async componentWillMount() {
    const value = await AsyncStorage.getItem('lang');
    if (!value) {
      await AsyncStorage.setItem('lang', '1');
      I18nManager.forceRTL(true);
      RNRestart.Restart();
      this.setState({ finishRTLCheck: true });
    } else {
      this.setState({ finishRTLCheck: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.finishRTLCheck && <AppNavigator />}
        {this.props.pageLoading && <Loader loaderColor={colors.darkRed} />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
function mapStateToProps(state) {
  console.log('state', state);
  return {
    pageLoading: state.UIReducer.pageLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
