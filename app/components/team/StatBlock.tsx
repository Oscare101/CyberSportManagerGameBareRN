import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconName, Stat, Theme} from '../../constants/interfaces/iconInterfaces';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import Icon from '../icons/Icon';
import StatImage from '../icons/StatImage';
import {
  GetPlayerParameterRating,
  GetTopPlayerStat,
  GetTopStatColor,
} from '../../functions/function';
import rules from '../../constants/rules';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function StatBlock(props: {
  stat: number;
  better: 'less' | 'more';
  theme: Theme['value'];
  players: Player[];
  title: Stat['value'];
  full?: boolean;
}) {
  const stat = GetPlayerParameterRating(props.players, props.title, props.stat);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme][GetTopStatColor(stat)].bg,
          height: props.full ? width * 0.07 : width * 0.06,
          width: props.full ? (width * 0.92 - width * 0.07) / 6 : width * 0.06,
          marginLeft: props.full ? 0 : width * 0.01,
        },
      ]}>
      <StatImage
        stat={props.title}
        color={colors[props.theme][GetTopStatColor(stat)].main}
        size={props.full ? width * 0.05 : width * 0.06}
      />
      {props.full ? (
        <Text
          style={[
            styles.title,
            {color: colors[props.theme][GetTopStatColor(stat)].main},
          ]}>
          {props.stat.toFixed(2)}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: width * 0.01,
  },
  title: {fontSize: width * 0.03},
});
