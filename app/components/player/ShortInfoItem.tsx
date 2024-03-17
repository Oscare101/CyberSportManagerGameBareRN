import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Role, Theme} from '../../constants/interfaces/iconInterfaces';
import globalStyles from '../../constants/globalStyles';
import RoleImage from '../icons/RoleImage';

const width = Dimensions.get('screen').width;

export default function ShortInfoItem(props: {
  title: string;
  value: string;
  theme: Theme['value'];
  action: any;
  icon: string;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.action}
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <Text style={[styles.title, {color: colors[props.theme].comment}]}>
        {props.title}
      </Text>
      <View style={[globalStyles.rowCenter]}>
        {props.icon === 'role' ? (
          <RoleImage
            role={props.value as Role['value']}
            color={colors[props.theme].main}
            size={width * 0.05}
          />
        ) : (
          <></>
        )}
        <Text
          style={[
            styles.value,
            {
              color: colors[props.theme].main,
              marginLeft: props.icon === 'role' ? width * 0.02 : 0,
            },
          ]}>
          {props.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    borderRadius: width * 0.02,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.01,
  },
  title: {
    fontSize: width * 0.04,
    marginBottom: width * 0.02,
  },
  value: {
    fontSize: width * 0.04,
  },
});
