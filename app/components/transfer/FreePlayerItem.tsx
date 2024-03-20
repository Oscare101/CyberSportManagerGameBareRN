import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import StatBlock from '../team/StatBlock';
import {Stat} from '../../constants/interfaces/iconInterfaces';
import text from '../../constants/text';
import {GetPlayerSalaryYear} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {GetMoneyAmountString} from '../../functions/function';

const width = Dimensions.get('screen').width;

export default function FreePlayerItem(props: any) {
  const data: {
    title: Stat['value'];
    value: number;
    better: 'less' | 'more';
  }[] = [
    {
      title: 'reaction',
      value: props.item.stat.reaction,
      better: 'less',
    },
    {
      title: 'accuracy',
      value: props.item.stat.accuracy,
      better: 'more',
    },
    {
      title: 'flicksControl',
      value: props.item.stat.flicksControl,
      better: 'more',
    },
    {
      title: 'sprayControl',
      value: props.item.stat.sprayControl,
      better: 'less',
    },
    {
      title: 'nades',
      value: props.item.stat.nades,
      better: 'more',
    },
    {
      title: 'tactics',
      value: props.item.stat.tactics,
      better: 'more',
    },
  ];

  const contractData = [
    {
      title: text.Salary,
      value: GetMoneyAmountString(
        GetPlayerSalaryYear(props.players, props.item),
      ),
    },
  ];

  function ContractItem({item}: any) {
    return (
      <View style={[globalStyles.rowBetween, {marginVertical: width * 0.01}]}>
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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {}}
      style={[
        styles.button,
        {
          backgroundColor: colors[props.theme].card,
          marginLeft: props.index % 2 ? width * 0.02 : 0,
        },
      ]}>
      <Text style={[styles.name, {color: colors[props.theme].main}]}>
        {props.item.name}
      </Text>
      <FlatList data={contractData} renderItem={ContractItem} />

      <FlatList
        style={{width: '100%'}}
        numColumns={3}
        data={data}
        renderItem={({item, index}) => (
          <StatBlock
            full={true}
            stat={item.value}
            title={item.title}
            better="less"
            theme={props.theme}
            players={props.players}
            containerStyles={{
              width: ((width * 0.9) / 2 - width * 0.06) / 3,
              marginLeft: index % 3 ? width * 0.01 : 0,
              marginTop: width * 0.01,
            }}
          />
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.02,
    padding: width * 0.02,
    width: (width * 0.9) / 2,
    marginTop: width * 0.02,
  },
  name: {
    fontSize: width * 0.06,
  },
});
