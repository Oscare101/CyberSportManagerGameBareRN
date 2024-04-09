import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function TeamHeader(props: any) {
  const activeHeader = (
    <View
      style={[
        styles.teamBlock,
        {
          backgroundColor:
            props.teamSide === 'CT'
              ? colors[props.theme].CTSide
              : colors[props.theme].TSide,
        },
      ]}>
      <Text style={[styles.teamName, {color: colors[props.theme].card}]}>
        {props.teamName}
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        +
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        gun
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        nades
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        $
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        armor
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        K
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        A
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].card}]}>
        D
      </Text>
    </View>
  );

  const resultHeader = (
    <View
      style={[
        styles.teamBlock,
        {backgroundColor: colors[props.theme].comment},
      ]}>
      <Text style={[styles.teamName, {color: colors[props.theme].main}]}>
        {props.teamName}
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].main}]}>
        K-D
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].main}]}>
        +/-
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].main}]}>
        ADR
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].main}]}>
        KAST
      </Text>
      <Text style={[styles.teamStat, {color: colors[props.theme].main}]}>
        rating
      </Text>
    </View>
  );

  return <>{props.result ? resultHeader : activeHeader}</>;
}

const styles = StyleSheet.create({
  teamBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.07,
    paddingHorizontal: '2%',
    overflow: 'hidden',
    margin: width * 0.002,
    borderRadius: width * 0.01,
  },
  teamName: {width: '20%', color: '#fff', fontSize: width * 0.035},
  teamStat: {
    width: '10%',
    fontSize: width * 0.03,
    textAlign: 'center',
    color: '#fff',
    opacity: 0.8,
  },
});
