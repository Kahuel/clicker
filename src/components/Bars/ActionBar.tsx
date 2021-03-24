import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

export const ActionBar = () => {
  const dispatch = useDispatch();
  const [player, enemy] = useSelector((store: any) => store.combat);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.combatActions.hitting(enemy.role, player.dmg));
        }}
      >
        Attack
      </button>
    </div>
  );
};
