import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../constants/globalStyles';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import colors from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../icons/Icon';

const width = Dimensions.get('screen').width;

interface CardProps {
  title: string;
  value: string;
  theme: Theme['value'];
  data?: any[];
  toggle?: any;
}

export default function Card(props: CardProps) {
  return (
    <View style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <TouchableOpacity
        disabled={!props.data?.length}
        activeOpacity={0.8}
        onPress={props.toggle}
        style={globalStyles.rowBetween}>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.title}
        </Text>
        {props.data?.length ? (
          <View style={styles.icon}>
            <Icon
              icon="alertCircle"
              size={width * 0.05}
              color={colors[props.theme].main}
            />
          </View>
        ) : (
          <></>
        )}

        <View style={{flex: 1}} />
        <Text style={[styles.value, {color: colors[props.theme].main}]}>
          {props.value}
        </Text>
      </TouchableOpacity>
      {/* {props.data?.length ?
      
        <>
        
        </>
      : <></>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    alignSelf: 'center',
    marginBottom: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
  value: {
    fontSize: width * 0.05,
  },
  icon: {
    height: width * 0.06,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.02,
  },
});
