import {FlatList, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import PlayerItem from './PlayerItem';
import {GetPlayersFromTeams} from '../../functions/function';

function PlayersPage() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const allPlayers = GetPlayersFromTeams(teams);

  return (
    <>
      <FlatList
        style={{width: '100%'}}
        data={myTeam.players}
        renderItem={({item}) => (
          <PlayerItem item={item} theme={themeColor} players={allPlayers} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({});
export default memo(PlayersPage);
