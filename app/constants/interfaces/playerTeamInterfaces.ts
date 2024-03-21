import {Role, Teams} from './iconInterfaces';
import {Tournament} from './tournamentInterfaces';

export interface PlayerStatistic {
  role: Role['value'];
  reaction: number; // 0 - inf
  accuracy: number; // 0 - 1
  sprayControl: number; // 0 - 1
  flicksControl: number; // 0 - 1
  nades: number; // 0 - 1
  // aggression: number; // 0 - 1
  tactics: number; // 0 - 1
  // stamina: number; // 0 - 1
}

export interface Status {
  value: 'active' | 'benched' | 'free';
}

export interface Player {
  name: string;
  team?: Team['name'];
  status: Status['value'];
  contract: {
    salary: number;
    start: number;
    finish: number;
  };
  stat: PlayerStatistic;
}

export interface Team {
  name: Teams['value'];
  yourTeam: boolean;
  bank: {
    cash: number;
  };
  ratingHistory: any[];
  players: Player[];
}

export interface SortByInterface {
  value: 'stat' | 'role' | 'rating' | 'team';
}

export interface AvailableTransfer {
  season: number;
  players: Player[];
}
