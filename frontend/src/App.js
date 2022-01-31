import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import {FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart} from 'react-icons/fa';
import {GiIsland} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              <GiIsland></GiIsland> BALIexpress
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <FaShoppingCart size="1.5em"></FaShoppingCart>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          <IconContext.Provider className="row" value={{size:"2em", color:"white"}}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF></FaFacebookF></a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram></FaInstagram></a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter></FaTwitter></a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </IconContext.Provider>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
