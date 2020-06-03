import { createSelector } from 'reselect';

const gameSelector = state => state.game;

export const selectGame = createSelector(
  [gameSelector],
  game => game
);
