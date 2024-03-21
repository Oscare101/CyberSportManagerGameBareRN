import {Dimensions, StyleSheet, View, useColorScheme} from 'react-native';
import React, {memo} from 'react';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import ShortInfoItem from './ShortInfoItem';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
} from '../../functions/function';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {GetPlayerSalaryYear} from '../../functions/playerFunctions';

const width = Dimensions.get('screen').width;

function ShortInfoBlock(props: {player: Player; action: any}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);

  const data = [
    {
      title: text.Role,
      value: props.player.stat.role,
      icon: 'role',
      action: () => {
        props.action('Role');
      },
    },
    {
      title: text.Status,
      value: props.player.status,
      icon: '',
      action: () => {
        props.action('Status');
      },
    },
    {
      title: text.Contract,
      value: `${GetMoneyAmountString(props.player.contract.salary)}`,
      icon: '',
      action: () => {
        props.action('Contract');
      },
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
