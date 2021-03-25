import React from "react";
import { useSelector } from "react-redux";
import { Hand } from "./elements";
import { Store } from "types/types";

export const Player = () => {
  const { leftWeapon, rightWeapon } = useSelector(
    (store: Store) => store.player
  );
  return (
    <div>
      <Hand type="leftWeapon" weapon={leftWeapon} />
      <Hand type="rightWeapon" weapon={rightWeapon} />
    </div>
  );
};
