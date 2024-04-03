import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {PlayerSumStat} from '../../functions/gameFunctions';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import RenderPlayer from './RenderPlayer';
import {
  InRoundPlayer,
  MapResult,
} from '../../constants/interfaces/matchInterfaces';
import TeamHeader from './TeamHeader';
import RenderPlayerResults from './RenderPlayerResult';

interface teamBlockProps {
  team: InRoundPlayer[];
  rounds: number;
  isGameActive: boolean;
  teamSide: 'CT' | 'T';
  mapResults: MapResult[];
  teamNumber: number;
}

const width = Dimensions.get('screen').width;

export default function TeamBlock(props: teamBlockProps) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <View style={styles.teamColumn}>
      <TeamHeader
        teamName={props.team[0].team}
        teamSide={props.teamSide}
        result={!props.isGameActive && props.mapResults.length}
        theme={themeColor}
      />

      <FlatList
        scrollEnabled={false}
        data={
          !props.isGameActive && props.mapResults.length
            ? props.team.sort(
                (a: any, b: any) =>
                  PlayerSumStat(props.mapResults, props.teamNumber, b.name)
                    .rating -
                  PlayerSumStat(props.mapResults, props.teamNumber, a.name)
                    .rating,
              )
            : (props.team as InRoundPlayer[])
        }
        renderItem={({item}) =>
          !props.isGameActive && props.mapResults.length
            ? RenderPlayerResults(
                item,
                props.mapResults,
                props.teamNumber,
                themeColor,
              )
            : RenderPlayer(item, props.teamSide, themeColor)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  teamColumn: {
    flexDirection: 'column',
    width: '95%',
  },
  playerBlock: {
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
