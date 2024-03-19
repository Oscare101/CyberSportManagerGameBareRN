import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';
import text from '../../constants/text';
import {SortByInterface} from '../../constants/interfaces/playerTeamInterfaces';

const width = Dimensions.get('screen').width;

function PlayerSortByBlock(props: {
  sortBy: SortByInterface['value'];
  setSort: any;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const data: {title: string; value: SortByInterface['value']}[] = [
    {title: text.Statistic, value: 'stat'},
    {title: text.Rating, value: 'rating'},
    {title: text.Role, value: 'role'},
    {title: text.Team, value: 'team'},
  ];

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => props.setSort(item.value)}
          style={[styles.button]}>
          <View
            style={[
              styles.view,
              {
                backgroundColor:
                  props.sortBy === item.value
                    ? colors[themeColor].bg
                    : '#00000000',
              },
            ]}>
            <Text
              style={[
                styles.title,
                {
                  color:
                    props.sortBy === item.value
                      ? colors[themeColor].main
                      : colors[themeColor].comment,
                },
              ]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.08,
    borderRadius: width * 0.02,
    marginTop: width * 0.02,
  },
  button: {
    width: width * 0.92 * 0.25,
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

export default memo(PlayerSortByBlock);
