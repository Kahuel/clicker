import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store";

export const ActionBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.combatActions.hitting());
        }}
      >
        Attack
      </button>
    </div>
  );
};
