import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {
  CalculateMapWonByTeam,
  GetMapsWinners,
  NumberOfMap,
} from '../../functions/gameFunctions';
import {
  InRoundPlayer,
  MapResult,
} from '../../constants/interfaces/matchInterfaces';
import rules from '../../constants/rules';
import TeamImage from '../icons/TeamImage';
import colors from '../../constants/colors';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';

interface MatchHeaderProps {
  team1: InRoundPlayer[];
  team2: InRoundPlayer[];
  team1Score: number;
  team2Score: number;
  bestOfMaps: number;
  mapResults: MapResult[];
  team1Side: 'CT' | 'T';
  team2Side: 'CT' | 'T';
  isGameActive: boolean;
  overtimes: number;
}

const width = Dimensions.get('screen').width;

export default function MatchHeader(props: MatchHeaderProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <View style={styles.scoreHeader}>
      {props.isGameActive ? (
        <>
          <Text style={styles.comment}>
            best of {rules.MRsystem * 2 + props.overtimes * 2}
            {props.overtimes ? `(+${props.overtimes * 2})` : ''}
          </Text>
          <Text style={styles.mapPoints}>
            (
            {CalculateMapWonByTeam(
              GetMapsWinners(props.mapResults),
              props.team1[0].team,
            )}
            )
          </Text>
        </>
      ) : (
        <>
          <TeamImage team={props.team1[0].team} size={width * 0.1} />
        </>
      )}

      <Text style={styles.scoreTitle}>
        <Text
          style={{
            color: props.isGameActive
              ? props.team1Side === 'CT'
                ? colors.CTColor
                : colors.TColor
              : '#000',
          }}>
          {props.isGameActive
            ? props.team1Score
            : CalculateMapWonByTeam(
                GetMapsWinners(props.mapResults),
                props.team1[0].team,
              )}
        </Text>{' '}
        -{' '}
        <Text
          style={{
            color: props.isGameActive
              ? props.team2Side === 'CT'
                ? colors.CTColor
                : colors.TColor
              : '#000',
          }}>
          {props.isGameActive
            ? props.team2Score
            : CalculateMapWonByTeam(
                GetMapsWinners(props.mapResults),
                props.team2[0].team,
              )}
        </Text>
      </Text>
      {props.isGameActive ? (
        <>
          <Text style={styles.mapPoints}>
            (
            {CalculateMapWonByTeam(
              GetMapsWinners(props.mapResults),
              props.team2[0].team,
            )}
            )
          </Text>
          <Text style={[styles.comment, {textAlign: 'right'}]}>
            {NumberOfMap(
              props.mapResults.length + (props.isGameActive ? 1 : 0),
            )}{' '}
            map
          </Text>
        </>
      ) : (
        <>
          <TeamImage team={props.team2[0].team} size={width * 0.1} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scoreHeader: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: width * 0.12,
  },
  scoreTitle: {
    fontSize: width * 0.06,
    paddingHorizontal: '5%',
    fontWeight: '800',
  },
  comment: {
    fontSize: width * 0.03,
    flex: 1,
  },
  mapPoints: {
    fontSize: width * 0.04,
    opacity: 0.5,
  },
});
