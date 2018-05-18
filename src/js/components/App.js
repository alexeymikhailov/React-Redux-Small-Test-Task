import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShoppingList from '../components/ShoppingList';

const App=({ cartProductData }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-around">
        <ul className="navbar-nav">
          <li className="nav-item active">Home</li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/cart-show">Cart <span className="badge">{cartProductData.length}</span></Link></li>
        </ul>
      </nav>
      <div className="flex">
        <ShoppingList />
      </div>
    </div>
  );
}

const mapStateToProps=(state, props) => {
  const { cartProductData }=state.ShoppingCart;

  return {
    cartProductData
  };
};

export default connect(mapStateToProps)(App);
