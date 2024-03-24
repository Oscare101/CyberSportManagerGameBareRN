import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {MapResult} from '../../constants/interfaces/matchInterfaces';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import RenderRoundWiner from './RenderRoundWinner';

const width = Dimensions.get('screen').width;

export default function RoundsLogBlock(props: {
  isGameActive: boolean;
  mapsResults: MapResult[];
  mapsResultsToShow: number;
  roundWinLogs: any;
  team1Name: Team['name'];
  team2Name: Team['name'];
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <FlatList
        style={{
          width: '100%',
          height: width / 12,
        }}
        horizontal
        initialNumToRender={
          !props.isGameActive && props.mapsResults.length
            ? props.mapsResults[props.mapsResultsToShow - 1]?.roundWinLogs
                .length || 0
            : props.roundWinLogs.length
        }
        data={
          !props.isGameActive && props.mapsResults.length
            ? props.mapsResults[props.mapsResultsToShow - 1]?.roundWinLogs || []
            : props.roundWinLogs
        }
        renderItem={({item, index}) =>
          RenderRoundWiner(
            item,
            index,
            !props.isGameActive && props.mapsResults.length
              ? props.mapsResults[props.mapsResultsToShow - 1]?.roundWinLogs ||
                  []
              : props.roundWinLogs,
            props.team1Name,
            props.team2Name,
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
