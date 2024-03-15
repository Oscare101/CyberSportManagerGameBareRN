import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {GetTopPlayerStat} from '../../functions/function';
import rules from '../../constants/rules';

const width = Dimensions.get('screen').width;

export default function PlayerStatItem(props: {
  item: any;
  theme: Theme['value'];
  index: number;
}) {
  const stat =
    props.item.title === text.Reaction
      ? GetTopPlayerStat(
          rules.reactionMargin - rules.reactionMax,
          rules.reactionMargin - rules.reactionMin,
          rules.reactionMargin - props.item.value,
        )
      : GetTopPlayerStat(rules.statMax, rules.statMin, props.item.value);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme].card,
          marginRight: props.index % 2 ? 0 : width * 0.02,
        },
      ]}>
      <View style={globalStyles.rowBetween}>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.item.title}
        </Text>
        <Text style={[styles.value, {color: colors[props.theme].main}]}>
          {props.item.value}
          {props.item.title === text.Reaction ? ' sec' : ''}
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
                stat < 0.33
                  ? colors[props.theme].red.main
                  : stat <= 0.66
                  ? colors[props.theme].yellow.main
                  : colors[props.theme].green.main,
              left: ((width * 0.9) / 2 - width * 0.06) * stat,
            },
          ]}
        />
      </View>
    </View>
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
  },
  value: {
    fontSize: width * 0.04,
  },
  pointer: {width: width * 0.02, height: width * 0.07, position: 'absolute'},
});
