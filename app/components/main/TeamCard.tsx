import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import TeamImage from '../icons/TeamImage';
import colors from '../../constants/colors';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import text from '../../constants/text';
import globalStyles from '../../constants/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useNavigation} from '@react-navigation/native';
import {GetMoneyAmountString} from '../../functions/function';

const width = Dimensions.get('screen').width;

export default function TeamCard() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;

  const navigation: any = useNavigation();

  function TeamPlayers(props: {title: string; amount: number}) {
    return (
      <Text style={[styles.teamPlayers, {color: colors[themeColor].comment}]}>
        {props.title} {props.amount}
      </Text>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('MyTeamScreen')}
      style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      <View style={globalStyles.rowBetween}>
        <TeamImage team={myTeam.name} size={width * 0.17} />
        <View style={globalStyles.columnEnd}>
          <TeamPlayers
            title={text.MainPlayers}
            amount={
              myTeam.players.filter(
                (player: Player) => player.status === 'active',
              ).length
            }
          />
          <TeamPlayers
            title={text.BenchedPlayers}
            amount={
              myTeam.players.filter(
                (player: Player) => player.status === 'benched',
              ).length
            }
          />
        </View>
      </View>
      <View style={globalStyles.rowBetween}>
        <Text style={[styles.teamTitle, {color: colors[themeColor].main}]}>
          {myTeam?.name}
        </Text>
        <Text style={[styles.money, {color: colors[themeColor].main}]}>
          {GetMoneyAmountString(myTeam.bank.cash)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: width * 0.03,
    width: '60%',
    height: width * 0.33,
    borderRadius: width * 0.03,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamTitle: {
    fontSize: width * 0.06,
  },
  teamPlayers: {
    fontSize: width * 0.045,
    fontWeight: '300',
  },
  money: {
    fontSize: width * 0.05,
  },
});
