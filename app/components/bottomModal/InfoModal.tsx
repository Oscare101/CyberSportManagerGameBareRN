import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import colors from '../../constants/colors';
import {Stat} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import StatImage from '../icons/StatImage';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';

const width = Dimensions.get('screen').width;

export default function InfoModal(props: {date: Stat['value']}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <StatImage
        stat={props.date}
        color={colors[themeColor].main}
        size={width * 0.5}
      />
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {text[props.date]}
      </Text>

      <Text style={[styles.text, {color: colors[themeColor].main}]}>
        {text[`${props.date}Description`]}
      </Text>
      <Text style={[styles.text, {color: colors[themeColor].comment}]}>
        {text.ColoredStatRatingDescription}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.07,
    textAlign: 'center',
  },
  text: {width: '92%', fontSize: width * 0.05, textAlign: 'center'},
});
