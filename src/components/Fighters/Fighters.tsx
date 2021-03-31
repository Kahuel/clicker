import React from "react";
import { useDispatch } from "react-redux";
import { Hand, HealthBar } from "./elements";
import { combatActions } from "store/actions";

export const Fighter = (props: any) => {
  const dispatch = useDispatch();
  const { role, hp, maxHP, leftHand, rightHand } = props.fighter;
  if (hp < 1) {
    dispatch(combatActions.newEnemySpawn());
  }
  return (
    <div className={role}>
      <HealthBar hp={hp} maxHP={maxHP} />
      <Hand className="left" weapon={leftHand} />
      <Hand className="right" weapon={rightHand} />
    </div>
  );
};
