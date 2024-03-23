import {Role, Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import rules from '../constants/rules';
import {GetPlayerParameterRating, GetPlayersFromTeams} from './function';

const statsToPractice: Stat['value'][] = ['nades', 'tactics'];
const allStats: Stat['value'][] = [
  'reaction',
  'accuracy',
  'flicksControl',
  'sprayControl',
  'nades',
  'tactics',
];

export function SetTeamsPlayersStatAfterPractice(
  playerTeam: Team,
  teams: Team[],
) {
  const newMyTeamPlayersData = playerTeam.players.map((p: Player) => {
    const statToChange: Stat['value'] =
      statsToPractice[Math.floor(Math.random() * statsToPractice.length)];
    const newValue = +(
      p.stat[statToChange] +
      Math.random() * (rules.statUp + rules.statDown) -
      rules.statDown
    ).toFixed(3);
    return {
      ...p,
      stat: {
        ...p.stat,
        [statToChange]: newValue > 1 ? 1 : newValue,
      },
    };
  });
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat({
      ...playerTeam,
      players: newMyTeamPlayersData,
      bank: {
        ...playerTeam.bank,
        cash: playerTeam.bank.cash - PracticePrice(playerTeam),
      },
    });
  return newTeamsData;
}

export function SetTeamsPlayersStatAfterChange(team: Team, teams: Team[]) {
  const newMyTeamPlayersData = team.players
    .filter((p: Player) => p.status === 'active')
    .map((p: Player) => {
      const statToChange: Stat['value'] =
        allStats[Math.floor(Math.random() * allStats.length)];
      const newValue = +(
        p.stat[statToChange] +
        (statToChange === 'reaction'
          ? Math.random() * (rules.rectionChange + rules.rectionChange) -
            rules.rectionChange
          : Math.random() * (rules.statChange + rules.statChange) -
            rules.statChange)
      ).toFixed(3);
      return {
        ...p,
        stat: {
          ...p.stat,
          [statToChange]:
            statToChange === 'reaction'
              ? newValue < rules.reactionCeil
                ? rules.reactionCeil
                : newValue
              : newValue > rules.statCeil
              ? rules.statCeil
              : newValue,
        },
      };
    });
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== team.name)
    .concat({
      ...team,
      players: newMyTeamPlayersData,
    });
  return newTeamsData;
}

export function GetTeamStatAverage(team: Team) {
  const stat =
    team.players.reduce(
      (sum: number, p: Player) =>
        sum +
        Object.values(p.stat)
          .filter((s: any) => Number(s))
          .reduce((a: number, s: any) => a + s, 0) /
          Object.values(p.stat).filter((s: any) => Number(s)).length,
      0,
    ) / team.players.length;
  return +stat.toFixed(3);
}

export function GetPlayerStatAverage(player: Player) {
  const stat =
    Object.values(player.stat)
      .filter((s: any) => Number(s))
      .reduce((a: number, s: any) => a + s, 0) /
    Object.values(player.stat).filter((s: any) => Number(s)).length;

  return +stat.toFixed(3);
}

export function PracticePrice(team: Team) {
  const stat = GetTeamStatAverage(team);
  return +(stat ** 2 * rules.practicePrice).toFixed(3);
}

export function SetPlayerRole(
  teams: Team[],
  playerTeam: Team,
  playerName: Player['name'],
  role: Role['value'],
) {
  const newMyTeamPlayersData: Team = {
    ...playerTeam,
    players: playerTeam.players.map((p: Player) => {
      if (p.name === playerName) {
        return {
          ...p,
          stat: {
            ...p.stat,
            role: role,
          },
        };
      } else {
        return {
          ...p,
        };
      }
    }),
  };
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat(newMyTeamPlayersData);
  return newTeamsData;
}

export function SetPlayerStatus(
  teams: Team[],
  playerTeam: Team,
  playerName: Player['name'],
  status: Player['status'],
) {
  const newMyTeamPlayersData: Team = {
    ...playerTeam,
    players: playerTeam.players.map((p: Player) => {
      if (p.name === playerName) {
        return {
          ...p,
          status: status,
        };
      } else {
        return {
          ...p,
        };
      }
    }),
  };
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat(newMyTeamPlayersData);
  return newTeamsData;
}

export function GetPlayerRating(player: Player, players: Player[]) {
  const averageRating =
    allStats.reduce(
      (sum: number, s: Stat['value']) =>
        sum + GetPlayerParameterRating(players, s, player.stat[s]),
      0,
    ) / allStats.length;
  return averageRating;
}

export function GetPlayerContractPrice(players: Player[], player: Player) {
  return Math.floor(
    rules.maxPlayerPrice * GetPlayerRating(player, players) ** 2,
  );
}

export function GetPlayerSalaryYear(players: Player[], player: Player) {
  return Math.floor(
    rules.mapPlayerSalary * 12 * GetPlayerRating(player, players) ** 3,
  );
}

export function BuyPlayer(
  player: Player,
  cost: number,
  playerTeam: Team,
  teams: Team[],
  season: number,
) {
  const myTeamData: Team = {
    ...playerTeam,
    players: [
      ...playerTeam.players,
      {
        ...player,
        status: 'benched',
        contract: {salary: cost, start: season, finish: season},
      },
    ],
    bank: {...playerTeam.bank, cash: playerTeam.bank.cash - cost},
  };

  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat(myTeamData);
  return newTeamsData;
}

export function SetPlayersContractsInit(teams: Team[]) {
  const teamsData = teams.map((team: Team) => {
    return {
      ...team,
      players: team.players.map((p: Player) => {
        return {
          ...p,
          contract: {
            salary: GetPlayerSalaryYear(GetPlayersFromTeams(teams), p),
            start: 1,
            finish: 1,
          },
        };
      }),
    };
  });
  return teamsData;
}

export function TerminateContract(
  player: Player,
  playerTeam: Team,
  teams: Team[],
) {
  const myTeamData: Team = {
    ...playerTeam,
    players: playerTeam.players.filter((p: Player) => p.name !== player.name),
  };
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat(myTeamData);
  return newTeamsData;
}

export function AutoSalary(teams: Team[], nextSeason: number) {
  const newTeamsData = teams.map((t: Team) => {
    const salaryCost = t.players.reduce(
      (sum: number, p: Player) => sum + p.contract.salary,
      0,
    );
    return {
      ...t,
      bank: {...t.bank, cash: t.bank.cash - salaryCost},
      players: t.players.map((p: Player) => {
        return {
          ...p,
          contract: {
            ...p.contract,
            start: nextSeason,
            finish: nextSeason,
            salary: p.contract.salary,
          },
        };
      }),
    };
  });
  return newTeamsData;
}
