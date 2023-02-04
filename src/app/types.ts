export type PromoCodeState = {
  promoCodes: {
    code: string;
    discount: number;
  }[],
  promoCodeUse: {
    code: string;
    discount: number;
  }[],
};
export type Player = {
  type: string,
  isVisible: boolean;
  active: boolean;
  playerName: string,
  name: string,
  health: number,
  inventory: [],
};

export type Players = {
  characters: CharacterType[],
  activePlayer: string,
};

export type CharacterType = {
  isVisible: boolean;
  active: boolean;
  type: string,
  name: string,
  img: string,
  playerName: string,
  description: string,
  count: number,
  health: number,
  inventory: [],
};
export type EnemyType = {
  isVisible: boolean;
  active: boolean;
  type: string,
  name: string,
  img: string,
  description: string,
  count: number,
};
export type ThingType = {
  isVisible: boolean;
  type: string,
  name: string,
  img: string,
  description: string,
  count: number,
};
export type WeaponType = {
  isVisible: boolean;
  type: string,
  name: string,
  img: string,
  description: string,
  use: 'sword' | 'aim' | 'free',
  count: number,
};
export type BoardItemType = {
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean,
  state: {
    isVisible: boolean;
    img: string
    type: string;
  } | null | 'player' | 'finish',
  id: string
};

export type GameSetType = {
  board: BoardItemType[][],
  cards: {
    characters: CharacterType[],
    enemies: EnemyType[],
    things: ThingType[],
    weapon: WeaponType[]
  }
};
