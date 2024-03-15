import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import Icon from '../icons/Icon';
import {Theme} from '../../constants/interfaces/iconInterfaces';

const width = Dimensions.get('screen').width;

function RenderPreview(props: {theme: Theme['value']}) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme].bg,
          borderColor: colors[props.theme].comment,
          // position: 'absolute',
        },
      ]}>
      <View style={[globalStyles.rowBetween, {padding: width * 0.01}]}>
        <Icon icon="back" theme={props.theme} size={width * 0.02} />
        <View
          style={{
            width: width * 0.05,
            height: width * 0.004,
            backgroundColor: colors[props.theme].main,
          }}
        />
      </View>
      <View style={[styles.top, {backgroundColor: colors[props.theme].card}]}>
        <View
          style={[styles.bigCard, {backgroundColor: colors[props.theme].bg}]}
        />
        <View
          style={[
            globalStyles.rowBetween,
            {width: '80%', marginTop: width * 0.015},
          ]}>
          <View
            style={{
              width: '45%',
              aspectRatio: 1,
              backgroundColor: colors[props.theme].bg,
              borderRadius: width * 0.01,
            }}
          />
          <View
            style={{
              width: '45%',
              aspectRatio: 1,
              backgroundColor: colors[props.theme].bg,
              borderRadius: width * 0.01,
            }}
          />
        </View>
      </View>
      <View style={[styles.top]}>
        <View
          style={[styles.bigCard, {backgroundColor: colors[props.theme].card}]}
        />
        <View
          style={[
            styles.bigCard,
            {
              backgroundColor: colors[props.theme].accent,
              marginTop: width * 0.015,
            },
          ]}
        />
      </View>
    </View>
  );
}

export default function ThemePreview(props: {
  theme: string;
  action: any;
  themeColor: string;
  currentTheme: string;
}) {
  const theme = props.theme;
  return (
    <View style={globalStyles.columnCenter}>
      <View
        style={[
          globalStyles.columnCenter,
          {
            padding: width * 0.01,
            borderWidth: width * 0.005,
            borderColor:
              props.currentTheme === theme
                ? colors[props.themeColor].accent
                : '#00000000',
            borderRadius: width * 0.03,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={props.action}
          style={{width: width * 0.17, aspectRatio: 0.5}}>
          {props.theme === 'system' ? (
            <View
              style={{
                width: width * 0.17,
                aspectRatio: 0.5,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  alignItems: 'flex-start',
                }}>
                <RenderPreview theme={'light'} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  overflow: 'hidden',
                  alignItems: 'flex-end',
                }}>
                <RenderPreview theme={'dark'} />
              </View>
            </View>
          ) : (
            <RenderPreview theme={theme as Theme['value']} />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.title,
          {
            color:
              props.currentTheme === theme
                ? colors[props.themeColor].main
                : colors[props.themeColor].comment,
          },
        ]}>
        {props.theme}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.17,
    aspectRatio: 0.5,
    borderRadius: width * 0.02,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    height: '40%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCard: {
    width: '80%',
    height: width * 0.03,
    borderRadius: width * 0.01,
  },
  title: {
    fontSize: width * 0.04,
  },
});
