import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  snapshotSerializers: ['enzyme-to-json/serializer']
});

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: () => { },
    removeListener: () => { }
  };
};

global.toJson = toJson;
