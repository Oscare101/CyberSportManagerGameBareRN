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
import TournamentTopBlock from '../components/tournament/TournamentTopBlock';

export default function TournamentScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={route.params.tournament.name} action="back" />
      <TournamentTopBlock tournament={route.params.tournament} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
