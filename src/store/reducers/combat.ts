import { Action, Store, Weapon } from "types/types";
import { enemyCreator, saver, itemDrop } from "./util";

const defaultPlayer = {
  leftWeapon: { lvl: 10, name: "fist", dmg: 1 },
  rightWeapon: { lvl: 10, name: "fist", dmg: 1 },
  inventory: [],
};

export const combat = (
  store: Store = {
    lvl: 1,
    xp: 0,
    player: defaultPlayer,
    enemy: enemyCreator(1),
  },
  action: Action
) => {
  switch (action.type) {
    case "HITTING": {
      console.log(store);
      const { lvl, xp, player, enemy } = store;
      const dmg = player.leftWeapon.dmg + player.rightWeapon.dmg;
      const newHp = enemy.hp - dmg;
      //enemy died?
      if (newHp < 1) {
        const newInventory = itemDrop(lvl, player.inventory);
        const newXP = xp + lvl ** 2;
        //lvlup?
        if (newXP >= 10 + 2 ** (lvl + 1)) {
          const newLvl = lvl + 1;
          const newStore = {
            ...store,
            xp: 0,
            lvl: newLvl,
            player: {
              ...player,
              inventory: newInventory,
            },
            enemy: enemyCreator(lvl),
          };
          return saver(newStore);
        }
        //enemy got damage
        const newStore = {
          ...store,
          xp: newXP,
          player: {
            ...player,
            inventory: newInventory,
          },
          enemy: enemyCreator(lvl),
        };
        return saver(newStore);
      }
      const newStore = { ...store, enemy: { ...store.enemy, hp: newHp } };
      return saver(newStore);
    }
    case "WEAPON_SWITCH": {
      const { player } = store;
      const { hand, newWeapon } = action.payload;
      console.log(action.payload);
      const prevWeapon =
        hand === "leftWeapon"
          ? { ...player.leftWeapon }
          : { ...player.rightWeapon };
      return {
        ...store,
        player: {
          ...player,
          [hand]: newWeapon,
          inventory: player.inventory.map((weapon: Weapon) =>
            weapon === newWeapon ? prevWeapon : weapon
          ),
        },
      };
    }
    default:
      return store;
  }
};
