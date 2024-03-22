import {Cup} from './iconInterfaces';

export interface Tournament {
  season: number;
  name: string;
  prizes: number[];
  cup: Cup['value'];
  description: string;
  grid: any;
  points: number[];
  tier: 1 | 2;
  period: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}
