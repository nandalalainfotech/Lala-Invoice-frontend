import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { InvoiceListReducer } from "./reducers/InvoiceReducers";




// import { cartWomenReducer } from './reducers/cartWomenReducers';

// import { cartKidReducer } from './reducers/cartKidReducers';
// import { suitDetailsReducer, suitListReducer, suitReviewCreateReducer } from './reducers/suitReducers';
// import { cartKidReducer } from './reducers/cartKidReducers';
// import { cartWomenReducer } from './reducers/cartWomenReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },

  userAccount: {
    accountInfo: localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : null,
  },
  userAccountCreation: {
    accountcreationInfo: localStorage.getItem("accountcreationInfo")
      ? JSON.parse(localStorage.getItem("accountcreationInfo"))
      : null,
  },
  userAdminin: {
    adminInfo: localStorage.getItem("adminInfo")
      ? JSON.parse(localStorage.getItem("adminInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("usercart")
      ? JSON.parse(localStorage.getItem("usercart"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
};

const reducer = combineReducers({
  InvoiceList:InvoiceListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
document.cookie = "name=sri";
export default store;
