import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import text from '../constants/text';

export default function TransferAgency({navigation}: any) {
  return (
    <SafeAreaView>
      <Header title={text.TransferAgency} action="back" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
