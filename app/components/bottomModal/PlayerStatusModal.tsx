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

export default function PlayerStatusModal(props: {playerName: Player['name']}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const player: Player = myTeam.players.find(
    (p: Player) => p.name === props.playerName,
  ) as Player;
  const dispatch = useDispatch();

  const data: {
    title: string;
    status: Player['status'];
    icon: IconName['value'];
    active: boolean;
    comment: string;
  }[] = [
    {
      title: text.Active,
      status: 'active',
      comment:
        myTeam.players.find((p: Player) => p.name === props.playerName)
          ?.status === 'benched' &&
        myTeam.players.filter((p: Player) => p.status === 'active').length === 5
          ? `(${text.MainIsAlreadyFull})`
          : '',
      icon: 'controller',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)
          ?.status === 'active',
    },
    {
      title: text.Benched,
      status: 'benched',
      icon: 'bed',
      comment: '',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)
          ?.status === 'benched',
    },
  ];

  function SetPlayerStatusFunc(status: Player['status']) {
    if (
      status === 'active' &&
      myTeam.players.filter((p: Player) => p.status === 'active').length === 5
    ) {
      return false;
    }
    dispatch(
      updateTeams(SetPlayerStatus(teams, myTeam, props.playerName, status)),
    );
  }

  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {props.playerName}
      </Text>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            SetPlayerStatusFunc(item.status);
          }}
          style={[
            globalStyles.rowBetween,
            {
              width: '92%',
              marginVertical: width * 0.01,
              backgroundColor: item.active
                ? colors[themeColor].header1Bg
                : '#00000000',
              padding: width * 0.01,
              borderRadius: width * 0.02,
            },
          ]}
          key={index}>
          <Text
            style={[
              styles.dataTitle,
              {
                color: item.active
                  ? colors[themeColor].header1Main
                  : colors[themeColor].comment,
              },
            ]}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: width * 0.04,
              color: colors[themeColor].comment,
              flex: 1,
              marginLeft: width * 0.02,
            }}>
            {item.comment}
          </Text>
          <Icon
            icon={item.icon}
            color={
              item.active
                ? colors[themeColor].header1Main
                : colors[themeColor].comment
            }
            size={width * 0.07}
          />
        </TouchableOpacity>
      ))}
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.ActiveDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.BenchedDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.StatusChangeDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.IfMainIsFullChangeDescription}
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
