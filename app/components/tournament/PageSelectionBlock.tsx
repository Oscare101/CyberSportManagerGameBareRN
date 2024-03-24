import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';

const width = Dimensions.get('screen').width;

export default function PageSelectionBlock(props: {
  page: string;
  setPage: any;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const data = [
    {title: 'Grid', value: 'grid'},
    {title: 'Prize', value: 'prize'},
    {title: 'Ratings', value: 'rating'},
  ];

  function RenderButton({item}: any) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setPage(item.value)}
        style={[styles.button, {width: (width * 0.92) / data.length}]}>
        <View
          style={[
            styles.view,
            {
              backgroundColor:
                props.page === item.value ? colors[themeColor].bg : '#00000000',
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                color:
                  props.page === item.value
                    ? colors[themeColor].main
                    : colors[themeColor].comment,
              },
            ]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      {data.map((item: any, index: number) => (
        <RenderButton key={index} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.08,
    borderRadius: width * 0.02,
    marginTop: width * 0.02,
  },
  button: {
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
