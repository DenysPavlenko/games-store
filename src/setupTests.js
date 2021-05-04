import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
  snapshotSerializers: ['enzyme-to-json/serializer']
});

global.toJson = toJson;
