import { createSelector } from 'reselect';

const gameSelectors = state => state.game;

export const gameSelectorsData = createSelector(
  [gameSelectors],
  game => game
);
