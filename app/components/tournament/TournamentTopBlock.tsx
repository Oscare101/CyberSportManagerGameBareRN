import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import CupsImage from '../icons/CupsImage';
import colors from '../../constants/colors';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import {memo} from 'react';

const width = Dimensions.get('screen').width;

interface TournamentInfoProps {
  tournament: Tournament;
}

function TournamentTopBlock(props: TournamentInfoProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);

  return (
    <View style={styles.tournamentInfoBlock}>
      <View style={styles.cupImage}>
        <CupsImage cup={props.tournament.cup} size={width * 0.5} />
      </View>
      <View style={styles.tournamentInfoColumn}>
        <View style={styles.tournamentInfoStatBlock}>
          <Text
            style={[
              styles.tournamentInfoComment,
              {color: colors[themeColor].main},
            ]}>
            Prize pool
          </Text>
          <Text
            style={[
              styles.tournamentInfoStat,
              {color: colors[themeColor].main},
            ]}>
            ${' '}
            {props.tournament.prizes
              .reduce((a: number, b: number) => a + b, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </Text>
        </View>
        <View style={styles.tournamentInfoStatBlock}>
          <Text
            style={[
              styles.tournamentInfoComment,
              {color: colors[themeColor].main},
            ]}>
            Teams
          </Text>
          <Text
            style={[
              styles.tournamentInfoStat,
              {color: colors[themeColor].main},
            ]}>
            {teams.length}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentInfoBlock: {
    width: '100%',
    aspectRatio: 2,
    backgroundColor: '#eee',
    marginTop: width * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: width * 0.1,
  },
  tournamentInfoColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '50%',
    height: '100%',
  },
  cupImage: {position: 'absolute', left: width * 0.05, bottom: -width * 0.05},
  tournamentInfoStatBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tournamentInfoComment: {
    fontSize: width * 0.045,
    opacity: 0.8,
  },
  tournamentInfoStat: {
    fontSize: width * 0.06,
    fontWeight: '500',
  },
});

export default memo(TournamentTopBlock);
