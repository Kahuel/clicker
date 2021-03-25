import React from "react";
import { useSelector } from "react-redux";
import { Store } from "types/types";
import { HealthBar } from "./elements";

export const Enemy = () => {
  const { hp, maxHP } = useSelector((store: Store) => store.enemy);
  return (
    <div>
      <HealthBar hp={hp} maxHP={maxHP} />
    </div>
  );
};
