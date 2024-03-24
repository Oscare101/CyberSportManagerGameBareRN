import guns from '../constants/gunsNades/guns';
import nades from '../constants/gunsNades/nades';
import {Gun} from '../constants/interfaces/gunInterfaces';
import {
  InRoundPlayer,
  MapResult,
} from '../constants/interfaces/matchInterfaces';
import {Nade} from '../constants/interfaces/nadeInterfaces';
import {Player, Team} from '../constants/interfaces/playerTeamInterfaces';
import rules from '../constants/rules';

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

export function CalculateSide(roundNumber: number) {
  const mainRounds = rules.MRsystem * 2;
  const overtimeRounds = rules.MRovertime * 2;

  const isMainRound = roundNumber <= mainRounds;

  if (isMainRound) {
    return (roundNumber <= mainRounds / 2 ? ['CT', 'T'] : ['T', 'CT']) as
      | ['CT', 'T']
      | ['T', 'CT'];
  } else {
    const extraRoundOffset =
      (roundNumber - mainRounds) % overtimeRounds || overtimeRounds;
    return (
      extraRoundOffset <= overtimeRounds / 2 ? ['CT', 'T'] : ['T', 'CT']
    ) as ['CT', 'T'] | ['T', 'CT'];
  }
}

export function PrepareTeam(team: Team, side: string) {
  const players: InRoundPlayer[] = team.players.map((player: Player) => {
    return {
      kills: 0,
      assist: 0,
      death: 0,
      totalDamage: 0,
      roundsWithKAST: [],
      alive: true,
      armor: false,
      cash: rules.defaultCash,
      gun: side === 'CT' ? rules.defaultGunCT : rules.defaultGunT,
      nades: [],
      health: 100,
      name: player.name,
      team: team.name,
      stat: {
        role: player.stat.role,
        reaction: player.stat.reaction,
        accuracy: player.stat.accuracy,
        sprayControl: player.stat.sprayControl,
        flicksControl: player.stat.flicksControl,
        nades: player.stat.nades,
        tactics: player.stat.tactics,
      },
    } as InRoundPlayer;
  });
  return players;
}

function GetNewNades(player: InRoundPlayer, cash: number) {
  interface newNadesInterface {
    newNades: string[];
    nadesPrice: number;
  }

  const shuffle = (array: Nade[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const avalableNades = Object.values(nades).filter(
    (nade: Nade) => !player.nades.includes(nade.name),
  );
  const randomAmount = Math.floor(Math.random() * (4 + 1));
  const nadesToBuy = shuffle(avalableNades).slice(0, randomAmount + 1);
  let nadesPrice: number = 0;
  let newNades: string[] = [];

  if (cash >= rules.cashNadesPurchaseSkip) {
    nadesToBuy.forEach((nade: Nade) => {
      if (cash - nadesPrice >= nade.price * 2) {
        newNades.push(nade.name);
        nadesPrice += nade.price;
      }
    });
  }

  return {
    newNades: [...player.nades, ...newNades],
    nadesPrice: nadesPrice,
  } as newNadesInterface;
}

function GetNewGun(player: InRoundPlayer, side: string, cash: number) {
  interface newGunInterface {
    newGun: Gun['name'];
    gunPrice: number;
  }
  let playerGun: Gun['name'] = player.gun;

  const availableGuns = Object.values(guns)
    .filter(
      (gun: Gun) =>
        gun.usedBy.split(' ').includes(side) &&
        gun.price <= cash &&
        ((player.stat.role === 'sniper' && gun.type === 'Sniper Rifle') ||
          (player.stat.role === 'rifler' && gun.type === 'Rifle') ||
          (player.stat.role === 'capitan' && gun.type === 'Rifle') ||
          (player.stat.role === 'support' &&
            gun.damagePerSecond > guns[playerGun].damagePerSecond &&
            gun.type === 'Rifle')),
    )
    .sort(
      (a: Gun, b: Gun) =>
        b.damage.withoutArmor.head - a.damage.withoutArmor.head,
    );
  const topGun =
    player.stat.role === 'sniper' && availableGuns.length
      ? availableGuns[0].name !== 'AWP'
        ? Math.random() > 0.5
          ? availableGuns[0]
          : false
        : availableGuns[0]
      : availableGuns[0];
  const chanceOfSkipBuy =
    cash < rules.cashToChanceOfSkipBuyGun && Math.random() > 0.5;

  if (
    availableGuns.length &&
    topGun &&
    cash >= topGun.price &&
    playerGun !== topGun.name &&
    (topGun.damage.withArmor.head > guns[playerGun].damage.withArmor.head ||
      (guns[player.gun].type === 'Pistol' && topGun.type !== 'Pistol')) &&
    !chanceOfSkipBuy
  ) {
    return {newGun: topGun.name, gunPrice: topGun.price} as newGunInterface;
  } else {
    return {newGun: playerGun, gunPrice: 0} as newGunInterface;
  }
}

function GetNewArmor(player: InRoundPlayer, cash: number) {
  interface newArmorInterface {
    newArmor: boolean;
    armorPrice: number;
  }

  const chanceOfBuyArmor =
    cash >= rules.armorCost * 3
      ? true
      : cash >= rules.armorCost * 2 && Math.random() > 0.5;

  if (chanceOfBuyArmor && !player.armor) {
    return {newArmor: true, armorPrice: rules.armorCost} as newArmorInterface;
  } else {
    return {newArmor: player.armor, armorPrice: 0} as newArmorInterface;
  }
}

export function BuyBeforeRound(team: InRoundPlayer[], side: 'CT' | 'T') {
  const alivePLayers = team.map((player: InRoundPlayer) => {
    let playerCash = player.cash;

    const {newArmor, armorPrice} = GetNewArmor(player, playerCash);
    playerCash -= armorPrice;
    const {newGun, gunPrice} = GetNewGun(player, side, playerCash);
    playerCash -= gunPrice;
    const {newNades, nadesPrice} = GetNewNades(player, playerCash);
    playerCash -= nadesPrice;

    return {
      ...player,
      cash: playerCash,
      gun: newGun,
      armor: newArmor,
      nades: newNades,
    };
  });
  return alivePLayers as InRoundPlayer[];
}

export function onlyUniqueRounds(value: any, index: any, array: any) {
  return array.indexOf(value) === index;
}

export function CalculateRating(player: InRoundPlayer, rounds: number) {
  const ADR = +(player.totalDamage / rounds).toFixed(2);
  const DPR = +(player.death / rounds).toFixed(2);
  const KPR = +(player.kills / rounds).toFixed(2);
  const APR = +(player.assist / rounds).toFixed(2);
  const KAST = +(
    (player.roundsWithKAST.filter(onlyUniqueRounds).length * 100) /
    rounds
  ).toFixed(1);
  const rating = +(
    (0.0073 * KAST) / 100 +
    (-0.5329 * DPR) / 3 +
    0.9 * KPR +
    APR +
    0.0032 * ADR
  ).toFixed(2);
  return {
    ADR: ADR,
    DPR: DPR,
    KPR: KPR,
    APR: APR,
    KAST: KAST,
    rating: rating,
  } as {
    ADR: number;
    DPR: number;
    KPR: number;
    APR: number;
    KAST: number;
    rating: number;
  };
}

export function PlayerSumStat(
  mapResults: MapResult[],
  teamNumber: number,
  playerName: string,
) {
  let playerStat: InRoundPlayer[] = [];
  let mapRounds: number[] = [];
  mapResults.forEach((map: MapResult) => {
    const mapPlayer: any = map[
      teamNumber === 1 ? 'team1Players' : 'team2Players'
    ].find((playerData: InRoundPlayer) => playerData.name === playerName);
    playerStat.push(mapPlayer);
    mapRounds.push(map.team1Score + map.team2Score);
  });

  const ADR = +(
    playerStat
      .map((stat: InRoundPlayer, index: number) => {
        return CalculateRating(stat, mapRounds[index]).ADR;
      })
      .reduce((sum: number, a: number) => sum + a, 0) / playerStat.length
  ).toFixed(1);

  const KAST = +(
    playerStat
      .map((stat: InRoundPlayer, index: number) => {
        return CalculateRating(stat, mapRounds[index]).KAST;
      })
      .reduce((sum: number, a: number) => sum + a, 0) / playerStat.length
  ).toFixed(1);

  const rating = +(
    playerStat
      .map((stat: InRoundPlayer, index: number) => {
        return CalculateRating(stat, mapRounds[index]).rating;
      })
      .reduce((sum: number, a: number) => sum + a, 0) / playerStat.length
  ).toFixed(2);

  const kills = playerStat.reduce(
    (sum: number, stat: InRoundPlayer) => sum + stat.kills,
    0,
  );

  const death = playerStat.reduce(
    (sum: number, stat: InRoundPlayer) => sum + stat.death,
    0,
  );

  return {
    ADR: ADR,
    KAST: KAST,
    rating: rating,
    kills: kills,
    death: death,
  } as {
    ADR: number;
    KAST: number;
    rating: number;
    kills: number;
    death: number;
  };
}
