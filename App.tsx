import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatImage from './components/icons/StatImage';
import CupsImage from './components/icons/CupsImage';

export default function App() {
  return (
    <View>
      <StatImage stat="spray" theme="light" size={50} />
      <CupsImage cup="GrandSlam" size={400} />
    </View>
  );
}

const styles = StyleSheet.create({});
