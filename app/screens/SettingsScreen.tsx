import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';
import globalStyles from '../constants/globalStyles';

export default function SettingsScreen({navigation}: any) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={text.Settings} action="back" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
