import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

export default function Button(props: {title: string; action: any}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.action}
      style={[styles.button, {backgroundColor: colors[themeColor].header1Bg}]}>
      <Text style={[styles.title, {color: colors[themeColor].header1Main}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '92%',
    height: width * 0.15,
    borderRadius: width * 0.02,
    marginBottom: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.07,
  },
});
