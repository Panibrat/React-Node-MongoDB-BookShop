"use strict"
import axios from 'axios';

export function getBooks() {
    return {
        type:"GET_BOOKS"
    }
}

export function postBooks(book) {
  return function(dispatch){
    axios.post('/books', book)
    .then((responce) => {
      dispatch({
        type:"POST_BOOK",
        payload: responce.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"POST_BOOK_REJECTED",
        payload:"there was an error while posting a new book"
      })
    })
  }



    // return {
    //     type:"POST_BOOK",
    //     payload: book
    // }
}

export function deleteBooks(id) {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}
