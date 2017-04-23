import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import MasonryScroller from '../index';

// Demo tests

const minProps = {
    loadMore: () => {}
}
// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to test if component render', () => {
        const wrapper = shallow(<MasonryScroller {...minProps}/>);
        expect(wrapper.length).toEqual(1);
    });

});