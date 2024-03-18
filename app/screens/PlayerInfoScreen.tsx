import {
  BackHandler,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import ShortInfoBlock from '../components/player/ShortInfoBlock';
import PlayerStatBlock from '../components/player/PlayerStatBlock';
import text from '../constants/text';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomModalBlock from '../components/bottomModal/BottomModalBlock';
import {Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';

const width = Dimensions.get('screen').width;

export default function PlayerInfoScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const player: Player = myTeam.players.find(
    (p: Player) => p.name === route.params.player.name,
  ) as Player;

  const [modalContent, setModalContent] = useState<{
    screen: 'Info' | 'Role';
    item: Stat['value'] | string;
  }>({screen: 'Info', item: 'reaction'});
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPointsInfo = useMemo(() => [width * 1.1], []);
  const snapPointsRole = useMemo(() => [width * 1.7, '100%'], []);

  const onPresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const onDismisModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    setModalOpened(!!(index + 1));
  }, []);

  const onModal = useCallback((value: 'Role') => {
    setModalContent({screen: value, item: player.name});
    onPresentModal();
  }, []);

  const statAction = useCallback((content: Stat['value']) => {
    setModalContent({screen: 'Info', item: content});
    onPresentModal();
  }, []);

  useEffect(() => {
    if (modalOpened) {
      const backAction = () => {
        onDismisModal();

        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }
  }, [modalOpened]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView
        style={[
          globalStyles.container,
          {backgroundColor: colors[themeColor].bg},
        ]}>
        <Header title={player.name} action="back" />
        <ShortInfoBlock player={player} action={onModal} />
        <View style={[globalStyles.rowBetween, {width: '92%'}]}>
          <Text style={[styles.comment, {color: colors[themeColor].main}]}>
            {text.Individuals}
          </Text>
        </View>
        <PlayerStatBlock player={player} action={statAction} />
      </SafeAreaView>
      <BottomModalBlock
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={
          modalContent.screen === 'Info' ? snapPointsInfo : snapPointsRole
        }
        onChange={handleSheetChanges}
        dismiss={onDismisModal}
        data={modalContent}
      />
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  comment: {
    fontSize: width * 0.05,
    marginVertical: width * 0.02,
  },
});
