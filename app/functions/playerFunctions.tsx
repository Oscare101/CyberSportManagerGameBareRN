import {Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';

const allStats: Stat['value'][] = [
  'reaction',
  'accuracy',
  'sprayControl',
  'flicksControl',
  'nades',
  'aggression',
  'tactics',
  'stamina',
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
      Math.random() * (0.05 + 0.02) -
      0.02
    ).toFixed(3);
    return {
      ...p,
      stat: {
        ...p.stat,
        [statToChange]: newValue > 1 ? 1 : newValue,
      },
    };
  });
  // const newPlayerData: Player = {
  //   ...player,
  //   stat: {
  //     ...player.stat,
  //     [statToChange]: +(
  //       player.stat[statToChange] +
  //       Math.random() * (0.02 + 0.02) -
  //       0.02
  //     ).toFixed(3),
  //   },
  // };
  // let newMyTeamPlayers: Player[] = playerTeam.players
  //   .filter((p: Player) => p.name !== player.name)
  //   .concat(newPlayerData);
  let newTeamsData: Team[] = teams
    .filter((t: Team) => t.name !== playerTeam.name)
    .concat({...playerTeam, players: newMyTeamPlayersData});
  return newTeamsData;
}
