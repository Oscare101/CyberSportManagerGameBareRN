import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
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
  ); // TODO

  const [cardsOpen, setCardsOpen] = useState<string[]>([]);

  const data = [
    {
      title: text.Cash,
      value: GetMoneyAmountString(myTeam.bank.cash),
    },
    {
      title: `${text.Expenses} ${text.perYear}`,
      value: GetMoneyAmountString(playersSalaries),
      data: myTeam.players.map((p: Player) => {
        return {
          title: p.name,
          value: GetMoneyAmountString(p.contract.salary),
        };
      }),
      // open: cardsOpen.find((i: string) => i === text.Expenses),
      // toggle: () => {
      //   if (cardsOpen.find((i: string) => i === text.Expenses)) {
      //     let newOppenedCard = [...cardsOpen].filter(
      //       (i: string) => i !== text.Expenses,
      //     );
      //     setCardsOpen(newOppenedCard);
      //   } else {
      //     setCardsOpen([...cardsOpen, text.Expenses]);
      //   }
      // },
    },
  ];

  function RenderItem({item}: any) {
    return (
      <Card
        title={item.title}
        value={item.value}
        theme={themeColor}
        data={item.data}
      />
    );
  }

  return (
    <SafeAreaView>
      <Header title={text.Finances} action="back" />
      <FlatList data={data} renderItem={RenderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
