"use strict"
import axios from 'axios';

export function getBooks() {
  return function(dispatch){
    axios.get('/books')
    .then((responce) => {
      var books = responce.data;
      //console.log("\nGET responce\n", books);
      dispatch({
        type:"GET_BOOKS",
        payload: books
      })
    })
    .catch((err) => {
      console.log("\nGET responce ERROR\n", err);
      dispatch({
        type:"GET_BOOKS_REJECTED",
        payload:"there was an error while getting books"
        //payload:err
      })
    })
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
        //payload:err
      })
    })
  }
}

export function deleteBooks(id) {
  return function(dispatch){
    axios.delete("/books/" + id._id)
    .then((responce) => {
      dispatch({
        type: "DELETE_BOOK",
        payload: id
      })
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_BOOK_REJECTED",
        payload:err
      })
    })
  }


    // return {
    //     type: "DELETE_BOOK",
    //     payload: id
    // }
}

export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}
