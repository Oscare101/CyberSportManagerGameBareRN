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
import {IconName} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import babelConfig from '../../../babel.config';

const width = Dimensions.get('screen').width;

export default function SecondaryButtonCard(props: {
  title: string;
  icon: IconName['value'];
  action: any;
  iconViewNumber?: number;
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
      {props.iconViewNumber ? (
        <View
          style={[styles.circle, {backgroundColor: colors[themeColor].main}]}>
          <Text style={[styles.circleTitle, {color: colors[themeColor].bg}]}>
            {props.iconViewNumber}
          </Text>
        </View>
      ) : (
        <Icon
          icon={props.icon}
          size={width * 0.05}
          color={colors[themeColor].main}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: width * 0.015,
    paddingHorizontal: '7%',
    // width: (width * 0.86) / 2,
  },
  title: {
    fontSize: width * 0.04,
  },
  circle: {
    height: width * 0.05,
    minWidth: width * 0.05,
    paddingHorizontal: width * 0.005,
    borderRadius: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {fontSize: width * 0.03},
});
