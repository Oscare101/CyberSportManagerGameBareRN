import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';

export default function PlayerItem() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <View>
      <Text>PlayerItem</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
