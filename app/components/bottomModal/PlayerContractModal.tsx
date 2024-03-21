import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import {
  GetPlayerSalaryYear,
  TerminateContract,
} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
} from '../../functions/function';
import Button from '../Button';
import {useState} from 'react';
import {updateFreePlayers} from '../../redux/freePlayers';
import {useNavigation} from '@react-navigation/native';
import {updateTeams} from '../../redux/teams';

const width = Dimensions.get('screen').width;

export default function PlayerContractModal(props: {
  playerName: Player['name'];
}) {
  const navigation: any = useNavigation();
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const freePlayers: Player[] = useSelector(
    (state: RootState) => state.freePlayers,
  );

  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const player: Player = myTeam.players.find(
    (p: Player) => p.name === props.playerName,
  ) as Player;
  const dispatch = useDispatch();

  const [terminate, setTerminate] = useState<boolean>(false);

  const data: {title: string; value: string}[] = [
    {
      title: text.PlayerSalaryYear,
      value: GetMoneyAmountString(player?.contract.salary || 0),
    },
    {
      title: text.ContractEnds,
      value: `after ${player?.contract.finish} season`,
    },
  ];

  function TerminateContractFunc() {
    const teamsData: Team[] = TerminateContract(player, myTeam, teams);

    const freePlayersdata: Player[] = [
      ...freePlayers,
      {...player, contract: {salary: 0, start: 0, finish: 0}, status: 'free'},
    ];
    dispatch(updateTeams(teamsData));
    dispatch(updateFreePlayers(freePlayersdata));
    navigation.goBack();
  }

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
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.SellPlayerDescription}
      </Text>
      <View style={{flex: 1}} />
      <Button
        title={terminate ? text.ConfirmTermination : text.TerminateContract}
        action={() => {
          if (terminate) {
            TerminateContractFunc();
          } else {
            setTerminate(true);
          }
        }}
        buttonStyles={
          terminate ? {backgroundColor: colors[themeColor].red.bg} : {}
        }
        titleStyles={
          terminate
            ? {
                color: colors[themeColor].red.main,
                fontWeight: '300',
                fontSize: width * 0.06,
              }
            : {}
        }
      />
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
