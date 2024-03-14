import {Nades} from './iconInterfaces';

export interface Nade {
  name: Nades['value'];
  type: 'damage' | 'delay';
  price: number;
  killAward: number;
  damage: {withArmor: number; withoutArmor: number};
  delay: number;
}
