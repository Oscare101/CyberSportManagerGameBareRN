import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import globalStyles from '../constants/globalStyles';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';

export default function ChallengersScreen() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.ChallengerStage} action="back" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
