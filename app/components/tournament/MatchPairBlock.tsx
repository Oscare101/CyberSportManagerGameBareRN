import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {
  GetMatchScoreByTeams,
  GetMatchWinner,
} from '../../functions/gameFunctions';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {MapResult} from '../../constants/interfaces/matchInterfaces';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import {useNavigation} from '@react-navigation/native';

interface MatchPairProps {
  team1: Team;
  team2: Team;
  indexI: number;
  indexJ: number;
  tournament: Tournament;
  bestOfMaps: number;
  mapResults: MapResult[];
  onSetModal: any;
  // onMatchResults: any;
  theme: Theme['value'];
}

const width = Dimensions.get('screen').width;

export default function MatchPairBlock(props: MatchPairProps) {
  const navigation: any = useNavigation();
  function PairTeam(pair: any) {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderLeftWidth: width * 0.01,
          borderLeftColor:
            GetMatchWinner(props.mapResults) === pair.team.name
              ? colors[props.theme].green.main
              : GetMatchWinner(props.mapResults) === pair.opponent.name
              ? colors[props.theme].red.main
              : '#00000000',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '4%',
        }}>
        <Text
          style={[
            {
              color:
                props.mapResults.length &&
                GetMatchWinner(props.mapResults) !== pair.team.name
                  ? colors[props.theme].comment
                  : colors[props.theme].main,
            },
          ]}>
          {props.mapResults.length
            ? GetMatchScoreByTeams(props.mapResults)[pair.team.name]
            : 0}{' '}
        </Text>
        <Text
          style={[
            {
              color:
                props.mapResults.length &&
                GetMatchWinner(props.mapResults) !== pair.team.name
                  ? colors[props.theme].comment
                  : colors[props.theme].main,

              flex: 1,
            },
          ]}
          numberOfLines={1}>
          {pair.team.name}
        </Text>
      </View>
    );
  }

  const accentPair: boolean =
    (props.team1.yourTeam || props.team2.yourTeam) &&
    props.mapResults.length === 0;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('MatchScreen', {
            team1: props.team1,
            team2: props.team2,
            bestOfMaps: props.bestOfMaps,
            mapResults: props.mapResults,
            tournament: props.tournament,
            indexI: props.indexI,
            indexJ: props.indexJ,
          });
        }}
        disabled={
          !(props.team1 && props.team2) ||
          !(
            props.team1.yourTeam ||
            props.team2.yourTeam ||
            props.mapResults.length
          )
        }
        style={{
          width: width * 0.3,
          height: width * 0.15,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: width * 0.01,
          overflow: 'hidden',
          backgroundColor: colors[props.theme].card,
          margin: width * 0.02,
          elevation: accentPair ? 5 : 1,
          borderWidth: 1,
          borderColor: accentPair
            ? colors[props.theme].main
            : colors[props.theme].greys[4],
          opacity:
            !(props.team1 && props.team2) ||
            !(
              props.team1.yourTeam ||
              props.team2.yourTeam ||
              props.mapResults.length
            )
              ? 0.5
              : 1,
        }}>
        <PairTeam team={props.team1} opponent={props.team2} />
        <PairTeam team={props.team2} opponent={props.team1} />
      </TouchableOpacity>
    </>
  );
}
