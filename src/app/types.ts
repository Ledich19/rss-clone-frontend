
export type PromoCodeState = {
  promoCodes: {
    code: string;
    discount: number;
  }[],
  promoCodeUse: {
    code: string;
    discount: number;
  }[],
}
export type Player = {
  playerName: string,
  name: string,
  health: number,
  inventory: [],
}

export type Players = {
  characters: Player[],
  active: string,
}

