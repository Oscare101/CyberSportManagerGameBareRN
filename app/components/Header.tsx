import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header(props: {
  title: string;
  action: 'back' | 'none';
}) {
  return (
    <View style={[styles.header]}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
});
