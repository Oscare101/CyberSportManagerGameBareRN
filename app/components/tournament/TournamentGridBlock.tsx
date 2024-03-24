import {Dimensions, ScrollView, Text, View, useColorScheme} from 'react-native';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {GetStageName} from '../../functions/tournamentFunctions';
import {MapResult} from '../../constants/interfaces/matchInterfaces';
import MatchPairBlock from './MatchPairBlock';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';

interface TournamentGridProps {
  tournament: Tournament;
}

const width = Dimensions.get('screen').width;

export default function TournamentGridBlock(props: TournamentGridProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  function OnMatchResults(
    mapResults: MapResult[],
    indexI: number,
    indexJ: number,
  ) {
    const newTournamentData = props.tournament.grid;
    newTournamentData[indexI][indexJ] = {
      ...newTournamentData[indexI][indexJ],
      mapResults: mapResults,
    };
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
          paddingLeft: width * 0.02,
        }}>
        {props.tournament.grid?.length ? (
          props.tournament.grid.map((grid: any, indexI: number) => (
            <View
              key={indexI}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: colors[themeColor].main,
                }}>
                {GetStageName(grid?.length)}
              </Text>
              {grid?.map((pair: any, indexJ: number) => (
                <MatchPairBlock
                  key={indexJ}
                  tournament={props.tournament}
                  indexI={indexI}
                  indexJ={indexJ}
                  team1={pair.team1}
                  team2={pair.team2}
                  bestOfMaps={3}
                  mapResults={pair.mapResults}
                  onSetModal={() => {}}
                  onMatchResults={(value: MapResult[]) => {
                    OnMatchResults(value, indexI, indexJ);
                  }}
                  theme={themeColor}
                />
              ))}
            </View>
          ))
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
}
