import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function CardsBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].greys[2]}]}>
        {title}
      </Text>
      <View style={styles.block}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
  },
  title: {
    fontSize: width * 0.05,
    marginVertical: width * 0.015,
  },
});
