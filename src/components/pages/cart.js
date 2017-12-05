import React from 'react';
import {Modal, Well, Panel, Col, Row, Button, ButtonGroup, Label} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {deleteCartItem, updateCart} from '../../actions/cartActions';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close(){
    this.setState({
      showModal: false
    });
  }

  open(){
    this.setState({
      showModal: true
    });
  }

  handleDeleteCartItem(itemToDelete) {
    this.props.deleteCartItem(itemToDelete);
  }
  onIncrement(_id) {
    this.props.updateCart(_id, 1);
    //console.log('+');
  }

  onDecrement(_id, quantity) {
    if(quantity > 1) {
        this.props.updateCart(_id, -1);
    }
  }
  getTotal(cartArray){
    var total = cartArray.reduce((sum, item) => {
      return sum += item.quantity * item.price
    }, 0)
    return total.toFixed(2);
  }

  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {

      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return (
      <div></div>
    )
  }
  renderCart() {
    const cartItemsList = this.props.cart.map((cartArr) => {
      return (
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
                <h6>usd. {cartArr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle="default" bsSize="small" onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>
                  -
                </Button>
                <Button bsStyle="default" bsSize="small" onClick={this.onIncrement.bind(this, cartArr._id)}>
                  +
                </Button>
                <span> </span>
                <Button bsStyle="danger" bsSize="small" onClick={this.handleDeleteCartItem.bind(this, cartArr)}>
                  DELETE
                </Button>
              </ButtonGroup>
          </Col>
          </Row>
        </Panel>
      )
    }, this)
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total amount: {this.props.totalAmount}$</h6>
            <h6>Items: {this.props.totalQty}</h6>
            <Button bsStyle="success" bsSize="small" onClick={this.open}>
              PROCCEED TO CHECKOUT
            </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>Thank you!</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <h4>Your order has been saved...</h4>
           <p> Вышлем письмо</p>

         </Modal.Body>
         <Modal.Footer>
           <Col xs={6}>
             <h6>
               Total amount {this.props.totalAmount}$
             </h6>
           </Col>
           <Button onClick={this.close}>Close</Button>
         </Modal.Footer>
       </Modal>
          </Col>
        </Row>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.carts.cart,
    totalAmount: state.carts.totalAmount,
    totalQty: state.carts.totalQty
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem: deleteCartItem,
    updateCart: updateCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
