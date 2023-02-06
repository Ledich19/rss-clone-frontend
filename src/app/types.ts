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

export type Table = {
  text: string[],
};

export type ContentRules = {
  title:string,
  text: string,
  items?: string[],
};

export type QA = {
  question: string,
  answer: string,
};
export type Rules = {
  aboutGame: string,
  table: Table,
  goal: {
    title: string,
    text: string,
    items: string[],
  },
  inBox: {
    title: string,
    cards: {
      monstrs:{
        title: string,
        zombie: string,
        dog: string,
        spider: string,
        boss: string,
      },
      weapons: {
        title: string,
        grenade: string,
        knife: string,
        arbalet: string,
        axe:string,
        pistol: string,
        gun: string,
        shotGun: string,
        grenadeLauncher: string,
      },
      clothes: {
        title: string,
        kits: string,
        boards: string,
        canister: string,
        key: string,
      },
      players: {
        title: string,
        alex: string,
        nadya: string,
        nastya: string,
        maks: string,
        borya: string,
      },
      health: {
        title: string,
      },
      spinner: {
        title: string,
      }
    }
  },
  info: {
    prepa: {
      title:string,
      text: string,
      items: string[],
    },
    moves: {
      title:string,
      text: string,
      items: string[],
    },
    fight: {
      title:string,
      text: string,
      items: string[],
    },
    eaten: {
      title:string,
      text: string,
      items: string[],
    },
    attack: {
      title:string,
      text: string,
      items: string[],
    },
    win: {
      title:string,
      text: string,
      items: string[],
    },
    breakeBoards: {
      title: string,
      text: string,
      items: string[],
    }
  },
  questions: {
    title: string,
    text: QA[],
  },
};
