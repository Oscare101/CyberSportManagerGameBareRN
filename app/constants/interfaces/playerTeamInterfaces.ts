import {Teams} from './iconInterfaces';

export interface PlayerStatistic {
  role: 'sniper' | 'rifler' | 'support' | 'capitan';
  reaction: number; // 0 - inf
  accuracy: number; // 0 - 1
  sprayControl: number; // 0 - 1
  flicksControl: number; // 0 - 1
  nades: number; // 0 - 1
  aggression: number; // 0 - 1
  tactics: number; // 0 - 1
  stamina: number; // 0 - 1
}

export interface Status {
  value: 'active' | 'benched' | 'free';
}

export interface Player {
  name: string;
  status: Status['value'];
  contract: {
    salary: number;
    start: string;
    finish: string;
  };
  stat: PlayerStatistic;
}

export interface Team {
  name: Teams['value'];
  yourTeam: boolean;
  players: Player[];
}
