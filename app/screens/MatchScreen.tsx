import {
  Alert,
  BackHandler,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  InRoundPlayer,
  MapResult,
} from '../constants/interfaces/matchInterfaces';
import colors from '../constants/colors';
import TeamBlock from '../components/match/TeamBlock';
import RenderRoundWiner from '../components/match/RenderRoundWinner';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {
  BuyBeforeRound,
  CalculateSide,
  PrepareTeam,
} from '../functions/gameFunctions';
import MatchStatPerMapBlock from '../components/match/MatchStatPerMapBlock';

const width = Dimensions.get('screen').width;

export default function MatchScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Попередження', 'Ви дійсно хочете вийти?', [
        {
          text: 'Скасувати',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Так', onPress: () => navigation.goBack()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [team1Players, setTeam1Players] = useState<InRoundPlayer[]>(
    PrepareTeam(route.params.team1, CalculateSide(1)[0]),
  );
  const [team2Players, setTeam2Players] = useState<InRoundPlayer[]>(
    PrepareTeam(route.params.team2, CalculateSide(1)[1]),
  );
  const [team1Score, setTeam1Score] = useState<number>(0);
  const [team2Score, setTeam2Score] = useState<number>(0);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [overtimeRounds, setOvertimeRounds] = useState<number>(0);
  const [lastUpdate, setLastUpdate] = useState<number>(0);
  const [team1Side, setTeam1Side] = useState<'CT' | 'T'>(CalculateSide(1)[0]);
  const [team2Side, setTeam2Side] = useState<'CT' | 'T'>(CalculateSide(1)[1]);
  const [roundWinLogs, setRoundWinLogs] = useState<string[]>([]);

  const [mapsResults, setMapsResults] = useState<MapResult[]>(
    route.params.mapResults,
  );
  const [mapsResultsToShow, setMapsResultsToShow] = useState<number>(0);

  function PrepareForMap() {
    setTeam1Players(
      BuyBeforeRound(
        PrepareTeam(route.params.team1, CalculateSide(1)[0]),
        team1Side,
      ),
    );
    setTeam2Players(
      BuyBeforeRound(
        PrepareTeam(route.params.team2, CalculateSide(1)[1]),
        team2Side,
      ),
    );
    setTeam1Score(0);
    setTeam2Score(0);
    setOvertimeRounds(0);
    setTeam1Side(CalculateSide(1)[0]);
    setTeam2Side(CalculateSide(1)[1]);
    setRoundWinLogs([]);
    setMapsResultsToShow(0);
  }

  // function Match() {
  //   function ActionBetweenTwoPlayers() {
  //     const team1PlayerExecute = GetRandomPlayersToExecute(team1Players);
  //     const team2PlayerExecute = GetRandomPlayersToExecute(team2Players);
  //     const player1NadeUsage = NadeUsage(team1PlayerExecute);
  //     const player2NadeUsage = NadeUsage(team2PlayerExecute);
  //     const [player1Health, player2Health] = Duel(
  //       team1PlayerExecute,
  //       team2PlayerExecute,
  //       player1NadeUsage,
  //       player2NadeUsage,
  //     );

  //     setTeam1Players(
  //       CalculatePlayersAfterDuel(
  //         team1Players,
  //         team1PlayerExecute,
  //         team2PlayerExecute,
  //         player1Health,
  //         player2Health,
  //         player1NadeUsage,
  //         team1Score + team2Score + 1,
  //         team1Side,
  //       ),
  //     );

  //     setTeam2Players(
  //       CalculatePlayersAfterDuel(
  //         team2Players,
  //         team2PlayerExecute,
  //         team1PlayerExecute,
  //         player2Health,
  //         player1Health,
  //         player2NadeUsage,
  //         team1Score + team2Score + 1,
  //         team2Side,
  //       ),
  //     );
  //   }

  //   function RoundAction() {
  //     if (TeamsAlive(team1Players, team2Players)) {
  //       ActionBetweenTwoPlayers();
  //     } else {
  //       setTeam1Side(CalculateSide(team1Score + team2Score + 2)[0]);
  //       setTeam2Side(CalculateSide(team1Score + team2Score + 2)[1]);

  //       if (TeamAlive(team1Players)) {
  //         setTeam1Score(team1Score + 1);
  //         setRoundWinLogs([...roundWinLogs, props.team1.name]);
  //       } else {
  //         setTeam2Score(team2Score + 1);
  //         setRoundWinLogs([...roundWinLogs, props.team2.name]);
  //       }

  //       const newTeam1Players = SetAlive(
  //         team1Players,
  //         team1Score + team2Score,
  //         !!TeamAlive(team1Players),
  //         IsSideChangeRound(team1Score + team2Score + 1),
  //         CalculateSide(team1Score + team2Score + 2)[0],
  //       );
  //       const newTeam1PlayersAfterBuy = BuyBeforeRound(
  //         newTeam1Players,
  //         CalculateSide(team1Score + team2Score + 2)[0],
  //       );
  //       setTeam1Players(newTeam1PlayersAfterBuy);
  //       const newTeam2Players = SetAlive(
  //         team2Players,
  //         team1Score + team2Score,
  //         !!TeamAlive(team2Players),
  //         IsSideChangeRound(team1Score + team2Score + 1),
  //         CalculateSide(team1Score + team2Score + 2)[1],
  //       );
  //       const newTeam2PlayersAfterBuy = BuyBeforeRound(
  //         newTeam2Players,
  //         CalculateSide(team1Score + team2Score + 2)[1],
  //       );
  //       setTeam2Players(newTeam2PlayersAfterBuy);
  //     }
  //   }

  //   if (
  //     team1Score < rules.MRsystem + overtimeRounds + 1 &&
  //     team2Score < rules.MRsystem + overtimeRounds + 1 &&
  //     team1Score + team2Score < (rules.MRsystem + overtimeRounds) * 2
  //   ) {
  //     RoundAction();
  //   } else {
  //     if (team1Score === team2Score) {
  //       setOvertimeRounds(overtimeRounds + rules.MRovertime);
  //     } else {
  //       const newMapResults: MapResult[] = [
  //         ...mapsResults,
  //         {
  //           team1Players: team1Players,
  //           team2Players: team2Players,
  //           team1Score: team1Score,
  //           team2Score: team2Score,
  //           roundWinLogs: roundWinLogs,
  //         },
  //       ];
  //       setMapsResults(newMapResults);
  //       if (IsMatchWinner(newMapResults, props.bestOfMaps)) {
  //         setIsGameActive(false);
  //       } else {
  //         PrepareForMap();
  //       }
  //     }
  //   }
  // }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (isGameActive) {
        // Match();
        setLastUpdate(new Date().getTime());
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [lastUpdate, isGameActive]);

  return (
    <View style={styles.container}>
      {/* {!isGameActive && !mapsResults.length ? (
        <BackHeader onBack={() => props.onBack()} />
      ) : (
        <MatchHeader
          team1={team1Players}
          team2={team2Players}
          team1Score={team1Score}
          team2Score={team2Score}
          bestOfMaps={props.bestOfMaps}
          mapResults={mapsResults}
          team1Side={team1Side}
          team2Side={team2Side}
          isGameActive={isGameActive}
          overtimes={overtimeRounds}
        />
      )} */}

      {!isGameActive && mapsResults.length ? (
        <MatchStatPerMapBlock
          mapsResults={mapsResults}
          mapsResultsToShow={mapsResultsToShow}
          setMapsResultsToShow={(value: number) => setMapsResultsToShow(value)}
        />
      ) : (
        <></>
      )}

      <View style={styles.teamColumnsBlock}>
        <TeamBlock
          team={team1Players}
          rounds={team1Score + team2Score}
          isGameActive={isGameActive}
          teamSide={team1Side}
          mapResults={
            !isGameActive && mapsResults.length
              ? mapsResultsToShow
                ? [mapsResults[mapsResultsToShow - 1]]
                : mapsResults
              : []
          }
          teamNumber={1}
        />
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
              !isGameActive && mapsResults.length
                ? mapsResults[mapsResultsToShow - 1]?.roundWinLogs.length || 0
                : roundWinLogs.length
            }
            data={
              !isGameActive && mapsResults.length
                ? mapsResults[mapsResultsToShow - 1]?.roundWinLogs || []
                : roundWinLogs
            }
            renderItem={({item, index}) =>
              RenderRoundWiner(
                item,
                index,
                !isGameActive && mapsResults.length
                  ? mapsResults[mapsResultsToShow - 1]?.roundWinLogs || []
                  : roundWinLogs,
                route.params.team1.name,
                route.params.team2.name,
              )
            }
          />
        </View>
        <TeamBlock
          team={team2Players}
          rounds={team1Score + team2Score}
          isGameActive={isGameActive}
          teamSide={team2Side}
          mapResults={
            !isGameActive && mapsResults.length && mapsResultsToShow
              ? [mapsResults[mapsResultsToShow - 1]]
              : mapsResults
          }
          teamNumber={2}
        />
      </View>
      <View style={{flex: 1}} />
      {isGameActive ? (
        <>
          <TouchableOpacity
            onPress={() => {
              // const mapsResultsLog = InstantMatchResults({
              //   team1: team1Players,
              //   team2: team2Players,
              //   score1: team1Score,
              //   score2: team2Score,
              //   overtimes: overtimeRounds,
              //   team1Sideplay: team1Side,
              //   team2Sideplay: team2Side,
              //   winLogs: roundWinLogs,
              //   mapsResultsLog: mapsResults,
              //   bestOfMaps: route.params.bestOfMaps,
              // });
              // setMapsResults(mapsResultsLog);
              // setIsGameActive(false);
            }}
            activeOpacity={0.8}
            style={styles.skipButton}>
            <Text style={styles.skipTitle}>Skip to results {'>>>'}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {mapsResults.length ? (
            <TouchableOpacity
              onPress={() => {
                // props.onMatchResults(mapsResults);
              }}
              activeOpacity={0.8}
              style={[
                styles.skipButton,
                {borderColor: colors[themeColor].CTSide},
              ]}>
              <Text
                style={[styles.skipTitle, {color: colors[themeColor].TSide}]}>
                Back
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setMapsResults([]);
                PrepareForMap();

                setIsGameActive(true);
              }}
              activeOpacity={0.8}
              style={[
                styles.skipButton,
                {borderColor: colors[themeColor].CTSide},
              ]}>
              <Text
                style={[styles.skipTitle, {color: colors[themeColor].TSide}]}>
                Start the match
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E5E5E5',
    width: '100%',
  },
  scoreHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamColumnsBlock: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  skipButton: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
    borderRadius: width * 0.02,
    backgroundColor: '#fff',
    marginBottom: width * 0.05,
    borderWidth: 2,
    borderColor: colors.CTColor,
  },
  skipTitle: {
    fontSize: width * 0.05,
    color: colors.CTColor,
  },
});
