import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconName, Stat, Theme} from '../../constants/interfaces/iconInterfaces';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import Icon from '../icons/Icon';
import StatImage from '../icons/StatImage';
import {GetTopPlayerStat, GetTopStatColor} from '../../functions/function';
import rules from '../../constants/rules';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function StatBlock(props: {
  stat: number;
  better: 'less' | 'more';
  theme: Theme['value'];
  players: Player[];
  title: Stat['value'];
}) {
  const stat =
    props.title === 'reaction'
      ? GetTopPlayerStat(
          rules.reactionMargin - rules.reactionMax,
          rules.reactionMargin - rules.reactionMin,
          rules.reactionMargin - props.stat,
        )
      : GetTopPlayerStat(rules.statMax, rules.statMin, props.stat);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme][GetTopStatColor(stat)].bg,
        },
      ]}>
      <StatImage
        stat={props.title}
        color={colors[props.theme][GetTopStatColor(stat)].main}
        size={width * 0.06}
      />
      {/* <Text
        style={[
          styles.title,
          {color: colors[props.theme][GetTopStatColor(stat)].main},
        ]}>
        {props.stat.toFixed(2)}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.01,
    height: '100%',
    marginLeft: width * 0.01,
    aspectRatio: 1,
  },
  title: {fontSize: width * 0.03, fontWeight: '300'},
});
