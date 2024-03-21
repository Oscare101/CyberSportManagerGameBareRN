import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {
  AvailableTransfer,
  Player,
  Team,
} from '../constants/interfaces/playerTeamInterfaces';
import FreePlayerItem from '../components/transfer/FreePlayerItem';
import {GetPlayersFromTeams, GetPlayersToTransfer} from '../functions/function';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function TransferAgency({navigation}: any) {
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

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.TransferAgency} action="back" />
      <Text style={[styles.text, {color: colors[themeColor].main}]}>
        {text.AvailableTransfersDescription}
      </Text>
      {availableTransfers.players.length ? (
        <FlatList
          style={{width: '92%'}}
          numColumns={2}
          data={availableTransfers.players}
          renderItem={({item, index}: any) => (
            <FreePlayerItem
              item={item}
              index={index}
              theme={themeColor}
              players={GetPlayersFromTeams(teams)}
            />
          )}
        />
      ) : (
        <Text style={[styles.warning, {color: colors[themeColor].comment}]}>
          {text.NoAvalableTransfers}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: width * 0.04,
    width: '92%',
    marginVertical: width * 0.02,
  },
  warning: {
    fontSize: width * 0.06,
    marginTop: width * 0.1,
    width: '80%',
    textAlign: 'center',
    fontWeight: '500',
  },
});
