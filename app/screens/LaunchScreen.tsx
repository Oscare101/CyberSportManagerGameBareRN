import {
  Dimensions,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import StatImage from '../components/icons/StatImage';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {Theme} from '../constants/interfaces/iconInterfaces';
import text from '../constants/text';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {updateTeams} from '../redux/teams';
import teamsDefault from '../constants/defaultValues/teams';
import {updateTournaments} from '../redux/tournaments';
import tournamentsDefault from '../constants/defaultValues/tournaments';
import {updateTheme} from '../redux/theme';
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
      dispatch(updateTeams(teamsDefault));
    }

    const tournamentsStorage = storage.getString('tournaments');
    if (tournamentsStorage && tournamentsStorage.length) {
      dispatch(updateTournaments(JSON.parse(tournamentsStorage)));
    } else {
      dispatch(updateTournaments(tournamentsDefault));
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
        theme={themeColor === 'light' ? 'dark' : 'light'}
      />
    </SafeAreaView>
  );
}
