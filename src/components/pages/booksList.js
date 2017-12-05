import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import BookItem from './BookItem';
import BooksForm from './booksForm';
import Cart from './cart';
import Time from './Time';

export class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
    //console.log('componentDidMount');
  }
  componentDidUpdate() {
    //console.log('componentDidUpdate');
  }
  render() {
    const booksList = this.props.books.map((arrayBook) => {
      return (
        <Col xs={12} sm={6} md={4} key={arrayBook._id}>
          <BookItem
              _id={arrayBook._id}
              title={arrayBook.title}
              description={arrayBook.description}
              price={arrayBook.price}
          />
        </Col>
      )
    })

    return (
      <Grid style={{marginTop:'50px'}}>
        <Row>
          <Col >
            <Cart />
          </Col>
        </Row>
        <Row>
          <h1> Books List </h1>
          <Col xs={12} sm={6} md={4}>
            <BooksForm/>
          </Col>
          {booksList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
