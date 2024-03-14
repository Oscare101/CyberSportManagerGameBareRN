export interface Gun {
  name: string;
  type: 'Rifle' | 'Sniper Rifle' | 'Pistol';
  price: number;
  killAward: number;
  inaccuracy: number;
  fireRate: number;
  damagePerSecond: number;
  usedBy: string;
  damage: {
    withArmor: {
      head: number;
      chestAndArms: number;
      belly: number;
      legs: number;
    };
    withoutArmor: {
      head: number;
      chestAndArms: number;
      belly: number;
      legs: number;
    };
  };
}
