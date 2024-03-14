import {Guns, Nades, Teams} from './iconInterfaces';
import {Player, PlayerStatistic} from './playerTeamInterfaces';

export interface InRoundPlayer {
  kills: number;
  assist: number;
  death: number;
  alive: boolean;
  armor: boolean;
  cash: number;
  gun: Guns['value'];
  nades: Nades['value'][];
  health: number;
  name: Player['name'];
  team: Teams['value'];
  stat: PlayerStatistic;
  totalDamage: number;
  roundsWithKAST: number[];
}

export interface MapResult {
  team1Players: InRoundPlayer[];
  team2Players: InRoundPlayer[];
  team1Score: number;
  team2Score: number;
  roundWinLogs: string[];
}

export interface MatchResult {
  resultTeam1Players: InRoundPlayer[];
  resultTeam2Players: InRoundPlayer[];
  mapsResultsLog: MapResult[];
}
