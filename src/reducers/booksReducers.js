"use strict"
export function booksReducers(state = {
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
}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return {...state, books:[...state.books]};
      break;
    case "POST_BOOK":
      return {books:[...state.books, ...action.payload]};
      break;
    case "DELETE_BOOK":
      let books = state.books.filter((book) => {
        return action.payload._id != book._id;
      })
      return {...state, books:[...books]};
      break;
    case "UPDATE_BOOK":
      books = state.books.map((book) => {
        if(action.payload._id === book._id){
          book = {
            ...book,
            title: action.payload.title
          }
        }
        return book
      })
      return {...state, books:[...books]};
      break;
  }
  return state
}
