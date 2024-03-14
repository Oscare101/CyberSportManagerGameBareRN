import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatImage from './components/icons/StatImage';
import CupsImage from './components/icons/CupsImage';
import TeamImage from './components/icons/TeamImage';
import GunImage from './components/icons/GunImage';

export default function App() {
  return (
    <View>
      <StatImage stat="spray" theme="light" size={50} />
      <CupsImage cup="Prestige3" size={400} />
      <TeamImage team="Quazars" size={50} />
      <GunImage gun="SCAR-20" size={150} />
    </View>
  );
}

const styles = StyleSheet.create({});
