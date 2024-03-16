import {Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';

const allStats: Stat['value'][] = [
  'reaction',
  'accuracy',
  'sprayControl',
  'flicksControl',
  'nades',
  'tactics',
];

export function NewTeamsDataAfterPlayersPractice(
  playerTeam: Team,
  teams: Team[],
) {
  const newMyTeamPlayersData = playerTeam.players.map((p: Player) => {
    const statToChange: Stat['value'] =
      allStats[Math.floor(Math.random() * allStats.length)];
    const newValue = +(
      p.stat[statToChange] +
      (statToChange === 'reaction'
        ? Math.random() * (-0.05 - 0.02) + 0.02
        : Math.random() * (0.05 + 0.02) - 0.02)
    ).toFixed(3);
    return {
      ...p,
      stat: {
        ...p.stat,
        [statToChange]:
          statToChange === 'reaction'
            ? newValue < 0.1
              ? 0.1
              : newValue
            : newValue > 1
            ? 1
            : newValue,
      },
    };
  });
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat({...playerTeam, players: newMyTeamPlayersData});
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

export function PracticePrice(team: Team) {
  const stat = GetTeamStatAverage(team);
  return +(stat ** 3).toFixed(3);
}
