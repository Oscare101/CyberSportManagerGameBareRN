import {StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import {Team} from '../constants/interfaces/playerTeamInterfaces';
import {MMKV} from 'react-native-mmkv';
import {Tournament} from '../constants/interfaces/tournamentInterfaces';

export const storage = new MMKV();

export default function AppComponent() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  useEffect(() => {
    if (teams.length) {
      storage.set('teams', JSON.stringify(teams));
    }
  }, [teams]);

  useEffect(() => {
    if (tournaments.length) {
      storage.set('tournaments', JSON.stringify(tournaments));
    }
  }, [tournaments]);

  return (
    <>
      <StatusBar
        barStyle={themeColor === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors[themeColor].bg}
      />
    </>
  );
}
