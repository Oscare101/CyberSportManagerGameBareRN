import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
}

export default function Card(props: CardProps) {
  const [open, setOpen] = useState<boolean>(false);
  const heightAnim = useRef(new Animated.Value(width * 0.12)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: open
        ? width * 0.14 + width * 0.08 * (props.data?.length || 0)
        : width * 0.12,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [open]);

  function RenderItem({item}: any) {
    return (
      <View style={[globalStyles.rowBetween, {height: width * 0.08}]}>
        <Text style={{fontSize: width * 0.04, color: colors[props.theme].main}}>
          {item.title}
        </Text>
        <Text style={{fontSize: width * 0.04, color: colors[props.theme].main}}>
          {item.value}
        </Text>
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.card,
        {backgroundColor: colors[props.theme].card, height: heightAnim},
      ]}>
      <TouchableOpacity
        disabled={!props.data?.length}
        activeOpacity={0.8}
        onPress={() => setOpen(!open)}
        style={[globalStyles.rowBetween, {height: width * 0.08}]}>
        <Text style={[styles.title, {color: colors[props.theme].main}]}>
          {props.title}
        </Text>
        {props.data?.length ? (
          <View style={styles.icon}>
            <Icon
              icon={open ? 'up' : 'down'}
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
      {props.data?.length ? (
        <>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors[props.theme].comment,
              marginTop: width * 0.02,
            }}
          />
          <FlatList data={props.data} renderItem={RenderItem} />
        </>
      ) : (
        <></>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    alignSelf: 'center',
    marginBottom: width * 0.02,
    overflow: 'hidden',
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
