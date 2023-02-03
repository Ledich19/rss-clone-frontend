import { createSlice } from '@reduxjs/toolkit'
import { Rules } from '../app/types';

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
  },
  inBox: {
    title: 'В коробке',
    cards: {
      monstrs:{
        title: '28 карточек монстров',
        zombie: '17 Зомби',
        dog: '5 дьявольских псов',
        spider: '5 пауков-мутантов',
        boss: 'Босс - болотный ужас',
      },
      weapons:{
        title: '11 карточек оружия',
        grenade: '4 гранаты',
        knife: 'Нож',
        arbalet: 'Арбалет',
        axe: 'Топор',
        pistol: 'Пистолет',
        gun: 'автомат',
        shotGun: 'дробовик',
        grenadeLauncher: 'гранатомёт',
      },
      clothes:{
        title: '16 карточек вещей',
        kits: '6 аптечек',
        boards: '8 досок',
        canister: 'Канистра с бензином',
        key: 'Ключ',
      },
      players: {
        title: '5 карточек игроков',
        alex: 'Саша',
        nadya: 'Надя',
        nastya: 'Настя',
        maks: 'Макс',
        borya: 'Боря',
      },
      health: {
        title: '40 фишек здоровья',
      },
      spinner: {
        title: 'Специальная вертушка',
      },
    }
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