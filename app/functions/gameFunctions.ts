import {MapResult} from '../constants/interfaces/matchInterfaces';

export function CalculateMapWonByTeam(mapWinners: string[], team: string) {
  const winAmount = mapWinners.filter((map: string) => map === team).length;

  return winAmount;
}

export function GetMapsWinners(mapsResults: MapResult[]) {
  const mapWinners = mapsResults.map((map: MapResult) => {
    return map.team1Score > map.team2Score
      ? map.team1Players[0].team
      : map.team2Players[0].team;
  });
  return mapWinners;
}

export function GetMatchWinner(newMapResults: MapResult[]) {
  if (newMapResults.length === 0) {
    return false;
  }
  if (
    CalculateMapWonByTeam(
      GetMapsWinners(newMapResults),
      newMapResults[0].team1Players[0].team,
    ) >
    CalculateMapWonByTeam(
      GetMapsWinners(newMapResults),
      newMapResults[0].team2Players[0].team,
    )
  ) {
    return newMapResults[0].team1Players[0].team;
  } else {
    return newMapResults[0].team2Players[0].team;
  }
}

export function GetMatchScoreByTeams(newMapResults: MapResult[]) {
  const result: any = {};
  result[`${newMapResults[0].team1Players[0].team}`] = CalculateMapWonByTeam(
    GetMapsWinners(newMapResults),
    newMapResults[0].team1Players[0].team,
  );

  result[`${newMapResults[0].team2Players[0].team}`] = CalculateMapWonByTeam(
    GetMapsWinners(newMapResults),
    newMapResults[0].team2Players[0].team,
  );
  return result;
}
