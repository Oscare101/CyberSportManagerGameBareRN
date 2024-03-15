import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces/iconInterfaces';

const width = Dimensions.get('screen').width;

export default function ShortInfoItem(props: {
  title: string;
  value: string;
  theme: Theme['value'];
  action: any;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.action}
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <Text style={[styles.title, {color: colors[props.theme].comment}]}>
        {props.title}
      </Text>
      <Text style={[styles.value, {color: colors[props.theme].main}]}>
        {props.value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    borderRadius: width * 0.02,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.01,
  },
  title: {
    fontSize: width * 0.04,
    marginBottom: width * 0.02,
  },
  value: {
    fontSize: width * 0.04,
  },
});
