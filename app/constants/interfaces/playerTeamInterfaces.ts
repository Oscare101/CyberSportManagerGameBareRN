import {Role, Teams} from './iconInterfaces';
import {Tournament} from './tournamentInterfaces';

export interface PlayerStatistic {
  role: Role['value'];
  reaction: number;
  accuracy: number;
  sprayControl: number;
  flicksControl: number;
  nades: number;
  tactics: number;
}

export interface Status {
  value: 'active' | 'benched' | 'free';
}

export interface Player {
  name: string;
  team?: Team['name'];
  status: Status['value'];
  trophies: Trophy[];
  contract: {
    salary: number;
    start: number;
    finish: number;
  };
  stat: PlayerStatistic;
}

export interface Trophy {
  season: number;
  tournament: Tournament['name'];
}

export interface RatingHistory {
  season: number;
  tournament: Tournament['name'];
  place: number;
}

export interface Team {
  name: Teams['value'];
  yourTeam: boolean;
  bank: {
    cash: number;
  };
  ratingHistory: RatingHistory[];
  trophies: Trophy[];
  players: Player[];
}

export interface SortByInterface {
  value: 'stat' | 'role' | 'rating' | 'team';
}

export interface AvailableTransfer {
  season: number;
  players: Player[];
}
