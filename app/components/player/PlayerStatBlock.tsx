import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import ShortInfoItem from './ShortInfoItem';
import {GetMoneyAmountString} from '../../functions/function';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import PlayerStatItem from './PlayerStatItem';

const width = Dimensions.get('screen').width;

function PlayerStatBlock(props: {player: Player}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const data = [
    {
      title: text.Reaction,
      value: props.player.stat.reaction,
      action: () => {},
    },
    {
      title: text.Accuracy,
      value: props.player.stat.accuracy,
      action: () => {},
    },
    {
      title: text.Flicks,
      value: props.player.stat.flicksControl,
      action: () => {},
    },
    {
      title: text.Spray,
      value: props.player.stat.sprayControl,
      action: () => {},
    },
    {
      title: text.Nades,
      value: props.player.stat.nades,
      action: () => {},
    },
    {
      title: text.Tactics,
      value: props.player.stat.tactics,
      action: () => {},
    },
    {
      title: text.Aggression,
      value: props.player.stat.aggression,
      action: () => {},
    },
    {
      title: text.Stamina,
      value: props.player.stat.stamina,
      action: () => {},
    },
  ];
  return (
    <FlatList
      style={{width: '92%'}}
      numColumns={2}
      data={data}
      renderItem={({item, index}) => (
        <PlayerStatItem item={item} index={index} theme={themeColor} />
      )}
    />
  );
}

export default memo(PlayerStatBlock);
