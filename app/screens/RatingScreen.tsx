import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';
import {
  GetPlayersFromTeams,
  SortPlayerByRoles,
  SortPlayersByRating,
  SortPlayersByStat,
  SortPlayersByTeam,
} from '../functions/function';
import {
  Player,
  SortByInterface,
  Team,
} from '../constants/interfaces/playerTeamInterfaces';
import PlayerItem from '../components/team/PlayerItem';
import {GetPlayerRating} from '../functions/playerFunctions';
import Button from '../components/Button';
import PlayerItemGlobal from '../components/rating/PlayerItemGlobal';
import PlayerSortByBlock from '../components/rating/PlayerSortByBlock';

const width = Dimensions.get('screen').width;

export default function RatingScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const players: Player[] = GetPlayersFromTeams(teams).filter(
    (p: Player) => p.status === 'active',
  );

  const [showAll, setShowAll] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortByInterface['value']>('stat');

  function Sort() {
    return sortBy === 'stat'
      ? SortPlayersByStat(players)
      : sortBy === 'role'
      ? SortPlayerByRoles(players)
      : sortBy === 'team'
      ? SortPlayersByTeam(players)
      : SortPlayersByRating(players);
  }

  const setSortFunc = useCallback((value: SortByInterface['value']) => {
    setSortBy(value);
  }, []);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Rating} action="back" />
      <PlayerSortByBlock sortBy={sortBy} setSort={setSortFunc} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%', marginTop: width * 0.01}}
        data={Sort().slice(0, showAll ? players.length : 20)}
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
                titleStyles={{color: colors[themeColor].comment}}
              />
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
