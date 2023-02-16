import { CharacterType } from './types';

export const getNextPlayer = (arr: CharacterType[], element: string): string => {
  const activeIndex = arr.map((ch) => ch.type).indexOf(element);
  const nextPlayerIndex = activeIndex === arr.length - 1 ? 0 : activeIndex + 1;
  return arr[nextPlayerIndex].type;
};

export const echo = <T>(something: T) => {
};
