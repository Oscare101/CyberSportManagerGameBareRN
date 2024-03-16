import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Stat, Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {
  GetPlayerTopWithPlayers,
  GetTopPlayerStat,
  GetTopStatColor,
} from '../../functions/function';
import rules from '../../constants/rules';
import StatImage from '../icons/StatImage';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';

const width = Dimensions.get('screen').width;

export default function PlayerStatItem(props: {
  item: any;
  theme: Theme['value'];
  index: number;
  players: Player[];
}) {
  const stat = GetPlayerTopWithPlayers(
    props.players,
    props.item.icon,
    props.item.value,
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.item.action}
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme].card,
          marginRight: props.index % 2 ? 0 : width * 0.02,
        },
      ]}>
      <View style={globalStyles.rowBetween}>
        <StatImage
          stat={props.item.icon}
          color={colors[props.theme].main}
          size={width * 0.05}
        />
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {text[props.item.icon]}
        </Text>
        <Text style={[styles.value, {color: colors[props.theme].main}]}>
          {props.item.value}
          {props.item.icon === 'reaction' ? ' s' : ''}
        </Text>
      </View>
      <View
        style={[
          globalStyles.rowBetween,
          {height: width * 0.1, width: '100%', overflow: 'hidden'},
        ]}>
        <View
          style={{
            height: width * 0.02,
            width: '33%',
            backgroundColor:
              stat < 0.33
                ? colors[props.theme].red.bg
                : colors[props.theme].greys[0],
          }}
        />
        <View
          style={{
            height: width * 0.02,
            width: '35%',
            backgroundColor:
              stat >= 0.33 && stat <= 0.66
                ? colors[props.theme].yellow.bg
                : colors[props.theme].greys[1],
          }}
        />
        <View
          style={{
            height: width * 0.02,
            width: '33%',
            backgroundColor:
              stat > 0.66
                ? colors[props.theme].green.bg
                : colors[props.theme].greys[2],
          }}
        />
        <View
          style={[
            styles.pointer,
            {
              backgroundColor:
                // colors[props.theme][
                //   GetTopStatColor(stat > 1 ? 1 : stat < 0 ? 0 : stat)
                // ].main,
                stat < 0.33
                  ? colors[props.theme].red.main
                  : stat <= 0.66
                  ? colors[props.theme].yellow.main
                  : colors[props.theme].green.main,
              left:
                ((width * 0.9) / 2 - width * 0.06) *
                (stat > 1 ? 1 : stat < 0 ? 0 : stat),
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (width * 0.9) / 2,
    padding: width * 0.02,
    borderRadius: width * 0.02,
    marginVertical: width * 0.01,
  },
  title: {
    fontSize: width * 0.04,
    flex: 1,
    marginLeft: width * 0.01,
  },
  value: {
    fontSize: width * 0.035,
  },
  pointer: {width: width * 0.02, height: width * 0.07, position: 'absolute'},
});
