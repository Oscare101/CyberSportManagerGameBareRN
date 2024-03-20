import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';

export default function FinancesScreen() {
  return (
    <SafeAreaView>
      <Header title={text.Finances} action="back" />
      <Text>FinancesScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
