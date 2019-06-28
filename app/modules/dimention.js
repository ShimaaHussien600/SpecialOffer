/* eslint-disable no-nested-ternary */
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Height = width < height ? (Platform.OS === 'android' ? height : height) : width;
export const Width = width < height ? width : Platform.OS === 'android' ? height : height;
