import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {
  GetMatchScoreByTeams,
  GetMatchWinner,
} from '../../functions/gameFunctions';
import {useState} from 'react';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {MapResult} from '../../constants/interfaces/matchInterfaces';
import colors from '../../constants/colors';

interface MatchPairProps {
  team1: Team;
  team2: Team;
  indexI: number;
  indexJ: number;
  tournament: Tournament;
  bestOfMaps: number;
  mapResults: MapResult[];
  onSetModal: any;
  onMatchResults: any;
}

const width = Dimensions.get('screen').width;

export default function MatchPairBlock(props: MatchPairProps) {
  const [modal, setModal] = useState<boolean>(false);

  function PairTeam(pair: any) {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderLeftWidth: width * 0.01,
          borderLeftColor:
            GetMatchWinner(props.mapResults) === pair.team.name
              ? colors.succesColor
              : GetMatchWinner(props.mapResults) === pair.opponent.name
              ? colors.errorColor
              : '#00000000',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '4%',
        }}>
        <Text
          style={[
            {
              opacity:
                props.mapResults.length &&
                GetMatchWinner(props.mapResults) !== pair.team.name
                  ? 0.3
                  : 1,
            },
          ]}>
          {props.mapResults.length
            ? GetMatchScoreByTeams(props.mapResults)[pair.team.name]
            : 0}{' '}
        </Text>
        <Text
          style={[
            {
              opacity:
                props.mapResults.length &&
                GetMatchWinner(props.mapResults) !== pair.team.name
                  ? 0.3
                  : 1,
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
      {/* <MatchModal
        team1={props.team1}
        team2={props.team2}
        bestOfMaps={props.bestOfMaps}
        mapResults={props.mapResults}
        modal={modal}
        setModal={(value: boolean) => setModal(value)}
        tournament={props.tournament}
        indexI={props.indexI}
        indexJ={props.indexJ}
      /> */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setModal(true);
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
          backgroundColor: '#fff',
          margin: width * 0.02,
          elevation: accentPair ? 5 : 1,
          borderWidth: 1,
          borderColor: accentPair ? '#000' : '#eee',
        }}>
        <PairTeam team={props.team1} opponent={props.team2} />
        <PairTeam team={props.team2} opponent={props.team1} />
      </TouchableOpacity>
    </>
  );
}
