import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import globalStyles from '../constants/globalStyles';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';
import {GetPlayersFromTeams} from '../functions/function';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import PlayerItem from '../components/team/PlayerItem';
import {GetPlayerTopRatingWithPlayers} from '../functions/playerFunctions';
import Button from '../components/Button';

const width = Dimensions.get('screen').width;

export default function RatingScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const freePlayers: Player[] = useSelector(
    (state: RootState) => state.freePlayers,
  );
  const players: Player[] = [...GetPlayersFromTeams(teams), ...freePlayers];
  const sorted = [...players].sort(
    (a: Player, b: Player) =>
      GetPlayerTopRatingWithPlayers(b, players) -
      GetPlayerTopRatingWithPlayers(a, players),
  );

  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={text.Rating} action="back" />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={sorted.slice(0, showAll ? sorted.length : 20)}
        renderItem={(item: any) => (
          <PlayerItem
            item={item.item}
            index={item.index + 1}
            theme={themeColor}
            players={players}
            teamIcon={true}
            global={true}
          />
        )}
        ListFooterComponent={() => (
          <>
            {showAll ? (
              <></>
            ) : (
              <Button
                title={text.ShowMore}
                action={() => setShowAll(true)}
                buttonStyles={{
                  alignSelf: 'center',
                  backgroundColor: '#00000000',
                }}
              />
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
