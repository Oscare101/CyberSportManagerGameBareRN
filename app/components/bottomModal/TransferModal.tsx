import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';
import {
  AvailableTransfer,
  Player,
  Team,
} from '../../constants/interfaces/playerTeamInterfaces';
import {
  BuyPlayer,
  GetPlayerSalaryYear,
  SetPlayerStatus,
} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
  IsEnoughtMoney,
} from '../../functions/function';
import {IconName} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import {updateTeams} from '../../redux/teams';
import Button from '../Button';
import {updateAvailableTransfers} from '../../redux/availableTransfers';
import {updateFreePlayers} from '../../redux/freePlayers';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {CurrentTournament} from '../../functions/tournamentFunctions';

const width = Dimensions.get('screen').width;

export default function TransferModal(props: {player: Player; dismiss: any}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  const availableTransfers: AvailableTransfer = useSelector(
    (state: RootState) => state.availableTransfers,
  );

  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const freePlayers: Player[] = useSelector(
    (state: RootState) => state.freePlayers,
  );

  const dispatch = useDispatch();

  const playerSalaryForSeason = GetPlayerSalaryYear(
    GetPlayersFromTeams(teams),
    props.player,
  );

  const data = [
    {
      title: text.SalaryForThisSeason,
      value: GetMoneyAmountString(playerSalaryForSeason),
    },
    {title: text.AvailableMoney, value: GetMoneyAmountString(myTeam.bank.cash)},
  ];

  function BuyPlayerFunc() {
    const teamsData: Team[] = BuyPlayer(
      props.player,
      playerSalaryForSeason,
      myTeam,
      teams,
      CurrentTournament(tournaments).season,
    );
    const freePlayersData: Player[] = freePlayers.filter(
      (p: Player) => p.name !== props.player.name,
    );
    const availableTransfersData: AvailableTransfer = {
      ...availableTransfers,
      players: availableTransfers.players.filter(
        (p: Player) => p.name !== props.player.name,
      ),
    };

    dispatch(updateTeams(teamsData));
    dispatch(updateFreePlayers(freePlayersData));
    dispatch(updateAvailableTransfers(availableTransfersData));
    props.dismiss();
  }

  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {props.player.name}
      </Text>
      {data.map((item: any, index: number) => (
        <View
          style={[
            globalStyles.rowBetween,
            {width: '92%', marginVertical: width * 0.01},
          ]}
          key={index}>
          <Text style={[styles.dataTitle, {color: colors[themeColor].main}]}>
            {item.title}
          </Text>
          <Text style={[styles.dataValue, {color: colors[themeColor].main}]}>
            {item.value}
          </Text>
        </View>
      ))}
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.BuyPlayerDescription}
      </Text>
      <View style={{flex: 1}} />
      <Button
        action={BuyPlayerFunc}
        disable={!IsEnoughtMoney(myTeam.bank.cash, playerSalaryForSeason)}
        buttonStyles={
          !IsEnoughtMoney(myTeam.bank.cash, playerSalaryForSeason)
            ? {backgroundColor: colors[themeColor].red.bg}
            : {}
        }
        titleStyles={
          !IsEnoughtMoney(myTeam.bank.cash, playerSalaryForSeason)
            ? {
                color: colors[themeColor].red.main,
                fontWeight: '300',
                fontSize: width * 0.06,
              }
            : {}
        }
        title={
          !IsEnoughtMoney(
            myTeam.bank.cash,
            GetPlayerSalaryYear(GetPlayersFromTeams(teams), props.player),
          )
            ? text.NotEnoughMoney
            : text.BuyPlayer
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
