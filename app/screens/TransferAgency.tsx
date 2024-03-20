import {
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
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import FreePlayerItem from '../components/transfer/FreePlayerItem';
import {GetPlayersFromTeams, GetPlayersToTransfer} from '../functions/function';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';

export default function TransferAgency({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);

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
      <FlatList
        style={{width: '92%'}}
        numColumns={2}
        data={GetPlayersToTransfer(4, freePlayers)}
        renderItem={({item, index}: any) => (
          <FreePlayerItem
            item={item}
            index={index}
            theme={themeColor}
            players={GetPlayersFromTeams(teams)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
