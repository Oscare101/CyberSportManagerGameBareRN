import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('screen').width;

export default function CardsBlock({children}: any) {
  return <View style={styles.block}>{children}</View>;
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    marginTop: width * 0.015,
  },
});
