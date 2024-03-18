import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';
import {
  GetPlayersFromTeams,
  SortPlayerByRoles,
  SortPlayersByStat,
  SortPlayersByTeam,
} from '../functions/function';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import PlayerItem from '../components/team/PlayerItem';
import {GetPlayerRating} from '../functions/playerFunctions';
import Button from '../components/Button';
import PlayerItemGlobal from '../components/team/PlayerItemGlobal';

const width = Dimensions.get('screen').width;

export default function RatingScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const players: Player[] = GetPlayersFromTeams(teams);
  const sorted = [...players].sort(
    (a: Player, b: Player) =>
      GetPlayerRating(b, players) - GetPlayerRating(a, players),
  );

  const [showAll, setShowAll] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'stat' | 'role' | 'rating' | 'team'>(
    'team',
  );

  function Sort() {
    return sortBy === 'stat'
      ? SortPlayersByStat(players)
      : sortBy === 'role'
      ? SortPlayerByRoles(players)
      : sortBy === 'team'
      ? SortPlayersByTeam(players)
      : [];
  }

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Rating} action="back" />
      {/* <PlayerSortByBlock  /> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={Sort().slice(0, showAll ? sorted.length : 20)}
        initialNumToRender={20}
        getItemLayout={(data: any, index: number) => ({
          length: width * 0.08,
          offset: 0.09 * index,
          index,
        })}
        renderItem={(item: any) => (
          <PlayerItemGlobal
            item={item.item}
            index={item.index + 1}
            theme={themeColor}
            players={players}
            teamIcon={true}
          />
        )}
        ListFooterComponent={() => (
          <>
            {showAll ? (
              <></>
            ) : (
              <Button
                title={text.ShowMore}
                action={() => setShowAll(true)}
                buttonStyles={{
                  alignSelf: 'center',
                  backgroundColor: '#00000000',
                }}
              />
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
