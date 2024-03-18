import {
  Dimensions,
  FlatList,
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
import {GetPlayersFromTeams} from '../functions/function';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import PlayerItem from '../components/team/PlayerItem';
import {GetPlayerTopRatingWithPlayers} from '../functions/playerFunctions';

const width = Dimensions.get('screen').width;

export default function RatingScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const players: Player[] = GetPlayersFromTeams(teams);
  const sorted = [...players].sort(
    (a: Player, b: Player) =>
      GetPlayerTopRatingWithPlayers(b, players) -
      GetPlayerTopRatingWithPlayers(a, players),
  );

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Rating} action="back" />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={sorted}
        renderItem={(item: any) => (
          <PlayerItem
            item={item.item}
            theme={themeColor}
            players={players}
            teamIcon={true}
            global={true}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
