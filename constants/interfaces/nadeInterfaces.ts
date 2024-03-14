export interface Nade {
  name: string;
  type: 'damage' | 'delay';
  price: number;
  killAward: number;
  damage: {withArmor: number; withoutArmor: number};
  delay: number;
}
