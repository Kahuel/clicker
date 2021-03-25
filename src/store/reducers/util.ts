import { Weapon } from "types/types";
import _ from "lodash";

export const factorial = (x: number): number =>
  x <= 1 ? 1 : x * factorial(x - 1);

export const enemyCreator = (lvl: number) => ({
  maxHP: 10 * lvl,
  hp: 10 * lvl,
});

export const saver = (store: any) => {
  localStorage.setItem("store", JSON.stringify(store));
  return store;
};

const newItem = (lvl: number) => ({
  lvl: 1,
  name: _.uniqueId("Weapon_"),
  dmg: Math.ceil(Math.random() * 3) * lvl,
});

export const itemDrop = (lvl: number, inventory: Weapon[]) => {
  const droped = Math.random() < 0.2 ? true : false;
  if (droped) {
    return [...inventory, newItem(lvl)];
  }
  return inventory;
};
