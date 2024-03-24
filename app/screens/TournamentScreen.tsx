import {
  SafeAreaView,
  ScrollView,
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
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import RenderPrizes from '../components/tournament/RenserPrizes';

export default function TournamentScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  function GetCurrentTournament() {
    return tournaments.find(
      (t: Tournament) =>
        t.season === route.params.tournament.season &&
        t.period === route.params.tournament.period &&
        t.name === route.params.tournament.name,
    ) as Tournament;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          globalStyles.container,
          {backgroundColor: colors[themeColor].bg},
        ]}>
        <Header title={route.params.tournament.name} action="back" />
        <TournamentTopBlock tournament={route.params.tournament} />
        <RenderPrizes tournament={GetCurrentTournament()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
