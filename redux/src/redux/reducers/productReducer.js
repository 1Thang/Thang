import {
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
  } from '../actions/productActions';
  
  const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload };
      
      case ADD_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
  
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
  
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  