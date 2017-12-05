import {getBooks, postBooks, deleteBooks, updateBooks} from './booksActions';


describe('Book Actions', () => {

  test('Should return GET_BOOKS action', () => {
    expect(getBooks()).toEqual({type: "GET_BOOKS"});
  });

  test('Should return POST_BOOK action with book object in array', () => {
    const book = {
      id: 77,
      title: '777 book title',
      description: '777 description ',
      price: 77777
    }
    expect(postBooks([book])).toEqual({
      type: "POST_BOOK",
      payload: [
        {
          id: 77,
          title: '777 book title',
          description: '777 description ',
          price: 77777
        }
      ]
    });
  });

  test('Should return DELETE_BOOK action with id object', () => {
    expect(deleteBooks({id: "123abc"})).toEqual({
      type: "DELETE_BOOK",
      payload: {
        id: '123abc'
      }
    });
  });

  test('Should return UPDATE_BOOK action with book object', () => {
    const book = {
      id: 1,
      title: 'First book title',
      description: '1st description ',
      price: 1000
    }
    expect(updateBooks([book])).toEqual({
      type: "UPDATE_BOOK",
      payload: [
        {
          id: 1,
          title: 'First book title',
          description: '1st description ',
          price: 1000
        }
      ]
    });
  });

})
