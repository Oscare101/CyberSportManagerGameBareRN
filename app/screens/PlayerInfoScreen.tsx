import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
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

const width = Dimensions.get('screen').width;

export default function PlayerInfoScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const [modalContent, setModalContent] = useState<Stat['value']>('reaction');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [width], []);
  const onPresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const onDismisModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView
        style={[
          globalStyles.container,
          {backgroundColor: colors[themeColor].bg},
        ]}>
        <Header title={route.params.player.name} action="back" />
        <ShortInfoBlock player={route.params.player} />
        <View style={[globalStyles.rowBetween, {width: '92%'}]}>
          <Text style={[styles.comment, {color: colors[themeColor].main}]}>
            {text.Individuals}
          </Text>
        </View>
        <PlayerStatBlock
          player={route.params.player}
          action={(content: Stat['value']) => {
            setModalContent(content);
            onPresentModal();
          }}
        />
      </SafeAreaView>
      <BottomModalBlock
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        dismiss={onDismisModal}
        content={modalContent}
        data={modalContent}
        // setData={(newDate: Date) => {
        //   setDate(newDate);
        //   SetDates(newDate);
        // }}
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
