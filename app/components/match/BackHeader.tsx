import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import Icon from '../icons/Icon';
import colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

export default function BackHeader() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const navigation: any = useNavigation();
  return (
    <View style={styles.scoreHeader}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}>
        <Icon icon="back" color={colors[themeColor].main} size={width * 0.05} />
        <Text style={styles.title}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreHeader: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: width * 0.08,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.05,
    paddingLeft: '2%',
  },
});
