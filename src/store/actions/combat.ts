export const hitting = (target: string, dmg: number) => ({
  type: "HITTING",
  payload: { target, dmg },
});
export const newEnemySpawn = () => ({
  type: "NEW_ENEMY_SPAWN",
});
