import productsData from '../../../data';
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../actions';

const initialState={
  productsData,
  cartProductId: [],
  cartProductData: [],
  total: 0
};

const shoppingCart=(state=initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      const changeCardProduct=[...state.cartProductData, action.product];

      return {
        ...state,
        cartProductId: [...state.cartProductId, action.product.id],
        cartProductData: changeCardProduct,
        total: changeCardProduct.reduce((accum, id) => {
          const item=action.product;
          return accum + item.price;
        }, 0)
      };

    case REMOVE_PRODUCT_FROM_CART:
      const removeCurrentProductCard=state.cartProductData.filter((item, index) => {
        return item.id !== action.product.id;
      });

      return {
        ...state,
        cartProductId: state.cartProductId.filter((itemId, index) => {
          return itemId !== action.product.id;
        }),
        cartProductData: removeCurrentProductCard,
        total: removeCurrentProductCard.reduce((accum, id) => {
          const item=action.product;
          return accum + item.price;
        }, 0)
      };

    default:
      return state;
  }
};

export default shoppingCart;
