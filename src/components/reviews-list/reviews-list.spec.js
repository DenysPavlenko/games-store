/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ReviewsList from './reviews-list';

const defProps = {
  reviews: [
    {
      id: '1',
      title: 'Game Informer',
      name: 'by Matt Miller',
      rating: '8/10',
      review:
        'Electric catfish leaffish boga flabby whalefish whiting Black mackerel whitetip reef shark--Atlantic herring Rainbow trout four-eyed fish, mooneye Pacific salmon. Gray reef shark perch codling bluntnose knifefish loweye catfish whitefish mud cat loach minnow roundhead. Sargassum fish cornetfish tilapia anglerfish; carpsucker poacher frogfish sheepshead.',
    },
  ],
};
const setup = (props = {}) => mount(<ReviewsList {...props} />);

describe('ReviewsList', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('renders reviews', () => {
    const wrapper = setup({ ...defProps });
    const reviews = wrapper.find('ReviewsListItem');
    expect(reviews.length).toBeGreaterThanOrEqual(1);
  });
  test('Pouses slider on mouse hover', () => {
    const wrapper = setup({ ...defProps });
    const control = wrapper.find('.reviews-list-slider-control');
    const slider = wrapper.find('Slider');
    const mockSlickPause = jest.fn();
    slider.instance().slickPause = mockSlickPause;
    control.simulate('mouseover');
    expect(mockSlickPause.mock.calls.length).toBe(1);
  });
  test('Plays slider on mouse out', () => {
    const wrapper = setup({ ...defProps });
    const control = wrapper.find('.reviews-list-slider-control');
    const slider = wrapper.find('Slider');
    const mockSlickPlay = jest.fn();
    slider.instance().slickPlay = mockSlickPlay;
    control.simulate('mouseleave');
    expect(mockSlickPlay.mock.calls.length).toBe(1);
  });
  test('shows previous slide on prev button click', () => {
    const wrapper = setup({ ...defProps });
    const prevButton = wrapper.find('.reviews-list-slider-control').childAt(0);
    const slider = wrapper.find('Slider');
    const mockSlickPrev = jest.fn();
    slider.instance().slickPrev = mockSlickPrev;
    prevButton.simulate('click');
    expect(mockSlickPrev.mock.calls.length).toBe(1);
  });
  test('shows next slide on nest button click', () => {
    const wrapper = setup({ ...defProps });
    const nextButton = wrapper.find('.reviews-list-slider-control').childAt(1);
    const slider = wrapper.find('Slider');
    const mockSlickNext = jest.fn();
    slider.instance().slickNext = mockSlickNext;
    nextButton.simulate('click');
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(ReviewsList, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
