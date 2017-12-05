import React from 'react';
import {shallow, render} from 'enzyme';
import Time from './Time';

describe('Time Rendering', () => {

  test('should renderTime correctly ', () => {
    const wrapper = shallow(<Time/>);
    //const wrapper = render(<Time/>);
    expect(wrapper).toMatchSnapshot();

  });

});
