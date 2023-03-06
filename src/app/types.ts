export type InventoryItemType = ThingType | WeaponType;
export type InventoryType = InventoryItemType[];

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

interface BaseType {
  category: string;
  isVisible: boolean;
  type: string;
  name: string;
  img: string;
  description: string;
  count: number;
}

export interface CharacterType extends BaseType {
  id: string;
  isAlive: boolean;
  playerName: string;
  health: number;
  inventory?: InventoryType;
}

export interface EnemyType extends BaseType {
  active: boolean;
}

export type ThingType = BaseType;

export interface WeaponType extends BaseType {
  use: 'sword' | 'aim' | 'free';
}

export interface Player extends BaseType {
  playerName: string;
  health: number;
  inventory?: InventoryType;
}

export type Players = {
  characters: CharacterType[],
  activePlayer: string,
  enemyChoose: {
    id: string,
    value: EnemyType,
  } | null,
  canPlayerMove: boolean,
  amount: string;
};

export type CeilInventoriType = {
  type: string,
  category: string,
  img: string,
  isVisible: boolean;
  value: InventoryType,
};

export type BoardItemType = {
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean,
  state: WeaponType | ThingType | EnemyType | CharacterType | null | CeilInventoriType
  id: string
  value?: string
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
      monstrs: {
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
        axe: string,
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
  aboutSpinner: {
    title: string,
    text: string[],
  },
};

export type Options = {
  theme: 'default' | 'dark',
  sound: boolean,
  gameVolume: number,
  spinnerVolume: number,
};
