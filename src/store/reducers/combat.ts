import { Action, Store, Weapon } from "types/types";
import { enemyCreator, saver, itemDrop } from "./util";
import _ from "lodash";

const defaultPlayer = {
  leftWeapon: { lvl: 1, name: "fist1", dmg: 1 },
  rightWeapon: { lvl: 1, name: "fist2", dmg: 1 },
  inventory: [],
};

export const combat = (
  store: Store = {
    lvl: 1,
    xp: 0,
    coins: 0,
    player: defaultPlayer,
    enemy: enemyCreator(1),
  },
  action: Action
) => {
  switch (action.type) {
    case "HITTING": {
      const { lvl, xp, coins, player, enemy } = store;
      const dmg = player.leftWeapon.dmg + player.rightWeapon.dmg;
      const newHp = enemy.hp - dmg;
      //enemy died?
      if (newHp < 1) {
        const newInventory = itemDrop(lvl, player.inventory);
        const newXP = xp + lvl ** 2;
        const newCoins = coins + Math.ceil(Math.random() * 3) * lvl;
        //lvlup?
        if (newXP >= 10 + 2 ** (lvl + 1)) {
          const newLvl = lvl + 1;
          const newStore = {
            ...store,
            xp: 0,
            coins: newCoins,
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
          coins: newCoins,
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
      const { handSlot, newWeapon, prevWeapon } = action.payload;
      const newInventory = store.player.inventory.map((weapon: Weapon) =>
        weapon.name === newWeapon.name ? prevWeapon : weapon
      );
      const sortedInventory = _.sortBy(newInventory, [(e) => e.name]);
      return {
        ...store,
        player: {
          ...store.player,
          [handSlot]: newWeapon,
          inventory: sortedInventory,
        },
      };
    }
    case "UPGRADE_WEAPON": {
      console.log(store);
      const { handSlot } = action.payload;
      const weaponToUpgrade = store.player[handSlot];
      const newBalance = store.coins - store.lvl * weaponToUpgrade.lvl;
      if (newBalance < 0) {
        return store;
      }
      const newStore = {
        ...store,
        coins: newBalance,
        player: {
          ...store.player,
          [handSlot]: {
            ...weaponToUpgrade,
            dmg: weaponToUpgrade.dmg + store.lvl,
            lvl: weaponToUpgrade.lvl + 1,
          },
        },
      };
      return newStore;
    }
    default:
      return store;
  }
};
