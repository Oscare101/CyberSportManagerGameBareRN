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

export function CurrentTournament(tournaments: Tournament[]) {
  const current = OnlyCurrentSeason(tournaments);
  const filtered = current.filter((c: Tournament) => c.grid.length);

  if (!filtered.length) return current[0] as Tournament;
  else {
    return filtered[filtered.length - 1] as Tournament;
  }
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
