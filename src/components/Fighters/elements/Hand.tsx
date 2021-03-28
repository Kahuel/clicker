import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "types/types";
import { combatActions } from "store/actions";
import _ from "lodash";

export const Hand = (props: any) => {
  const inventory = useSelector((store: Store) => store.player.inventory);
  const dispatch = useDispatch();
  const { handSlot, weapon } = props;
  return (
    <div>
      <select
        onChange={(e) => {
          e.preventDefault();
          dispatch(
            combatActions.weaponSwitch(
              handSlot,
              inventory[Number(e.target.value)],
              weapon
            )
          );
        }}
      >
        <option selected>{weapon.name}</option>
        {inventory.map((weapon, index) => (
          <option key={_.uniqueId("key")} value={index}>
            {weapon.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          dispatch(combatActions.ugradeWeapon(handSlot));
        }}
      >
        +
      </button>
    </div>
  );
};
