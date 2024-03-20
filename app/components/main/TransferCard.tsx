import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {useNavigation} from '@react-navigation/native';
import text from '../../constants/text';
import Icon from '../icons/Icon';

const width = Dimensions.get('screen').width;

export default function TransferCard() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('TransferAgency');
      }}
      style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {text.TransferAgency}
      </Text>
      <Icon
        icon="personAdd"
        color={colors[themeColor].main}
        size={width * 0.05}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: width * 0.03,
    width: '60%',
    height: width * 0.15,
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: width * 0.05,
  },
});
