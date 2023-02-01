
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


export type CharacterType = {
  type: string,
  name: string,
  img: string,
  playerName: string,
  description: string,
  count: number,
  health: number,
  inventory: [],
}
export type EnemyType = {
  type: string,
  name: string,
  img: string,
  description: string,
  count: number,
}
export type ThingType = {
  type: string,
  name: string,
  img: string,
  description: string,
  count: number,
}
export type WeaponType = {
  type: string,
  name: string,
  img: string,
  description: string,
  use: 'sword' | 'aim' | 'free',
  count: number,
}
export type BoardItemType = { 
  top: boolean, 
  right: boolean, 
  bottom: boolean, 
  left: boolean, 
  state: object | null, 
  id: string 
}

export type GameSetType = {
  board: BoardItemType[][],
  cards: {
    characters: CharacterType[],
    enemies: EnemyType[],
    things: ThingType[],
    weapon: WeaponType[]
  }
}
