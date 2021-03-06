import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_PAY_RESET } from '../constants/orderConstants';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
        const { data } = await Axios.get('/api/config/paypal');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };

      if (!order || successPay || (order && order._id !== orderId)) {
        dispatch({ type: ORDER_PAY_RESET });
        dispatch(detailsOrder(orderId));
      } else {
        if (!order.isPaid) {
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
        }
      }
    }, [dispatch, order, orderId, sdkReady, successPay]);
    const successPaymentHandler = (paymentResult) => {
      dispatch(payOrder(order, paymentResult));
    };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Porudžbina {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Dostava</h2>
                <p>
                  <strong>Ime i prezime:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Adresa: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Isporučeno datuma {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nije isporučeno</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Plaćanje</h2>
                <p>
                  <strong>Način plaćanja:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Plaćeno {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nije plaćeno</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Naručene stavke</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price} = {item.qty * item.price} din
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Narudžbenica</h2>
              </li>
              <li>
                <div className="row">
                  <div>Stavke</div>
                  <div>{order.itemsPrice.toFixed(2)} din</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Dostava</div>
                  <div>{order.shippingPrice.toFixed(2)} din</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>PDV</div>
                  <div>{order.taxPrice.toFixed(2)} din</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Ukupno</strong>
                  </div>
                  <div>
                    <strong>{order.totalPrice.toFixed(2)} din</strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                    {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
