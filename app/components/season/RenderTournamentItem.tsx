import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import text from '../../constants/text';
import CupsImage from '../icons/CupsImage';
import {GetMoneyAmountString} from '../../functions/function';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import {
  CanStartTournament,
  IsTournamentActive,
} from '../../functions/tournamentFunctions';
import Icon from '../icons/Icon';

const width = Dimensions.get('screen').width;

export default function RenderTournamentItem(props: {
  item: any;
  theme: Theme['value'];
  teams: Team[];
  navigate: any;
  tournaments: Tournament[];
}) {
  const tournament: Tournament = props.item;
  const activeTournament: boolean = IsTournamentActive(tournament);
  const canStartTournament: boolean = CanStartTournament(
    props.tournaments,
    tournament,
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.navigate}
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <View style={globalStyles.rowBetween}>
        <Text style={[styles.name, {color: colors[props.theme].main}]}>
          {tournament.name}
        </Text>
        <Text style={[styles.season, {color: colors[props.theme].main}]}>
          {text.Season} {tournament.season}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: colors[props.theme].greys[0],
          marginVertical: width * 0.01,
        }}
      />
      <View
        style={[
          globalStyles.rowBetween,
          {width: '92%', paddingVertical: width * 0.01},
        ]}>
        <CupsImage cup={tournament.cup} size={width * 0.15} />
        <View style={[globalStyles.columnCenter, {width: '25%'}]}>
          <Text style={[styles.value, {color: colors[props.theme].main}]}>
            {GetMoneyAmountString(
              tournament.prizes.reduce((sum: number, p: number) => sum + p, 0),
            )}
          </Text>
          <Text style={[styles.comment, {color: colors[props.theme].greys[4]}]}>
            {text.Prize}
          </Text>
        </View>
        <View style={[globalStyles.columnCenter, {width: '25%'}]}>
          <Text style={[styles.value, {color: colors[props.theme].main}]}>
            {props.teams.length}
          </Text>
          <Text style={[styles.comment, {color: colors[props.theme].greys[4]}]}>
            {text.Teams}
          </Text>
        </View>
        {activeTournament ? (
          <View style={[globalStyles.columnCenter, {width: width * 0.1}]}>
            <Icon
              icon="controller"
              color={colors[props.theme].main}
              size={width * 0.07}
            />
          </View>
        ) : canStartTournament ? (
          <View
            style={[
              styles.startButton,
              {borderColor: colors[props.theme].main},
            ]}>
            <Text
              style={[styles.startButtonTitle, {color: colors[props.theme].m}]}>
              {text.Start}
            </Text>
          </View>
        ) : (
          <View style={[globalStyles.columnCenter, {width: width * 0.1}]}>
            <Text>+</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.02,
    padding: width * 0.02,
    marginBottom: width * 0.02,
  },
  name: {
    fontSize: width * 0.05,
  },
  season: {
    fontSize: width * 0.04,
    fontWeight: '300',
  },
  value: {fontSize: width * 0.04},
  comment: {
    fontSize: width * 0.04,
    fontWeight: '300',
  },
  startButton: {
    width: width * 0.1,
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonTitle: {
    fontSize: width * 0.03,
  },
});
