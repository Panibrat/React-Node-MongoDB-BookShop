"use strict"
// CART REDUCERS
export function cartReducers(state = {cart: []}, action) {
  switch (action.type) {

      case "ADD_TO_CART":
            return {
              cart:[...state.cart, action.payload],
              totalAmount: totals([...state.cart, action.payload]).amount,
              totalQty: totals([...state.cart, action.payload]).qty
            }
            break;

        case "DELETE_CART_ITEM":
            let cartToReturn = state.cart.filter((cart_item) => {
              return action.payload._id !== cart_item._id;
            });
            return {
              ...state,
              cart:[...cartToReturn],
              totalAmount: totals(cartToReturn).amount,
              totalQty: totals(cartToReturn).qty
            };
            break;

        case "UPDATE_CART":
            let cartToUpdate = state.cart.map((cart_item) => {
              if(action._id == cart_item._id) {
                cart_item.quantity += action.unit;
              }
              return cart_item;
            });

            return {
              ...state,
              cart:[...cartToUpdate],
              totalAmount: totals(cartToUpdate).amount,
              totalQty: totals(cartToUpdate).qty
            };
            break;
    }
    return state
}

// CALCULATE TOTALS
export function totals(cartArray) {
  //console.log('\n cartArray \n', cartArray);
  var totalAmount = cartArray.reduce((sum, item) => {
    //console.log('\n item \n', item);
    return sum += item.quantity * item.price;
  }, 0)

  var totalQty =  cartArray.reduce((sum, item) => {
    return sum += item.quantity;
  }, 0)
//console.log('\n total \n', {  amount: totalAmount.toFixed(2),  qty: totalQty});
  return {
    amount: totalAmount.toFixed(2),
    qty: totalQty
  }
}
