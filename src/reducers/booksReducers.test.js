import {booksReducers} from './booksReducers';

const state = {
  books:[
    {
        _id: 1,
        title: 'First Book',
        description: 'this is the book description ',
        price: 10.25
    },
    {
      _id: 2,
      title: 'Second',
      description: 'Description for Second',
      price: 22.88
    },
    {
        _id: 3,
        title: 'Learn React',
        description: '4424h and you winner!!!',
        price: 300.30
    }

  ]
}

describe('Book Reducer', () => {

  test('Should return initial values of books in case of GET_BOOKS', () => {
    const newState = booksReducers(undefined, {type: "GET_BOOKS"});
    expect(newState).toEqual({
       books:[...state.books]
    });
  });


  test('Should add new book in case of POST_BOOK', () => {
    const book = {
      _id: 77,
      title: '777 book title',
      description: '777 description ',
      price: 77777
    };
    const action = {
      type: "POST_BOOK",
      payload: [ book
      ]
    }
    const newState = booksReducers(state, action);
    expect(newState).toEqual({
       books:[...state.books, book]
    });
  });


  test('Should delete a book in case of DELETE_BOOK', () => {
    const action = {
      type: "DELETE_BOOK",
      payload: {_id: 1 }
    }
    const newState = booksReducers(state, action);
    expect(newState).toEqual({
      books:[
        state.books[1],
        state.books[2]
      ]
    });
  });

  test('Should NOT delete any book with wrong id in case of DELETE_BOOK', () => {
    const action = {
      type: "DELETE_BOOK",
      payload: {_id: -1 }
    }
    const newState = booksReducers(state, action);
    expect(newState).toEqual(state);
  });

  test('Should updete a book in case of UPDATE_BOOK', () => {
    const title = 'Was First Book';
    const action = {
      type: "UPDATE_BOOK",
      payload: {
        _id: 1,
        title: title,
       }
    }
    const newState = booksReducers(state, action);
    expect(newState.books[0].title).toEqual(title);
  });

  test('Should NOT update any book with wrong id in case of UPDATE_BOOK', () => {
    const action = {
      type: "UPDATE_BOOK",
      payload: {
        _id: -1,
        title: 'Any',
        description: 'Any ',
        price: 0.99
       }
    }
    const newState = booksReducers(state, action);
    expect(newState).toEqual(state);
  });


})
