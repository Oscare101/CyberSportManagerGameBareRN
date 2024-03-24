import {
  FlatList,
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
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import {OnlyCurrentSeason} from '../functions/tournamentFunctions';
import RenderTournamentItem from '../components/season/RenderTournamentItem';
import {Team} from '../constants/interfaces/playerTeamInterfaces';

export default function SeasonScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );
  const teams: Team[] = useSelector((state: RootState) => state.teams);

  const currentSeason = OnlyCurrentSeason(tournaments);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={`${text.Season} ${route.params.season}`} action="back" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={currentSeason}
        renderItem={(item: any) => (
          <RenderTournamentItem
            item={item.item}
            theme={themeColor}
            teams={teams}
            navigate={() => {
              navigation.navigate('TournamentScreen', {tournament: item.item});
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
