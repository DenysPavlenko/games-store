import { createSelector } from 'reselect';

const gamesSelectors = state => state.games;

export const gamesSelectorsData = createSelector(
  [gamesSelectors],
  games => games
);
