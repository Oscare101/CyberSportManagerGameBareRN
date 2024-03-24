import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {CalculateRating, PlayerSumStat} from '../../functions/gameFunctions';
import {
  InRoundPlayer,
  MapResult,
} from '../../constants/interfaces/matchInterfaces';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces/iconInterfaces';

const width = Dimensions.get('screen').width;

export default function RenderPlayerResults(
  player: InRoundPlayer,
  mapResults: MapResult[],
  teamNumber: number,
  theme: Theme['value'],
) {
  const {ADR, KAST, rating, kills, death} = PlayerSumStat(
    mapResults,
    teamNumber,
    player.name,
  );

  return (
    <View
      style={[
        styles.playerBlock,
        {
          backgroundColor: '#00000010',
        },
      ]}>
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.playerStat}>
        {kills}-{death}
      </Text>
      <Text
        style={[
          styles.playerStat,
          {
            color:
              kills > death
                ? colors.succesColor
                : kills < death
                ? colors.errorColor
                : '#000',
          },
        ]}>
        {kills > death ? '+' : ''}
        {kills - death}
      </Text>
      <Text style={styles.playerStat}>{ADR}</Text>
      <Text style={styles.playerStat}>{KAST} %</Text>
      <Text style={styles.playerStat}>{rating}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  playerBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.07,
    paddingHorizontal: '2%',
    overflow: 'hidden',
    margin: width * 0.002,
    borderRadius: width * 0.01,
  },
  playerName: {width: '20%'},
  healthBlock: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerStat: {
    width: '10%',
    fontSize: width * 0.03,
    textAlign: 'center',
  },
});
