import {Cup} from './iconInterfaces';
import {Team} from './playerTeamInterfaces';

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
  teams?: Team[];
}
