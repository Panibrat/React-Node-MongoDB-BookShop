import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks, deleteBooks} from '../../actions/booksActions';


export class BooksForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onDelete = this.onDelete.bind(this);
    }

  handleSubmit(){
    const book = [
      {
        //id: 12121,
        title: findDOMNode(this.refs.title).value,
        //title: this.refs.title.value + '!?!?', - doesn't work with react-bootstrap component
        description:  findDOMNode(this.refs.description).value,
        price: findDOMNode(this.refs.price).value
      }
    ];
    findDOMNode(this.refs.title).value = "";
    findDOMNode(this.refs.description).value = '';
    findDOMNode(this.refs.price).value = '';
    this.props.postBooks(book);
  }

    onDelete(){
      var id = findDOMNode(this.refs.delete).value
      var bookToDelete = {_id: id}
      this.props.deleteBooks(bookToDelete);
  }

  render() {
    const booksList = this.props.books.map((bookItem)=> {
      return   <option key={bookItem._id} > {bookItem._id}</option>
    })
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              ref="title"
              placeholder="Enter title"
          />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              ref="description"
              placeholder="Enter description"
          />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              ref="price"
              placeholder="Enter price"
          />
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary">SAVE</Button>
        </Panel>
        <Panel>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select book to deleteeee</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete} bsStyle="danger">
            Delete book
          </Button>
        </Panel>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBooks: postBooks,
    deleteBooks: deleteBooks
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
