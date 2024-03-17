import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import text from '../constants/text';
import Header from '../components/Header';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import PageSelectorBlock from '../components/team/PageSelectorBlock';
import PlayersPage from '../components/team/PlayersPage';
import TeamPage from '../components/team/TeamPage';
import Button from '../components/Button';
import {
  GetPlayerStatAverage,
  GetTeamStatAverage,
  NewTeamsDataAfterPlayersPractice,
  NewTeamsDataAfterStatChange,
  PracticePrice,
} from '../functions/playerFunctions';
import {updateTeams} from '../redux/teams';
import {GetMoneyAmountString, GetPlayersFromTeams} from '../functions/function';
import rules from '../constants/rules';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomModalBlock from '../components/bottomModal/BottomModalBlock';

const width = Dimensions.get('screen').width;

export default function MyTeamScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const dispatch = useDispatch();
  const [page, setPage] = useState<'players' | 'team'>('players');

  const [modalContent, setModalContent] = useState<'Practice'>('Practice');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [width * 0.9], []);
  const onPresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const onDismisModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  function StatChangeFunc() {
    dispatch(updateTeams(NewTeamsDataAfterStatChange(myTeam, teams)));
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView
        style={[
          globalStyles.container,
          {backgroundColor: colors[themeColor].bg},
        ]}>
        <Header title={myTeam.name} action="back" />
        <PageSelectorBlock
          page={page}
          setPage={(value: 'players' | 'team') => setPage(value)}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={page === 'players' ? {width: '100%', flex: 1} : styles.hide}>
          <PlayersPage />
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={page === 'team' ? {width: '100%', flex: 1} : styles.hide}>
          <TeamPage />
        </ScrollView>
        <Button title={text.Practice} action={onPresentModal} />
      </SafeAreaView>
      <BottomModalBlock
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        dismiss={onDismisModal}
        content={modalContent}
        data={{screen: modalContent}}
      />
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({hide: {display: 'none'}});
