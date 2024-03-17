import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import {GetPlayerSalaryYear} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
} from '../../functions/function';

const width = Dimensions.get('screen').width;

export default function PlayerContractModal(props: {
  playerName: Player['name'];
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const player: Player = myTeam.players.find(
    (p: Player) => p.name === props.playerName,
  ) as Player;
  const dispatch = useDispatch();

  const data: {title: string; value: string}[] = [
    {
      title: text.PlayerSalaryYear,
      value: GetMoneyAmountString(
        GetPlayerSalaryYear(GetPlayersFromTeams(teams), player),
      ),
    },
    {
      title: text.ContractEnds,
      value: `after ${player.contract.finish} season`,
    },
  ];

  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {props.playerName}
      </Text>
      <View style={[styles.card, {backgroundColor: colors[themeColor].bg}]}>
        {data.map((item: any, index: number) => (
          <View
            key={index}
            style={[
              globalStyles.rowBetween,
              {marginBottom: index ? 0 : width * 0.0},
            ]}>
            <Text style={[styles.dataTitle, {color: colors[themeColor].main}]}>
              {item.title}
            </Text>
            <Text style={[styles.dataValue, {color: colors[themeColor].main}]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.SalaryDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.ContractExtension}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.SalaryNotPaidDescription}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.08,
    textAlign: 'center',
    marginBottom: width * 0.03,
  },
  card: {
    width: '92%',
    borderRadius: width * 0.02,
    padding: width * 0.02,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataTitle: {
    fontSize: width * 0.05,
  },
  dataValue: {
    fontSize: width * 0.05,
  },
  text: {fontSize: width * 0.04, width: '92%', marginVertical: width * 0.02},
});
