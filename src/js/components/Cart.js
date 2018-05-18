import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeProductFromCart
} from '../actions';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.onHandleClickRemoveProductCart=(product) => {
      this.props.dispatch(removeProductFromCart(product));
    };
  }
  render() {
    const { cartProductData, total }=this.props;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-around">
          <ul className="navbar-nav">
            <li className="nav-item active">Cart</li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          </ul>
        </nav>
        <div>
          <div className="shopping-trolley">
            {
              cartProductData && cartProductData.length > 0 ? (
                <ul className="list-group">
                  {
                    cartProductData.map((product) => (
                      <li key={product.id} className="list-group-item">
                        <span className="list-group-item-title">{product.name}</span>
                        <div className="AddToCart">
                          <span>Price: {product.price} {product.currency}</span>
                          <button className="btn btn-danger" onClick={() => this.onHandleClickRemoveProductCart(product)}>
                            Remove
                          </button>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              ) : (
                <div className="alert alert-info">Корзина пуста</div>
              )
            }
            <div className="cart__total">Total: {total}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state, props) => {
  const { cartProductData, total }=state.ShoppingCart;

  return {
    cartProductData,
    total
  };
};

export default connect(mapStateToProps)(Cart);
