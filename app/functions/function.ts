import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';

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
  teams.forEach((team: any) => (players = [...players, ...team.players]));

  return players;
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
