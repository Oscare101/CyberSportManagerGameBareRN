import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function SecondaryButtonCard(props: {
  title: string;
  icon: string;
  action: any;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.action}
      style={[styles.card, {backgroundColor: colors[themeColor].bg}]}>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: width * 0.015,
    paddingHorizontal: '7%',
  },
  title: {
    fontSize: width * 0.04,
  },
});
