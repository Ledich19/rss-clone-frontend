import { createSlice } from '@reduxjs/toolkit'
import { GameSetType } from '../app/types';

type Table = {
  text: string[],
}
type Rules = {
  aboutGame: string,
  table: Table,
  goal: {
    title: string,
    text: string,
  },
}
const initialState: Rules = {
  aboutGame : `Всё началось как в фильме ужасов: вы с друзьями
  решили отправиться на пикник, выехали только
  под вечер. Потом машина заглохла посреди леса,
  и пришлось плутать в поисках помощи. Уже в сумерках
  вы увидели большой дом и хозяина на крыльце.
  Но тут человек повернулся и зарычал…`,
  table: {
    text: ['2-5 игроков', 
    'От 12 лет', 
    'Партия от 30 минут', 
    `Объясняется за 5 минут или одну партию`],
  },
  goal: {
    title: 'Цель игры',
    text:  `Цель игры
    Ваша задача — спастись из дома, полного зомби. Для этого нужно
    найти где-то в доме или рядом с ним ключ от красной машины,
    которая стоит с другой стороны здания, а ещё канистру с бензином,
    чтобы её заправить. После этого можно будет уехать.
    Вам придётся исследовать заброшенный дом, сражаться с зомби
    с помощью оружия, подвернувшегося под руку, а ещё — находить
    и использовать разные полезные вещи.`,
  }
}

const getRulesGame = createSlice({
  name: 'gameRules',
  initialState,
  reducers: {
    getCurrentRule(state) {
      return state;
    },
  },
})

export const { getCurrentRule } = getRulesGame.actions;
export default getRulesGame.reducer;