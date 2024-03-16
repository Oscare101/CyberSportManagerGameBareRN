import {Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import rules from '../constants/rules';

const allStatsToPractice: Stat['value'][] = ['nades', 'tactics'];

export function NewTeamsDataAfterPlayersPractice(
  playerTeam: Team,
  teams: Team[],
) {
  const newMyTeamPlayersData = playerTeam.players.map((p: Player) => {
    const statToChange: Stat['value'] =
      allStatsToPractice[Math.floor(Math.random() * allStatsToPractice.length)];
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
  return +(stat ** 2).toFixed(3);
}
