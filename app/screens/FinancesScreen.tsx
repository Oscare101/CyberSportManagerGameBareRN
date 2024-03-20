import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import Card from '../components/finances/Card';
import {GetMoneyAmountString} from '../functions/function';

export default function FinancesScreen() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const playersSalaries = myTeam.players.reduce(
    (sum: number, p: Player) => sum + p.contract.salary,
    0,
  );

  return (
    <SafeAreaView>
      <Header title={text.Finances} action="back" />
      <Card
        title={text.Cash}
        value={GetMoneyAmountString(myTeam.bank.cash)}
        theme={themeColor}
      />
      <Card
        title={text.Expenses}
        value={GetMoneyAmountString(playersSalaries)}
        theme={themeColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
