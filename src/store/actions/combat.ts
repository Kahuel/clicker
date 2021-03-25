import { Weapon } from "types/types";

export const hitting = () => ({
  type: "HITTING",
});
export const weaponSwitch = (hand: string, newWeapon: Weapon) => ({
  type: "WEAPON_SWITCH",
  payload: { hand, newWeapon },
});
