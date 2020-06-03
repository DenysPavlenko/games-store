import { createSelector } from 'reselect';

const gamesSelector = state => state.games;

export const selectGames = createSelector(
  [gamesSelector],
  games => games
);
