import { Weapon } from "types/types";

export const hitting = () => ({
  type: "HITTING",
});
export const weaponSwitch = (
  handSlot: string,
  newWeapon: Weapon,
  prevWeapon: Weapon
) => ({
  type: "WEAPON_SWITCH",
  payload: { handSlot, newWeapon, prevWeapon },
});

export const ugradeWeapon = (handSlot: string) => ({
  type: "UPGRADE_WEAPON",
  payload: { handSlot },
});
