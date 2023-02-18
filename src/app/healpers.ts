import { BoardItemType, CharacterType } from './types';

export const getNextPlayer = (arr: CharacterType[], element: string): string => {
  const activeIndex = arr.map((ch) => ch.type).indexOf(element);
  const nextPlayerIndex = activeIndex === arr.length - 1 ? 0 : activeIndex + 1;
  return arr[nextPlayerIndex].type;
};

type ElementT = BoardItemType | undefined;
export const createNearCeil = (element: ElementT, i: number, j: number): string[] => [
  element && element.top ? `${i - 1}-${j}` : 'none',
  element && element.bottom ? `${i + 1}-${j}` : 'none',
  element && element.right ? `${i}-${j + 1}` : 'none',
  element && element.left ? `${i}-${j - 1}` : 'none',
];

export const checkItemsId = (i: number, j: number): string[] => [
  `${i - 1}-${j}`,
  `${i + 1}-${j}`,
  `${i}-${j + 1}`,
  `${i}-${j - 1}`,
];

export const getActivePlayerCeil = (gameField: BoardItemType[][], player: string) => gameField
  .flat(1)
  .find(
    (ceil) => ceil.state && typeof ceil.state === 'object' && ceil.state.type === player,
  );
