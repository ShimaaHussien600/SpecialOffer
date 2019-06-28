/**
 * @format
 */
import React from 'react';
import { AppRegistry, I18nManager, AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { name as appName } from './app.json';
import { Reducer } from './app/services/reducer';
import { UserReducer, UIReducer } from './app/services/reducers';
// import configureStore from './app/services/store';
import MyStore from './app/services/store';

// const muserReducer = new UserReducer();
// const mUIReducer = new UIReducer();
// const mReducer = new Reducer(muserReducer, mUIReducer);
// const { store, persistor } = configureStore(mReducer.getReducers());


const ReduxApp = () => (
  <Provider store={MyStore.store}>
    <PersistGate loading={null} persistor={MyStore.persistor}>
      <App />

    </PersistGate>

  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
