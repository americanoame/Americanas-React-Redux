import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlsoLike from '../../components/also-like/AlsoLike';
import { useDispatch } from 'react-redux';
import { removeFromCart, increase, decrease, addToWishList, removeFromWishList, clearCart } from '../../redux/cartSlice';
import { useGetAllProductsQuery } from '../../redux/productsApi';
import Loading from '../../components/loading/Loading';
import { FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa';



import './cart.css';

const Cart = () => {
  const { error, isLoading } = useGetAllProductsQuery();
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart({ id: item.id, name: item.name }));
  };

  const handleIncrease = (item) => {
    dispatch(increase({ id: item.id }));
  };

  const handleDecrease = (item) => {
    if (item.cartQuantity === 1) {
      handleRemove(item); // Handle removal when quantity is 1
    } else {
      dispatch(decrease({ id: item.id }));
    }
  };

  const handleAddToWishList = (item) => {
    const itemIndex = cart.wishListItems.findIndex((wishlistItem) => wishlistItem.id === item.id);
    if (itemIndex !== -1) {
      // If the item is already in the wish list, remove it
      dispatch(removeFromWishList({ id: item.id, name: item.name }));
    } else {
      // If the item is not in the wish list, add it
      dispatch(addToWishList(item));
    }
  };

  // it will increase the total amount of items
  const cartItemCount = cart.cartItems.reduce((total, item) => total + item.cartQuantity, 0);

  const itemsTotal = cart.cartItems.reduce((total, item) => {
    return total + item.price * item.cartQuantity;
  }, 0);

  const shippingCost = 4.99;
  const estimatedTax = itemsTotal * 0.1;
  const orderTotal = itemsTotal + shippingCost + estimatedTax;

  return (
    <div className="cart-container">
      {isLoading ? (
        <div className="cart-loading-container">
          <p>
          <p><Loading />Loading!!!</p>
          </p>
        </div>
      ) : error ? (
        <div className="cart-loading-container">
          <p>An error occurred...</p>
        </div>
      ) : (
        <div>
          {cart.cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>
                Your cart is currently empty
                <span className="moji">∅</span>
                <div className="">
                  <Link to="/">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span> Continue Shopping</span>
                  </Link>
                </div>
              </p>
            </div>
          ) : (
            <div className="main-container">
              {/* <div className="page-title">Review your order</div> */}

              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

              <Link to="/" className="continue-shopping">
                ← Continue shopping
              </Link>

              <div className="checkout-grid">
                <div className="order-summary">
                  {cart.cartItems.map((item) => (
                    <div className="cart-item-container" key={item.id}>
                      <div className="cart-item-details-grid">
                        <img className="product-img" src={item.image} alt={item.name} />

                        <div className="cart-item-details">
                          <div className="product-name">{item.name}</div>
                          <div className="product-price">${(item.price / 100).toFixed(2)}</div>

                          <div className="product-quantity">
                            <button onClick={() => handleIncrease(item)}>
                              <FaArrowAltCircleUp />
                            </button>
                            <p className="amount">{item.cartQuantity}</p>

                            <button className="quantity-btn" onClick={() => handleDecrease(item)}>
                              <FaArrowCircleDown />
                            </button>
                          </div>

                          <span onClick={() => handleAddToWishList(item)} className="Save-for-later">
                            {cart.wishListItems.some((wishlistItem) => wishlistItem.id === item.id) ? 'Remove from wish list ' : 'Save to your wish list '}
                          </span>
                          {/* <span className="update-quantity-link link-success"> Update | </span> */}
                          <span className="delete-quantity-link" onClick={() => handleRemove(item)}>
                            | Delete <i className="fa fa-trash" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="payment-summary">
                    <div className="payment-summary-title">Order Summary</div>

                    <div className="payment-summary-row">
                      <div>Items: {cartItemCount}</div>
                      <div className="payment-summary-money">${(itemsTotal / 100).toFixed(2)}</div>
                    </div>

                    <div className="payment-summary-row">
                      <div>Shipping &amp; handling:</div>
                      <div className="payment-summary-money">${shippingCost.toFixed(2)}</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                      <div>Total before tax:</div>
                      <div className="payment-summary-money">${(itemsTotal / 100).toFixed(2)}</div>
                    </div>

                    <div className="payment-summary-row">
                      <div>Estimated tax (10%):</div>
                      <div className="payment-summary-money">${(estimatedTax / 100).toFixed(2)}</div>
                    </div>

                    <div className="payment-summary-row total-row">
                      <div>Order total:</div>
                      <div className="payment-summary-money">${(orderTotal / 100).toFixed(2)}</div>
                    </div>

                    <button className="place-order-button">Proceed to checkout</button>
                  </div>
                  <AlsoLike />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
