import React from 'react';
import { shallow } from 'enzyme';
import App from './Appnew';
import Adapter from 'enzyme-adapter-react-16';

const app = shallow(<App/>);
// configure({adapter: new Adapter()});

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});