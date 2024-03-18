import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import PlayerItem from './PlayerItem';
import {GetPlayersFromTeams, SortPlayerByRoles} from '../../functions/function';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import Icon from '../icons/Icon';
import colors from '../../constants/colors';
import PlayerItemFull from './PlayerItemFull';

const width = Dimensions.get('screen').width;

function PlayersPage() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const allPlayers = GetPlayersFromTeams(teams);

  return (
    <>
      <View
        style={[
          globalStyles.rowBetween,
          {width: '92%', alignSelf: 'center', marginVertical: width * 0.02},
        ]}>
        <Icon
          icon="people"
          color={colors[themeColor].main}
          size={width * 0.07}
        />
        <Text style={[styles.title, {color: colors[themeColor].main}]}>
          {text.MainRoaster}
        </Text>
        {myTeam.players.filter((p: Player) => p.status === 'active').length !==
        5 ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[themeColor].red.bg,
              paddingHorizontal: width * 0.02,
              height: '100%',
              borderRadius: width * 0.02,
            }}>
            <Icon
              icon="alertCircle"
              color={colors[themeColor].red.main}
              size={width * 0.04}
            />
            <Text
              style={{
                fontSize: width * 0.04,
                color: colors[themeColor].red.main,
                marginLeft: width * 0.01,
              }}>
              {
                myTeam.players.filter((p: Player) => p.status === 'active')
                  .length
              }
              /5
            </Text>
          </View>
        ) : (
          <></>
        )}
        {/* <TouchableOpacity
          style={[styles.button, {backgroundColor: colors[themeColor].card}]}>
          <Text style={[styles.buttonTitle, {color: colors[themeColor].main}]}>
            {text.Open}
          </Text>
        </TouchableOpacity> */}
      </View>
      {myTeam.players.some((p: Player) => p.status === 'active') ? (
        <FlatList
          scrollEnabled={false}
          style={{width: '100%'}}
          data={SortPlayerByRoles(
            myTeam.players.filter((p: Player) => p.status === 'active'),
          )}
          renderItem={({item}) => (
            // <PlayerItem item={item} theme={themeColor} players={allPlayers} />
            <PlayerItemFull
              item={item}
              theme={themeColor}
              players={allPlayers}
            />
          )}
        />
      ) : (
        <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
          {text.NoActivePlayers}
        </Text>
      )}

      <View
        style={[
          globalStyles.rowBetween,
          {width: '92%', alignSelf: 'center', marginVertical: width * 0.02},
        ]}>
        <Icon
          icon="people"
          color={colors[themeColor].main}
          size={width * 0.07}
        />
        <Text style={[styles.title, {color: colors[themeColor].main}]}>
          {text.BenchedPlayers}
        </Text>
      </View>
      {myTeam.players.some((p: Player) => p.status === 'benched') ? (
        <FlatList
          scrollEnabled={false}
          style={{width: '100%'}}
          data={SortPlayerByRoles(
            myTeam.players.filter((p: Player) => p.status === 'benched'),
          )}
          renderItem={({item}) => (
            <PlayerItem item={item} theme={themeColor} players={allPlayers} />
          )}
        />
      ) : (
        <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
          {text.NoBenchedPlayersYet}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.05,
    flex: 1,
    marginLeft: width * 0.02,
  },
  button: {
    height: width * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.02,
  },
  buttonTitle: {fontSize: width * 0.035},
  comment: {
    fontSize: width * 0.05,
    textAlign: 'center',
  },
});
export default memo(PlayersPage);
