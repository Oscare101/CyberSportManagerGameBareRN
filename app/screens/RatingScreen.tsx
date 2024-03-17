import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';

const width = Dimensions.get('screen').width;

export default function RatingScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Rating} action="back" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
