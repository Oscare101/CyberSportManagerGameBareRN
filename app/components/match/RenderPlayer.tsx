import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import HealthBlock from './HealthBlock';
// import NadesBlock from './NadesBlock';
import {InRoundPlayer} from '../../constants/interfaces/matchInterfaces';
import GunImage from '../icons/GunImage';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function RenderPlayer(
  player: InRoundPlayer,
  teamSide: 'CT' | 'T',
  theme: Theme['value'],
) {
  return (
    <View
      style={[
        styles.playerBlock,
        {
          opacity: player.alive ? 0.8 : 0.4,
          backgroundColor:
            teamSide === 'CT' ? colors[theme].CTSide : colors[theme].TSide,
        },
      ]}>
      <Text style={[styles.playerName, {color: colors[theme].card}]}>
        {player.name}
      </Text>
      <View style={[styles.healthBlock]}>
        {/* <HealthBlock health={player.health} /> */}
      </View>
      <View style={{width: '10%'}}>
        {player.alive ? (
          <GunImage gun={player.gun} size={width * 0.05} />
        ) : (
          <></>
        )}
      </View>
      <View style={{width: '10%', height: '100%'}}>
        {/* <NadesBlock nades={player.nades} /> */}
      </View>
      <Text style={[styles.playerStat, {color: colors[theme].card}]}>
        {player.cash}
      </Text>
      <View
        style={{
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '50%',
            aspectRatio: 0.7,
            borderBottomRightRadius: 100,
            borderBottomLeftRadius: 100,
            backgroundColor: '#fff',
            opacity: player.armor && player.alive ? 0.9 : 0,
          }}
        />
      </View>
      <Text style={[styles.playerStat, {color: colors[theme].card}]}>
        {player.kills}
      </Text>
      <Text style={[styles.playerStat, {color: colors[theme].card}]}>
        {player.assist}
      </Text>
      <Text style={[styles.playerStat, {color: colors[theme].card}]}>
        {player.death}
      </Text>
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
