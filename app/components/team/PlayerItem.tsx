import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import colors from '../../constants/colors';
import StatBlock from './StatBlock';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

export default function PlayerItem(props: {
  item: any;
  theme: Theme['value'];
  players: Player[];
}) {
  const player: Player = props.item;
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('PlayerInfoScreen', {player: player});
      }}
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <Text
        numberOfLines={1}
        style={[styles.name, {color: colors[props.theme].main}]}>
        {player.name}
      </Text>
      <Text
        numberOfLines={1}
        style={[styles.role, {color: colors[props.theme].comment}]}>
        {player.stat.role}
      </Text>
      <View style={{flex: 1}} />
      <StatBlock
        stat={player.stat.reaction}
        title="reaction"
        better="less"
        theme={props.theme}
        players={props.players}
      />
      <StatBlock
        stat={player.stat.accuracy}
        title="accuracy"
        better="more"
        theme={props.theme}
        players={props.players}
      />
      <StatBlock
        stat={player.stat.flicksControl}
        title="flick"
        better="more"
        theme={props.theme}
        players={props.players}
      />
      <StatBlock
        stat={player.stat.sprayControl}
        title="spray"
        better="more"
        theme={props.theme}
        players={props.players}
      />
      <StatBlock
        stat={player.stat.nades}
        title="nade"
        better="more"
        theme={props.theme}
        players={props.players}
      />
      <StatBlock
        stat={player.stat.tactics}
        title="tactic"
        better="more"
        theme={props.theme}
        players={props.players}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    alignSelf: 'center',
    height: width * 0.08,
    marginVertical: width * 0.01,
    borderRadius: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.01,
  },
  name: {
    width: '30%',
    fontSize: width * 0.04,
  },
  role: {
    width: '15%',
    fontSize: width * 0.035,
  },
});
