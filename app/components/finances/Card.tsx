import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../constants/globalStyles';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

interface CardProps {
  title: string;
  value: string;
  theme: Theme['value'];
  data?: any[];
}

export default function Card(props: CardProps) {
  return (
    <View style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <View style={globalStyles.rowBetween}>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.title}
        </Text>
        <Text style={[styles.value, {color: colors[props.theme].main}]}>
          {props.value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    alignSelf: 'center',
    marginBottom: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
  value: {
    fontSize: width * 0.05,
  },
});
