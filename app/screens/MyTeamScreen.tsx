import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import text from '../constants/text';
import Header from '../components/Header';
import {Team} from '../constants/interfaces/playerTeamInterfaces';
import PageSelectorBlock from '../components/team/PageSelectorBlock';
import PlayersPage from '../components/team/PlayersPage';
import TeamPage from '../components/team/TeamPage';
import Button from '../components/Button';
import {NewTeamsDataAfterPlayersPractice} from '../functions/playerFunctions';
import {updateTeams} from '../redux/teams';

export default function MyTeamScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const dispatch = useDispatch();
  const [page, setPage] = useState<'players' | 'team'>('players');

  function PracticeFunc() {
    dispatch(updateTeams(NewTeamsDataAfterPlayersPractice(myTeam, teams)));
  }

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={myTeam.name} action="back" />
      <PageSelectorBlock
        page={page}
        setPage={(value: 'players' | 'team') => setPage(value)}
      />
      <View style={page === 'players' ? {width: '100%'} : styles.hide}>
        <PlayersPage />
      </View>
      <View style={page === 'team' ? {width: '100%'} : styles.hide}>
        <TeamPage />
      </View>
      <Button title="change ))))))))" action={PracticeFunc} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({hide: {display: 'none'}});
