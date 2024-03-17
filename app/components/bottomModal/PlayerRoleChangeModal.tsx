import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import colors from '../../constants/colors';
import {Role, Stat} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import StatImage from '../icons/StatImage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import {
  NewTeamsDataAfterPlayersPractice,
  PracticePrice,
  SetNewPlayerRole,
} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {GetMoneyAmountString, IsEnoughtMoney} from '../../functions/function';
import Button from '../Button';
import {updateTeams} from '../../redux/teams';
import {useState} from 'react';
import RoleImage from '../icons/RoleImage';

const width = Dimensions.get('screen').width;

export default function PlayerRoleChangeModal(props: {
  playerName: Player['name'];
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const dispatch = useDispatch();

  const data: {title: string; role: Role['value']; active: boolean}[] = [
    {
      title: text.Capitan,
      role: 'capitan',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)?.stat
          .role === 'capitan',
    },
    {
      title: text.Sniper,
      role: 'sniper',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)?.stat
          .role === 'sniper',
    },
    {
      title: text.Rifler,
      role: 'rifler',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)?.stat
          .role === 'rifler',
    },
    {
      title: text.Support,
      role: 'support',
      active:
        myTeam.players.find((p: Player) => p.name === props.playerName)?.stat
          .role === 'support',
    },
  ];

  function SetNewPlayerRoleFunc(role: Role['value']) {
    dispatch(
      updateTeams(SetNewPlayerRole(teams, myTeam, props.playerName, role)),
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
            SetNewPlayerRoleFunc(item.role);
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
          <RoleImage
            role={item.role}
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
        {text.RoleDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.CapitanDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.SniperDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.RiflerDescription}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.SupportDescription}
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
  dataTitle: {
    fontSize: width * 0.05,
  },
  dataValue: {
    fontSize: width * 0.05,
  },
  text: {fontSize: width * 0.04, width: '92%', marginVertical: width * 0.02},
});
