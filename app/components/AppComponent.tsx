import {StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import {
  AvailableTransfer,
  Player,
  Team,
} from '../constants/interfaces/playerTeamInterfaces';
import {MMKV} from 'react-native-mmkv';
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';
import TournamentWinner, {
  NewSeason,
  PayPrizesTeams,
} from '../functions/tournamentFunctions';
import {updateTournaments} from '../redux/tournaments';
import {updateTeams} from '../redux/teams';

export const storage = new MMKV();

export default function AppComponent() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const availableTransfers: AvailableTransfer = useSelector(
    (state: RootState) => state.availableTransfers,
  );
  const freePlayers: Player[] = useSelector(
    (state: RootState) => state.freePlayers,
  );
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  const dispatch = useDispatch();

  function CheckTournaments() {
    if (
      tournaments.length &&
      tournaments.every((t: Tournament) => TournamentWinner(t))
    ) {
      dispatch(updateTournaments(NewSeason(tournaments)));
    }
    const unpaidTournament = tournaments.find(
      (t: Tournament) => TournamentWinner(t) && !t.prizesPaid,
    );
    if (unpaidTournament) {
      const teamsAfterPrizesPaid = PayPrizesTeams(
        unpaidTournament as Tournament,
        teams,
      );
      dispatch(updateTeams(teamsAfterPrizesPaid));
      dispatch(
        updateTournaments(
          tournaments.map((t: Tournament) => {
            if (
              t.name === unpaidTournament.name &&
              t.season === unpaidTournament.season
            ) {
              return {...t, prizesPaid: true};
            } else {
              return t;
            }
          }),
        ),
      );
    }
  }

  useEffect(() => {
    if (teams.length) {
      storage.set('teams', JSON.stringify(teams));
    }
  }, [teams]);

  useEffect(() => {
    if (freePlayers.length) {
      storage.set('freePlayers', JSON.stringify(freePlayers));
    }
  }, [freePlayers]);

  useEffect(() => {
    if (tournaments.length) {
      storage.set('tournaments', JSON.stringify(tournaments));
    }
    CheckTournaments();
  }, [tournaments]);

  useEffect(() => {
    if (availableTransfers.season && availableTransfers.players.length) {
      storage.set('availableTransfers', JSON.stringify(availableTransfers));
    }
  }, [availableTransfers]);

  return (
    <>
      <StatusBar
        barStyle={themeColor === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors[themeColor].bg}
      />
      <NavigationContainer
        theme={themeColor === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}
