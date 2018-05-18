import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  alreadyInCart,
  addProductToCart,
  removeProductFromCart
} from '../actions';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.onHandleClickAddProductCart=(product) => {
      if (this.props.cartProductId.includes(product.id)) {
        this.props.dispatch(removeProductFromCart(product));
      } else {
        this.props.dispatch(addProductToCart(product));
      }
    };
  }

  render() {
    const { productsData, cartProductId }=this.props;

    return (
      <div>
        <ul className="product-list">
          {
            productsData.map((product) => (
              <li key={product.id} className="product-list__item">
                <div className="product thumbnail">
                  <img height="350px;" src={require(`../../../assets/${product.image}`)} />
                  <div className="caption">
                    <h3>{product.name}</h3>
                    <div className="product__data_wrap">
                      <div className="product__price"><span>Цена: {product.price} {product.currency}</span></div>
                        <button className={cartProductId.includes(product.id) ? "btn btn-danger" : "btn btn-primary"} onClick={() => this.onHandleClickAddProductCart(product)}>
                          {cartProductId.includes(product.id) ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps=(state, props) => {
  const { productsData, cartProductId }=state.ShoppingCart;

  return {
    productsData,
    cartProductId
  };
};

export default connect(mapStateToProps)(ShoppingList);
