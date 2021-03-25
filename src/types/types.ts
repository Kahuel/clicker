interface Payload {
  newWeapon: Weapon;
  hand: string;
}

export interface Action {
  type: string;
  payload: Payload;
}

export interface Weapon {
  lvl: number;
  name: string;
  dmg: number;
}

interface Enemy {
  hp: number;
  maxHP: number;
}

interface Player {
  leftWeapon: Weapon;
  rightWeapon: Weapon;
  inventory: Weapon[];
}

export interface Store {
  lvl: number;
  xp: number;
  player: Player;
  enemy: Enemy;
}
