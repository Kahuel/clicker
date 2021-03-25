import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "types/types";
import { combatActions } from "store/actions";

export const Hand = (props: any) => {
  const inventory = useSelector((store: Store) => store.player.inventory);
  const dispatch = useDispatch();
  const { type, weapon } = props;
  return (
    <div>
      {weapon.name}
      <select
        onChange={(e) => {
          e.preventDefault();
          dispatch(
            combatActions.weaponSwitch(type, inventory[Number(e.target.value)])
          );
        }}
      >
        {inventory.map((weapon, index) => (
          <option value={index}>{weapon.name}</option>
        ))}
      </select>
    </div>
  );
};
