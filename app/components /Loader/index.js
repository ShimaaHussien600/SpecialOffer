import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

export const Loader = ({ loaderColor }) => {
  return (
    <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.6)' }}>
      <ActivityIndicator size="large" color={loaderColor} />
    </View>
  );
};
