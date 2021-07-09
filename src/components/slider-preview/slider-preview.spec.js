/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderPreview from './slider-preview';

const PreviewComponent = () => <div />;

const dummyProps = {
  className: 'test-class',
  children: <PreviewComponent />,
  isLoading: false,
  hasError: false,
};

const setup = (props = {}) => mount(<SliderPreview {...props} />);

describe('SliderPreview', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('renders error indicator on error', () => {
    const wrapper = setup({ ...dummyProps, hasError: true });
    const errorIndicator = wrapper.find('ErrorIndicator');
    expect(errorIndicator.length).toBe(1);
  });
  test('renders placeholder on loading', () => {
    const wrapper = setup({ ...dummyProps, isLoading: true });
    const platePlaceholder = wrapper.find('PlatePlaceholder');
    expect(platePlaceholder.length).toBe(1);
  });
  test('pauses sliders on mouseOver', () => {
    const wrapper = setup({ ...dummyProps });
    const mockSlickPause = jest.fn();
    wrapper.setState({
      sliderRight: { slickPause: mockSlickPause },
      sliderLeft: { slickPause: mockSlickPause },
    });
    const plate = wrapper.find('Plate');
    plate.simulate('mouseover');
    expect(mockSlickPause.mock.calls.length).toBe(2);
  });
  test('starts sliders on mouseleave', () => {
    const wrapper = setup({ ...dummyProps });
    const mockSlickPlay = jest.fn();
    wrapper.setState({
      sliderRight: { slickPlay: mockSlickPlay },
      sliderLeft: { slickPlay: mockSlickPlay },
    });
    const plate = wrapper.find('Plate');
    plate.simulate('mouseleave');
    expect(mockSlickPlay.mock.calls.length).toBe(2);
  });
  test('shows next slide', () => {
    const wrapper = setup({ ...dummyProps });
    const mockSlickNext = jest.fn();
    wrapper.setState({
      sliderRight: { slickNext: mockSlickNext },
    });
    wrapper.instance().nextSlide();
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('shows previous slide', () => {
    const wrapper = setup({ ...dummyProps });
    const mockSlickNext = jest.fn();
    wrapper.setState({
      sliderRight: { slickPrev: mockSlickNext },
    });
    wrapper.instance().prevSlide();
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SliderPreview, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
