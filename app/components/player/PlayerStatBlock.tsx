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
import {Player, Team} from '../../constants/interfaces/playerTeamInterfaces';
import ShortInfoItem from './ShortInfoItem';
import {
  GetMoneyAmountString,
  GetPlayersFromTeams,
} from '../../functions/function';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import PlayerStatItem from './PlayerStatItem';
import {Stat} from '../../constants/interfaces/iconInterfaces';

const width = Dimensions.get('screen').width;

function PlayerStatBlock(props: {player: Player}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const allPlayers = GetPlayersFromTeams(teams);

  const data: {
    title: string;
    icon: Stat['value'];
    value: number;
    action: any;
  }[] = [
    {
      title: text.Reaction,
      icon: 'reaction',
      value: props.player.stat.reaction,
      action: () => {},
    },
    {
      title: text.Accuracy,
      icon: 'accuracy',
      value: props.player.stat.accuracy,
      action: () => {},
    },
    {
      title: text.Flicks,
      icon: 'flicksControl',
      value: props.player.stat.flicksControl,
      action: () => {},
    },
    {
      title: text.Spray,
      icon: 'sprayControl',
      value: props.player.stat.sprayControl,
      action: () => {},
    },
    {
      title: text.Nades,
      icon: 'nades',
      value: props.player.stat.nades,
      action: () => {},
    },
    {
      title: text.Tactics,
      icon: 'tactics',
      value: props.player.stat.tactics,
      action: () => {},
    },
    {
      title: text.Aggression,
      icon: 'aggression',
      value: props.player.stat.aggression,
      action: () => {},
    },
    {
      title: text.Stamina,
      icon: 'stamina',
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
        <PlayerStatItem
          item={item}
          index={index}
          theme={themeColor}
          players={allPlayers}
        />
      )}
    />
  );
}

export default memo(PlayerStatBlock);
