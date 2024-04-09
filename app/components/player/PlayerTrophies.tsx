import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import colors from '../../constants/colors';
import text from '../../constants/text';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import globalStyles from '../../constants/globalStyles';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import CupsImage from '../icons/CupsImage';

const width = Dimensions.get('screen').width;

export default function PlayerTrophies(props: {player: Player}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const navigation: any = useNavigation();
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  function RenderTrophyItem({item}: any) {
    return (
      <TouchableOpacity
        style={[globalStyles.columnCenter]}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('TournamentScreen', {
            tournament: tournaments.find(
              (t: Tournament) =>
                t.name === item.tournament && t.season === item.season,
            ),
          });
        }}>
        <CupsImage
          cup={
            tournaments.find(
              (t: Tournament) =>
                t.name === item.tournament && t.season === item.season,
            )!.cup
          }
          size={width * 0.15}
        />
        <Text
          style={{
            fontSize: width * 0.04,
            color: colors[themeColor].main,
            fontWeight: '300',
          }}>
          {text.Season} {item.season}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors[themeColor].card,
        width: '92%',
        alignSelf: 'center',
        borderRadius: width * 0.02,
        padding: width * 0.02,
        marginTop: width * 0.02,
      }}>
      <Text
        style={{
          fontSize: width * 0.04,
          color: colors[themeColor].comment,
          marginBottom: width * 0.02,
        }}>
        {text.TeamTrophies}
      </Text>
      {props.player.trophies.length ? (
        <FlatList
          horizontal
          data={props.player.trophies}
          renderItem={RenderTrophyItem}
          ItemSeparatorComponent={() => <View style={{width: width * 0.03}} />}
        />
      ) : (
        <Text
          style={{
            fontSize: width * 0.035,
            color: colors[themeColor].main,
          }}>
          {text.NoTrophiesYet}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
