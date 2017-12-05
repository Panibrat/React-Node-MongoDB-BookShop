import React from 'react';
import {shallow} from 'enzyme';
import {BooksList} from './booksList';

const books = [
  {
    _id: 1,
    title: 'First Book',
    description: 'this is the book description ',
    price: 10.25
  }, {
    _id: 2,
    title: 'Second',
    description: 'Description for Second',
    price: 22.88
  }, {
    _id: 3,
    title: 'Learn React',
    description: '4424h and you winner!!!',
    price: 300.30
  }
]


describe('Books List Snapshorts Rendering', () => {

  test('should render BooksList correctly with books in props', () => {
    const wrapper = shallow(<BooksList books={books} getBooks={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();

  });

  test('should render empty BooksList', () => {
    const wrapper = shallow(<BooksList books={[]} getBooks={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();

  });



});
