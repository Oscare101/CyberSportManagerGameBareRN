import {Dimensions, FlatList, Text, View, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import TournamentWinner, {
  GetTeamsInPlaces,
} from '../../functions/tournamentFunctions';
import {GetMatchWinner} from '../../functions/gameFunctions';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import TeamImage from '../icons/TeamImage';
import {memo} from 'react';
import colors from '../../constants/colors';
import {RootState} from '../../redux';

const width = Dimensions.get('screen').width;

interface PrizesProps {
  tournament: Tournament;
}

function RenderPrizes(props: PrizesProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  function RenderPrizeItem(item: any) {
    return (
      <View
        style={{
          backgroundColor: colors[themeColor].card,
          width: (width * 0.92) / 2 - width * 0.02,
          marginLeft: item.index % 2 == 1 ? width * 0.04 : 0,
          marginTop: width * 0.04,
          padding: 10,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <Text style={{fontSize: width * 0.04, color: colors[themeColor].main}}>
          {item.index === 0
            ? '1st'
            : item.index === 1
            ? '2nd'
            : item.index >= 2 && item.index <= 3
            ? '3-4th'
            : item.index >= 4 && item.index <= 7
            ? '5-8th'
            : item.index >= 8 && item.index <= 15
            ? '9-16th'
            : ''}
        </Text>

        {GetTeamsInPlaces(props.tournament)[item.index] ? (
          <View style={{position: 'absolute', zIndex: -1, opacity: 0.15}}>
            <TeamImage
              team={GetTeamsInPlaces(props.tournament)[item.index]}
              size={width * 0.3}
            />
          </View>
        ) : (
          <></>
        )}

        <Text
          style={{
            fontSize: width * 0.05,
            fontWeight: '500',
            color: colors[themeColor].main,
          }}>
          {item.item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} $
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{width: '92%', marginBottom: 20, alignSelf: 'center'}}
      data={props.tournament.prizes}
      renderItem={RenderPrizeItem}
      numColumns={2}
      scrollEnabled={false}
    />
  );
}

export default memo(RenderPrizes);
