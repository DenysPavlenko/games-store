import React from 'react';
import { mount } from 'enzyme';
import SliderPreview from './slider-preview';
import { checkProps } from 'test-utils/index';

const PreviewComponent = () => <div></div>;

const props = {
  className: 'test-class',
  children: <PreviewComponent />,
  isLoading: false,
  hasError: false,
};

const setup = (props = {}) => {
  return mount(<SliderPreview {...props} />)
};

describe('SliderPreview', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('renders error indicator on error', () => {
    const wrapper = setup({ ...props, hasError: true });
    const errorIndicator = wrapper.find('ErrorIndicator');
    expect(errorIndicator.length).toBe(1);
  });
  test('renders placeholder on loading', () => {
    const wrapper = setup({ ...props, isLoading: true });
    const platePlaceholder = wrapper.find('PlatePlaceholder');
    expect(platePlaceholder.length).toBe(1);
  });
  test('pauses sliders on mouseOver', () => {
    const wrapper = setup({ ...props });
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
    const wrapper = setup({ ...props });
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
    const wrapper = setup({ ...props });
    const mockSlickNext = jest.fn();
    wrapper.setState({
      sliderRight: { slickNext: mockSlickNext },
    });
    wrapper.instance().nextSlide();
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('shows previous slide', () => {
    const wrapper = setup({ ...props });
    const mockSlickNext = jest.fn();
    wrapper.setState({
      sliderRight: { slickPrev: mockSlickNext },
    });
    wrapper.instance().prevSlide();
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SliderPreview, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
