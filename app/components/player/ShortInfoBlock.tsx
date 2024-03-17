import {Dimensions, StyleSheet, View, useColorScheme} from 'react-native';
import React, {memo} from 'react';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import ShortInfoItem from './ShortInfoItem';
import {GetMoneyAmountString} from '../../functions/function';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

function ShortInfoBlock(props: {player: Player}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const data = [
    {
      title: text.Role,
      value: props.player.stat.role,
      icon: 'role',
      action: () => {},
    },
    {
      title: text.Contract,
      value: props.player.contract.finish,
      icon: '',
      action: () => {},
    },
    {
      title: text.Salary,
      value: `${GetMoneyAmountString(props.player.contract.salary)} / y`,
      icon: '',
      action: () => {},
    },
  ];
  return (
    <View
      style={[
        globalStyles.rowBetween,
        {width: '92%', marginTop: width * 0.02},
      ]}>
      {data.map((item: any, index: number) => (
        <ShortInfoItem
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          action={item.action}
          theme={themeColor}
        />
      ))}
    </View>
  );
}

export default memo(ShortInfoBlock);
