import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {
  CanStartTournament,
  MakeTournamentSingleEliminationGrid,
} from '../../functions/tournamentFunctions';
import {RootState} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import text from '../../constants/text';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import {updateTournaments} from '../../redux/tournaments';

const width = Dimensions.get('screen').width;

export default function StartTournamentBlock(props: {tournament: Tournament}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const dispatch = useDispatch();

  function EveryTeamHas5Players() {
    return teams.every(
      (t: Team) =>
        t.players.filter((p: Player) => p.status === 'active').length === 5,
    );
  }

  function StartTournament() {
    if (EveryTeamHas5Players()) {
      const newTournamentsData: Tournament[] = tournaments.map(
        (t: Tournament) => {
          if (
            t.season === props.tournament.season &&
            t.period === props.tournament.period &&
            t.name === props.tournament.name
          ) {
            return {
              ...t,
              grid: MakeTournamentSingleEliminationGrid(teams),
            };
          } else {
            return t;
          }
        },
      );

      dispatch(updateTournaments(newTournamentsData));
    }
  }

  return CanStartTournament(tournaments, props.tournament) &&
    EveryTeamHas5Players() ? (
    <TouchableOpacity
      style={[
        styles.StartButton,
        {backgroundColor: colors[themeColor].header1Bg},
      ]}
      activeOpacity={0.8}
      onPress={StartTournament}>
      <Text
        style={{fontSize: width * 0.05, color: colors[themeColor].header1Main}}>
        Start the tournament
      </Text>
      <Text style={{fontSize: width * 0.04, color: colors[themeColor].comment}}>
        Prepare and shuffle teams
      </Text>
    </TouchableOpacity>
  ) : EveryTeamHas5Players() ? (
    <Text
      style={{
        fontSize: width * 0.04,
        color: colors[themeColor].main,
        textAlign: 'center',
        marginTop: width * 0.05,
      }}>
      {text.FinishPreviousTournament}
    </Text>
  ) : (
    <Text
      style={{
        fontSize: width * 0.04,
        color: colors[themeColor].main,
        textAlign: 'center',
        marginTop: width * 0.05,
        width: '92%',
        alignSelf: 'center',
      }}>
      {text.SomeTeamHasNot5Players}
    </Text>
  );
}

const styles = StyleSheet.create({
  StartButton: {
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: width * 0.02,
    padding: width * 0.02,
    marginTop: width * 0.05,
  },
});
