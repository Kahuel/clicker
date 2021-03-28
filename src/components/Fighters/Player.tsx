import React from "react";
import { useSelector } from "react-redux";
import { Hand } from "./elements";
import { Store } from "types/types";

export const Player = () => {
  const { leftWeapon, rightWeapon } = useSelector(
    (store: Store) => store.player
  );
  const coins = useSelector((store: Store) => store.coins);
  return (
    <div>
      <div>{`Coins: ${coins}`}</div>
      <Hand handSlot="leftWeapon" weapon={leftWeapon} />
      <Hand handSlot="rightWeapon" weapon={rightWeapon} />
    </div>
  );
};
