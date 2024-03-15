import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';
import text from '../../constants/text';

const width = Dimensions.get('screen').width;

export default function PageSelectorBlock(props: {
  page: 'players' | 'team';
  setPage: any;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setPage('players')}
        style={[styles.button]}>
        <View
          style={[
            styles.view,
            {
              backgroundColor:
                props.page === 'players' ? colors[themeColor].bg : '#00000000',
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                color:
                  props.page === 'players'
                    ? colors[themeColor].main
                    : colors[themeColor].comment,
              },
            ]}>
            {text.Players}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setPage('team')}
        style={[styles.button]}>
        <View
          style={[
            styles.view,
            {
              backgroundColor:
                props.page === 'team' ? colors[themeColor].bg : '#00000000',
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                color:
                  props.page === 'team'
                    ? colors[themeColor].main
                    : colors[themeColor].comment,
              },
            ]}>
            {text.Team}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.08,
    borderRadius: width * 0.02,
  },
  button: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.01,
  },
  view: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.01,
  },
  title: {
    fontSize: width * 0.04,
  },
});
