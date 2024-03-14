import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardsBlock({children}: any) {
  return <View style={styles.block}>{children}</View>;
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
  },
});
