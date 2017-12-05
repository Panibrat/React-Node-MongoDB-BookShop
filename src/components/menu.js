import React from 'react';
import {Navbar, NavItem, Nav, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';


class Menu extends React.Component{
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Panibrat Shop</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/about">About</NavItem>
                <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>

              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/admin">Admin</NavItem>
                <NavItem eventKey={2} href="/cart">
                    You Cart {(this.props.totalQty > 0) ? <Badge className="badge">{this.props.totalQty}</Badge> : null}
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    totalQty: state.carts.totalQty
  }
}
export default connect(mapStateToProps)(Menu);
