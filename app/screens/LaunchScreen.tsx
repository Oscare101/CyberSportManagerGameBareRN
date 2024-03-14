import {
  Dimensions,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import StatImage from '../components/icons/StatImage';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {Theme} from '../constants/interfaces/iconInterfaces';
import text from '../constants/text';

const {width, height} = Dimensions.get('screen');

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export default function LaunchScreen() {
  const theme: Theme['value'] = useColorScheme() || 'light';
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        globalStyles.center,
        {backgroundColor: colors[theme].bg},
      ]}>
      <StatImage
        stat="accuracy"
        size={width}
        theme={theme === 'light' ? 'dark' : 'light'}
      />
    </SafeAreaView>
  );
}
