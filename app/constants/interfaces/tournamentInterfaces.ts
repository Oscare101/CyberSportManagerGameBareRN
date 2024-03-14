import {Cup} from './iconInterfaces';

export interface Tournament {
  season: number;
  name: string;
  prizes: number[];
  cup: Cup['value'];
  description: string;
  grid: any;
  points: number[];
  period: number;
}
