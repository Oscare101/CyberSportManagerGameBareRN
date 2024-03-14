import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatImage from './app/components/icons/StatImage';
import CupsImage from './app/components/icons/CupsImage';
import TeamImage from './app/components/icons/TeamImage';
import GunImage from './app/components/icons/GunImage';
import NadeImage from './app/components/icons/NadeImage';
import ArmorImage from './app/components/icons/ArmorImage';

const {width, height} = Dimensions.get('screen');

export default function App() {
  return (
    <View>
      <Text>
        {width} * {height}
      </Text>
      <StatImage stat="tactic" theme="light" size={50} />
      <CupsImage cup="Crown" size={400} />
      <TeamImage team="Quazars" size={50} />
      <GunImage gun="SCAR-20" size={150} />
      <NadeImage nade="Incendiary Grenade" size={50} />
      <ArmorImage armor="kevlarHemlet" theme="light" size={50} />
    </View>
  );
}

const styles = StyleSheet.create({});
