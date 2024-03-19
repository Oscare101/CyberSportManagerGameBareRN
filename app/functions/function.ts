import {Stat} from '../constants/interfaces/iconInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import {GetPlayerRating} from './playerFunctions';

export function GetMoneyAmount(money: number) {
  const grades = [
    {value: 10 ** 3, title: ' K'},
    {value: 10 ** 6, title: ' M'},
    {value: 10 ** 9, title: ' B'},
    {value: 10 ** 12, title: ' T'},
    {value: 10 ** 15, title: ' Q'},
    {value: 10 ** 18, title: ' Qn'},
    {value: 10 ** 21, title: ' S'},
  ];
  let moneyGrade: any = {};
  grades.forEach((g: any) => {
    if (money / g.value >= 1) {
      moneyGrade = {value: money / g.value, title: g.title};
    }
  });

  const result = {
    value: Math.floor(moneyGrade?.value || money)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    decimal: (moneyGrade?.value || money).toFixed(2).split('.')[1],
    title: moneyGrade?.title || '',
  };

  return result;
}

export function GetMoneyAmountString(money: number) {
  return `$ ${GetMoneyAmount(money).value}.${GetMoneyAmount(money).decimal}${
    GetMoneyAmount(money).title
  }`;
}

export function GetPlayersFromTeams(teams: Team[]) {
  let players: Player[] = [];
  teams.forEach(
    (team: any) =>
      (players = [
        ...players,
        ...team.players.map((p: Player) => {
          return {...p, team: team.name};
        }),
      ]),
  );
  return players;
}

export function SortPlayerByRoles(players: Player[]) {
  const capitans = players
    .filter((p: Player) => p.stat.role === 'capitan')
    .sort((a: Player, b: Player) => b.stat.tactics - a.stat.tactics);
  const snipers = players
    .filter((p: Player) => p.stat.role === 'sniper')
    .sort(
      (a: Player, b: Player) =>
        (b.stat.reaction * 2 + b.stat.accuracy + b.stat.flicksControl) / 4 -
        (a.stat.reaction * 2 + a.stat.accuracy + a.stat.flicksControl) / 4,
    );
  const riflers = players
    .filter((p: Player) => p.stat.role === 'rifler')
    .sort(
      (a: Player, b: Player) =>
        (b.stat.reaction * 2 +
          b.stat.accuracy +
          b.stat.flicksControl +
          b.stat.sprayControl) /
          5 -
        (a.stat.reaction * 2 +
          a.stat.accuracy +
          a.stat.flicksControl +
          a.stat.sprayControl) /
          5,
    );
  const supports = players
    .filter((p: Player) => p.stat.role === 'support')
    .sort((a: Player, b: Player) => b.stat.nades - a.stat.nades);
  return [...capitans, ...snipers, ...riflers, ...supports] as Player[];
}

export function SortPlayersByTeam(players: Player[]) {
  let arr: Player[] = [];
  players.forEach((i: any) => {
    arr.push(i);
  });

  const groupedByTeam = arr.reduce((acc: any, player: Player) => {
    const team = player.team as Team['name'];
    if (!acc[team]) {
      acc[team] = {players: [], totalRating: 0, count: 0};
    }
    acc[team].players.push(player);
    acc[team].totalRating += GetPlayerRating(player, players);
    acc[team].count += 1;

    return acc;
  }, {});

  const sortedTeams = Object.entries(groupedByTeam)
    .sort(([depA, dataA]: any, [depB, dataB]: any) => {
      const avgRatingA = dataA.totalRating / dataA.count;
      const avgRatingB = dataB.totalRating / dataB.count;
      return avgRatingA - avgRatingB;
    })
    .map(([team, data]: any) => ({
      team,
      players: data.players.sort(
        (a: any, b: any) =>
          GetPlayerRating(a, players) - GetPlayerRating(b, players),
      ),
    }));

  let sortedArr: any = [];

  sortedTeams.reverse().forEach((i: any) => {
    i.players.reverse().forEach((p: any) => {
      sortedArr.push(p);
    });
  });

  return sortedArr;
}

export function SortPlayersByStat(players: Player[]) {
  return [...players].sort(
    (a: Player, b: Player) =>
      GetPlayerRating(b, players) - GetPlayerRating(a, players),
  );
}

export function SortPlayersByRating(players: Player[]) {
  return players; // TODO
}

export function GetTopPlayerStat(max: number, min: number, value: number) {
  return (value - min) / (max - min);
}

export function GetTopStatColor(rating: number) {
  if (rating > 0.8) {
    return 'green';
  } else if (rating > 0.6) {
    return 'lightGreen';
  } else if (rating > 0.4) {
    return 'yellow';
  } else if (rating > 0.2) {
    return 'orange';
  } else {
    return 'red';
  }
}

export function GetPlayerParameterRating(
  players: Player[],
  parameter: Stat['value'],
  value: number,
) {
  const playersSorted: any = players.sort(
    (a: any, b: any) => b.stat[parameter] - a.stat[parameter],
  );

  const stat =
    parameter === 'reaction'
      ? 1 -
        GetTopPlayerStat(
          playersSorted[0].stat[parameter],
          playersSorted[playersSorted.length - 1].stat[parameter],
          value,
        )
      : GetTopPlayerStat(
          playersSorted[0].stat[parameter],
          playersSorted[playersSorted.length - 1].stat[parameter],
          value,
        );

  return stat;
}

export function IsEnoughtMoney(cash: number, price: number) {
  return cash >= price;
}
