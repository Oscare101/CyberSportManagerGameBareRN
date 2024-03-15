import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';
import globalStyles from '../constants/globalStyles';
import ThemeBlock from '../components/settings/ThemeBlock';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';

export default function SettingsScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Settings} action="back" />
      <ThemeBlock />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
