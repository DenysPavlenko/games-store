/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { GamesPreview } from './games-preview';

const dummyProps = {
  games: {
    loading: false,
    collection: [
      {
        id: 3498,
        rout: 'grand-theft-auto-v',
        name: 'Grand Theft Auto V',
        released: '2013-09-17',
        image: 'https://test.jpg',
        rating: 4.48,
        genres: [],
        platforms: [
          {
            platform: {
              id: 4,
              name: 'PC',
              slug: 'pc',
              image: null,
              year_end: null,
              year_start: null,
              games_count: 213251,
              image_background: 'https://test.jpg',
            },
          },
        ],
      },
    ],
    error: false,
  },
  fetchGamesData: () => {},
};
const setup = (props = {}) =>
  mount(
    <Router>
      <GamesPreview {...props} />
    </Router>
  );

describe('GamesPreview', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(GamesPreview, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
