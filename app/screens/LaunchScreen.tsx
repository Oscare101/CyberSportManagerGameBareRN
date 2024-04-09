import {
  Dimensions,
  NativeModules,
  Platform,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import StatImage from '../components/icons/StatImage';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {updateTeams} from '../redux/teams';
import teamsDefault from '../constants/defaultValues/teams';
import {updateTournaments} from '../redux/tournaments';
import tournamentsDefault from '../constants/defaultValues/tournaments';
import {updateTheme} from '../redux/theme';
import {updateFreePlayers} from '../redux/freePlayers';
import freePlayersDefault from '../constants/defaultValues/freePlayers';
import {updateAvailableTransfers} from '../redux/availableTransfers';
import {
  AvailableTransfer,
  Player,
} from '../constants/interfaces/playerTeamInterfaces';
import {
  CurrentTournament,
  CurrentTournamentStage,
} from '../functions/tournamentFunctions';
import {GetPlayersToTransfer} from '../functions/function';
import {SetPlayersContractsInit} from '../functions/playerFunctions';
export const storage = new MMKV();

const width = Dimensions.get('screen').width;

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export default function LaunchScreen({navigation}: any) {
  const themeColor: any = useColorScheme();
  const dispatch = useDispatch();

  function GetStorage() {
    const teamsStorage = storage.getString('teams');
    if (teamsStorage && teamsStorage.length) {
      dispatch(updateTeams(JSON.parse(teamsStorage)));
    } else {
      dispatch(updateTeams(SetPlayersContractsInit(teamsDefault)));
    }

    let freePlayers: Player[];
    const freePlayersStorage = storage.getString('freePlayers');
    if (freePlayersStorage && freePlayersStorage.length) {
      dispatch(updateFreePlayers(JSON.parse(freePlayersStorage)));
      freePlayers = JSON.parse(freePlayersStorage);
    } else {
      dispatch(updateFreePlayers(freePlayersDefault));
      freePlayers = freePlayersDefault;
    }

    let season: number;
    const tournamentsStorage = storage.getString('tournaments');
    if (tournamentsStorage && tournamentsStorage.length) {
      dispatch(updateTournaments(JSON.parse(tournamentsStorage)));
      season =
        JSON.parse(tournamentsStorage)[
          JSON.parse(tournamentsStorage).length - 1
        ].season;
    } else {
      dispatch(updateTournaments(tournamentsDefault));
      season = tournamentsDefault[tournamentsDefault.length - 1].season;
    }

    const availableTransfersStorage = storage.getString('availableTransfers');
    if (
      availableTransfersStorage &&
      JSON.parse(availableTransfersStorage).season === season
    ) {
      dispatch(updateAvailableTransfers(JSON.parse(availableTransfersStorage)));
    } else {
      dispatch(
        updateAvailableTransfers({
          season: season,
          players: GetPlayersToTransfer(4, freePlayers),
        }),
      );
    }

    const themeStorage = storage.getString('theme');
    if (themeStorage && themeStorage.length) {
      dispatch(updateTheme(themeStorage));
      storage.set('theme', themeStorage);
    } else {
      dispatch(updateTheme('system'));
      storage.set('theme', 'system');
    }

    navigation.reset({
      index: 0,
      routes: [{name: 'MainScreen'}],
    });
  }

  useEffect(() => {
    GetStorage();
  }, []);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        globalStyles.center,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <StatImage
        stat="accuracy"
        size={width}
        color={themeColor === 'light' ? colors.dark.main : colors.light.main}
      />
    </SafeAreaView>
  );
}
