import {Role, Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import rules from '../constants/rules';

const statsToPractice: Stat['value'][] = ['nades', 'tactics'];
const statsToChange: Stat['value'][] = [
  'reaction',
  'accuracy',
  'flicksControl',
  'sprayControl',
  'nades',
  'tactics',
];

export function NewTeamsDataAfterPlayersPractice(
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

export function NewTeamsDataAfterStatChange(playerTeam: Team, teams: Team[]) {
  const newMyTeamPlayersData = playerTeam.players
    .filter((p: Player) => p.status === 'active')
    .map((p: Player) => {
      const statToChange: Stat['value'] =
        statsToChange[Math.floor(Math.random() * statsToChange.length)];
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
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat({
      ...playerTeam,
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

export function SetNewPlayerRole(
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
