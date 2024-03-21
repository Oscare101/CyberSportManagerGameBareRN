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
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import {
  GetPlayerSalaryYear,
  SetPlayerStatus,
} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
} from '../../functions/function';
import {IconName} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import {updateTeams} from '../../redux/teams';

const width = Dimensions.get('screen').width;

export default function TransferModal(props: {player: Player}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;

  const dispatch = useDispatch();

  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {props.player.name}
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
