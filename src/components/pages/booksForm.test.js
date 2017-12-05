import React from 'react';
import {shallow} from 'enzyme';
import {BooksForm} from './booksForm';

const book = [
  {
    _id: 1,
    title: 'First Book',
    description: 'this is the book description ',
    price: 10.25,
    quantity: 5
  }
]
test('should render booksForm correctly ', () => {
  const wrapper = shallow(<BooksForm />);
  expect(wrapper).toMatchSnapshot();

});

test('should simulate submit button from booksForm', () => {
  const wrapper = shallow(<BooksForm />);
  wrapper.find('Button').simulate('submit');
  expect(wrapper).toMatchSnapshot();

});
