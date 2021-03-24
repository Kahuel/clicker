import { Action } from "../../types/types";

const defaultPlayer = {
  lvl: 1,
  role: "player",
  maxHP: 10,
  hp: 10,
  dmg: 1,
  xp: 0,
  leftHand: "empty",
  rightHand: "empty",
  inventory: [],
};

const defaultEnemy = {
  lvl: 1,
  role: "enemy",
  maxHP: 10,
  hp: 10,
  dmg: 1,
  xp: 0,
  leftHand: "empty",
  rightHand: "empty",
};

export const combat = (
  store = [defaultPlayer, defaultEnemy],
  action: Action
) => {
  switch (action.type) {
    case "HITTING": {
      const { target, dmg } = action.payload;
      console.log("HIT");
      console.log(store);
      return store.map((fighter) => {
        const role = fighter.role;
        if (role === target) {
          const newFighterHP = fighter.hp - dmg;
          return { ...fighter, hp: newFighterHP };
        }
        return fighter;
      });
    }
    case "NEW_ENEMY_SPAWN": {
      return store.map((fighter) =>
        fighter.hp < 1 ? defaultEnemy : { ...fighter, xp: fighter.xp + 1 }
      );
    }
    default:
      return store;
  }
};
