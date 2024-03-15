import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';

const width = Dimensions.get('screen').width;

export default function VerticalMainCard({children}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: width * 0.015,
    borderRadius: width * 0.03,
    flex: 1,
  },
});
