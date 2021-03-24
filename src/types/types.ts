interface Payload {
  target: string;
  dmg: number;
}

export interface Action {
  type: string;
  payload: Payload;
}
