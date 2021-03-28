interface Payload {
  prevWeapon: Weapon;
  newWeapon: Weapon;
  handSlot: "leftWeapon" | "rightWeapon";
}

export interface WeaponUpgradePayload {
  weapon: Weapon;
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
  coins: number;
  player: Player;
  enemy: Enemy;
}
