import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import globalStyles from '../constants/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';

export default function MainScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      {/* <Header /> */}
      <Text>MainScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
