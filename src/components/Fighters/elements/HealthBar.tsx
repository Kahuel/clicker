import React from "react";

export const HealthBar = (props: any) => {
  const { hp, maxHP } = props;
  return <div>{`${hp}/${maxHP}`}</div>;
};
