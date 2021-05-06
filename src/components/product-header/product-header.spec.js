import React from 'react';
import { mount } from 'enzyme';
import ProductHeader from './product-header';
import { checkProps } from 'test-utils/index';

const testImage = 'https://image.jpg';
const testVideo = 'https://video.mp4';

const props = {
  previews: [],
  className: 'test-class',
};

const setup = (props = {}) => mount(<ProductHeader {...props} />);

describe('ProductHeader', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('shows previews slider if there are several preview items', () => {
    const wrapper = setup({ ...props, previews: [testImage, testVideo] });
    const slider = wrapper.find('Slider');
    expect(slider.length).toBe(1);
  });
  test('shows one preview if there is one preview item', () => {
    const wrapper = setup({ ...props, previews: [testImage] });
    const slider = wrapper.find('Slider');
    expect(slider.length).toBe(0);
  });
  test('shows previous slide on prev button click', () => {
    const wrapper = setup({ ...props, previews: [testImage, testVideo] });
    const prevButton = wrapper.find('.product-header-slider-control').childAt(0);
    const slider = wrapper.find('Slider');
    const mockSlickPrev = jest.fn();
    slider.instance().slickPrev = mockSlickPrev;
    prevButton.simulate('click');
    expect(mockSlickPrev.mock.calls.length).toBe(1);
  });
  test('shows next slide on next button click', () => {
    const wrapper = setup({ ...props, previews: [testImage, testVideo] });
    const nextButton = wrapper.find('.product-header-slider-control').childAt(1);
    const slider = wrapper.find('Slider');
    const mockSlickNext = jest.fn();
    slider.instance().slickNext = mockSlickNext;
    nextButton.simulate('click');
    expect(mockSlickNext.mock.calls.length).toBe(1);
  });
  test('plays video if current slide contains video', () => {
    const wrapper = setup({ ...props, previews: [testImage, testVideo] });
    const slider = wrapper.find('Slider');
    const mockVideoPlay = jest.fn();
    window.HTMLMediaElement.prototype.play = mockVideoPlay;
    slider.instance().innerSlider.props.afterChange(1)
    expect(mockVideoPlay.mock.calls.length).toBe(1);
  });
  test('pauses video on slide change', () => {
    const wrapper = setup({ ...props, previews: [testImage, testVideo] });
    const slider = wrapper.find('Slider');
    const mockVideoPlay = jest.fn();
    window.HTMLMediaElement.prototype.pause = mockVideoPlay;
    slider.instance().innerSlider.props.afterChange(2)
    expect(mockVideoPlay.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ProductHeader, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
