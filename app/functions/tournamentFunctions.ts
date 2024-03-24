import {Team} from '../constants/interfaces/playerTeamInterfaces';
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import {GetMatchWinner} from './gameFunctions';

export function GetTournamentsBySeason(tournaments: Tournament[]) {
  const tArr: any = [];
  tournaments.map((t: any) => {
    if (!tArr.length) {
      tArr.push(t);
    } else {
      if (t.season !== tArr[0].season) {
        tArr.unshift(t);
      } else {
        tArr.splice(t.period - 1, 0, t);
      }
    }
  });
  return tArr;
}

// TODO maybe delete this one (you have ActiveTournaments)
export function OnlyCurrentSeason(tournaments: Tournament[]) {
  return tournaments.filter(
    (t: Tournament) => t.season === tournaments[tournaments.length - 1].season,
  );
}

export function ArchivedTournaments(tournaments: Tournament[]) {
  const currentSeason: number = tournaments[tournaments.length - 1].season;
  const archivedTournaments = tournaments.filter(
    (t: Tournament) => t.season !== currentSeason,
  );
  return archivedTournaments;
}

export function ActiveTournaments(tournaments: Tournament[]) {
  const currentSeason: number = tournaments[tournaments.length - 1].season;
  const activeTournaments = tournaments.filter(
    (t: Tournament) => t.season === currentSeason,
  );
  return activeTournaments;
}

export function CurrentPeriodTournament(tournaments: Tournament[]) {
  const current = tournaments.find(
    (t: Tournament) => t.grid.length && !TournamentWinner(t),
  );
  if (current) {
    return current;
  } else {
    const next = tournaments.find((t: Tournament) => t.grid.length);
    return next;
  }
}

export function CurrentTournamentStage(tournaments: Tournament[]) {
  const surrentSeason: Tournament[] = OnlyCurrentSeason(tournaments);
  for (let i = 1; i <= 7; i++) {
    const currentPeriod: Tournament[] = surrentSeason.filter(
      (t: Tournament) => t.period === i,
    );
    if (
      currentPeriod.every(
        (t: Tournament) =>
          !t.grid.length || (t.grid.length && !TournamentWinner(t)),
      )
    ) {
      return currentPeriod;
    }
  }
}

export function CurrentTournament(tournaments: Tournament[]) {
  const current = tournaments.filter(
    (t: Tournament) => !TournamentWinner(t),
  )[0];
  return current;
  // const current = tournaments.find(
  //   (t: Tournament) => t.grid.length && !TournamentWinner(t),
  // );
  // if (current) {
  //   return current;
  // } else {
  //   const next = tournaments.find((t: Tournament) => !t.grid.length);
  //   return next;
  // }
}

export function IsTournamentActive(tournament: Tournament) {
  return tournament.grid.length && !TournamentWinner(tournament);
}

export function CanStartTournament(
  tournaments: Tournament[],
  tournament: Tournament,
) {
  const currentTournamentIndex: number = tournaments.findIndex(
    (t: Tournament) =>
      t.name === tournament.name && t.season === tournament.season,
  );
  if (currentTournamentIndex === 0) {
    return true;
  } else {
    const previousTournamentGrid: any[] =
      tournaments[currentTournamentIndex - 1].grid || [];
    if (previousTournamentGrid.length) {
      const finished: boolean =
        previousTournamentGrid[previousTournamentGrid.length - 1][
          previousTournamentGrid[previousTournamentGrid.length - 1].length - 1
        ].mapResults.length !== 0;
      return finished;
    } else {
      return false;
    }
  }
}

export default function TournamentWinner(tournament: Tournament) {
  if (
    tournament.grid.length > 0 &&
    tournament.grid[tournament.grid.length - 1].length > 0 &&
    tournament.grid[tournament.grid.length - 1][
      tournament.grid[tournament.grid.length - 1].length - 1
    ].mapResults
  ) {
    return GetMatchWinner(
      tournament.grid[tournament.grid.length - 1][
        tournament.grid[tournament.grid.length - 1].length - 1
      ].mapResults,
    );
  } else {
    return false;
  }
}

export function ShuffleTeams(teamsArr: Team[]) {
  const shuffledArray = [...teamsArr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function MakeTournamentSingleEliminationGrid(teams: Team[]) {
  const teamAmount = teams.length;
  const shufffledTeams = ShuffleTeams(teams);

  const gridLevels = Math.log2(teamAmount);
  let gridArr: any = [];
  for (let i = 0; i < gridLevels; i++) {
    let levelArr = [];

    for (let j = 0; j < 2 ** (gridLevels - i) / 2; j++) {
      if (i === 0) {
        levelArr.push({
          team1: shufffledTeams[j * 2],
          team2: shufffledTeams[j * 2 + 1],
          mapResults: [],
        });
      } else {
        levelArr.push({team1: '', team2: '', mapResults: []});
      }
    }
    gridArr.push(levelArr);
  }

  return gridArr;
}

export function MakeSwissGrid(teams: any) {
  const teamAmount = teams.length;
  const shufffledTeams = ShuffleTeams(teams);

  let grid: any = [];

  for (let i = 0; i < 3; i++) {
    let column: any = [];
    for (let j = 0; j < 3; j++) {
      if (i === 0 && j === 0) {
        let pairs: any = [];
        for (let t = 0; t < teamAmount / 2; t++) {
          pairs.push({
            team1: shufffledTeams[t],
            team2: shufffledTeams[t + 1],
            mapResults: [],
          });
        }

        column.push({wins: i, losses: j, teams: [pairs]});
      } else {
        column.push({wins: i, losses: j, teams: []});
      }
    }
    grid.push(column);
  }
  return grid;
}

export function GetTeamsInPlaces(tournament: Tournament) {
  TournamentWinner(tournament);
  let teamsArr: any = TournamentWinner(tournament)
    ? [TournamentWinner(tournament)]
    : [''];
  if (tournament.grid) {
    for (let i = tournament.grid.length - 1; i >= 0; i--) {
      tournament.grid[i].forEach((pair: any) => {
        if (pair?.mapResults?.length) {
          teamsArr.push(
            GetMatchWinner(pair.mapResults) === pair.team1.name
              ? pair.team2.name
              : pair.team1.name,
          );
        } else {
          teamsArr.push('');
        }
      });
    }
    return teamsArr;
  } else {
    return [];
  }
}
