import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatImage from './components/icons/StatImage';

export default function App() {
  return (
    <View>
      <StatImage stat="spray" theme="light" size={50} />
    </View>
  );
}

const styles = StyleSheet.create({});
