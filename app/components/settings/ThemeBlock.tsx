import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {RootState} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import text from '../../constants/text';
import globalStyles from '../../constants/globalStyles';
import ThemePreview from './ThemePreview';
import {updateTheme} from '../../redux/theme';
import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

const width = Dimensions.get('screen').width;

export default function ThemeBlock() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const dispatch = useDispatch();

  const themesData = ['light', 'dark', 'system'];

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {text.Theme}
      </Text>
      <View style={globalStyles.rowAround}>
        {themesData.map((item: string, index: number) => (
          <ThemePreview
            key={index}
            theme={item}
            action={() => {
              dispatch(updateTheme(item));
              storage.set('theme', item);
            }}
            themeColor={themeColor}
            currentTheme={theme}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    marginTop: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
    marginBottom: width * 0.02,
  },
});
