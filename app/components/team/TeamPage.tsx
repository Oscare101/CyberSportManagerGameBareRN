import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Team, Trophy} from '../../constants/interfaces/playerTeamInterfaces';
import CupsImage from '../icons/CupsImage';
import globalStyles from '../../constants/globalStyles';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {useNavigation} from '@react-navigation/native';
import text from '../../constants/text';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

function TeamPage() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const navigation: any = useNavigation();

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;

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
        marginTop: width * 0.05,
      }}>
      <Text
        style={{
          fontSize: width * 0.04,
          color: colors[themeColor].comment,
          marginBottom: width * 0.02,
        }}>
        {text.TeamTrophies}
      </Text>
      {myTeam.trophies.length ? (
        <FlatList
          horizontal
          data={myTeam.trophies}
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
export default memo(TeamPage);
