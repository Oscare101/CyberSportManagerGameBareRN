import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import text from '../constants/text';
import Header from '../components/Header';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import PageSelectorBlock from '../components/team/PageSelectorBlock';
import PlayersPage from '../components/team/PlayersPage';
import TeamPage from '../components/team/TeamPage';
import Button from '../components/Button';
import {
  GetTeamStatAverage,
  NewTeamsDataAfterPlayersPractice,
  PracticePrice,
} from '../functions/playerFunctions';
import {updateTeams} from '../redux/teams';
import {GetMoneyAmountString} from '../functions/function';
import rules from '../constants/rules';

export default function MyTeamScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const dispatch = useDispatch();
  const [page, setPage] = useState<'players' | 'team'>('players');
  const [cost, setCost] = useState<number>(0);

  const [count, setCount] = useState<number>(0);

  function PracticeFunc() {
    setCount(prev => prev + 1);
    setCost(
      prev => prev + Math.floor(PracticePrice(myTeam) * rules.practicePrice),
    );
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
      <Text>{GetMoneyAmountString(cost)}</Text>
      <Button
        title={`(${count}) ${Math.floor(
          PracticePrice(myTeam) * rules.practicePrice,
        )} ${GetTeamStatAverage(myTeam)}`}
        action={PracticeFunc}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({hide: {display: 'none'}});
