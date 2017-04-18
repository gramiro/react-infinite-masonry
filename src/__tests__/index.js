import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import MasonryScroller from '../index';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have three `.icon-test`s', () => {
        const wrapper = shallow(<MasonryScroller />);
        expect(wrapper.find('.icon-test')).to.have.length(3);
    });

    it('simulates click events', () => {
        const buttonClick = sinon.spy();
        const wrapper = shallow(
          <MasonryScroller handleClick={buttonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(buttonClick.calledOnce).to.equal(true);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<MasonryScroller />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');
    });

    it('calls componentDidMount', () => {
        sinon.spy(MasonryScroller.prototype, 'componentDidMount');
        const wrapper = mount(<MasonryScroller />);
        expect(MasonryScroller.prototype.componentDidMount.calledOnce).to.be.true;
        MasonryScroller.prototype.componentDidMount.restore();
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders three `.icon-test`s', () => {
        const wrapper = render(<MasonryScroller />);
        expect(wrapper.find('.icon-test').length).to.equal(3);
    });

});