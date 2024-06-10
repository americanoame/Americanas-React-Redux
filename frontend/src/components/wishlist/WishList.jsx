import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList, addToCart } from '../../redux/cartSlice';
import { useGetAllProductsQuery } from '../../redux/productsApi';
import Loading from '../../components/loading/Loading';

import img1 from '../../assets/chair.jpg';
import img2 from '../../assets/chair1.jpg';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './wishlist.css';

const WishList = () => {
  const { error, isLoading } = useGetAllProductsQuery();
  const wishList = useSelector((state) => state.cart.wishListItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromWishList = (item) => {
    dispatch(removeFromWishList({ id: item.id, name: item.name }));
  };

  const handleAddToCart = (item) => {
    const isProductInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isProductInCart) {
      toast.warning(`${isProductInCart.name} was already added back to cart`, {
        position: 'top-center',
      });
    } else {
      dispatch(addToCart(item));
      dispatch(removeFromWishList({ id: item.id, name: item.name }));
    }
  };

  return (
    <div className="wish-container">
      {isLoading ? (
        <div className="wish-loading-container">
          <p>
            <Loading />
            Loading!!!
          </p>
        </div>
      ) : error ? (
        <div className="loading-container">
          <p>An error occurred...</p>
        </div>
      ) : (
        <div>
          {wishList.length === 0 ? (
            <div className="empty-cart">
              <p>
                Your wish list is currently empty<span className="moji">∅</span>
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
              <h2>WishList</h2>
              <div className="wish-list-grid">
                <div className="wish-list-summary">
                  {wishList.map((item) => (
                    <div className="wish-list-item-container card" key={item.id}>
                      <div className="wish-list-item-details-grid">
                        <img className="wish-product-img" src={item.image} alt={item.name} />

                        <div className="wish-list-item-details">
                          <div className="wish-product-name">{item.name}</div>
                          <div className="wish-product-price">${(item.price / 100).toFixed(2)}</div>

                          <div>
                            <span className="link-success" onClick={() => handleAddToCart(item)}>
                              Add to cart |
                            </span>
                            <span className="link-danger" onClick={() => handleRemoveFromWishList(item)}>
                              Remove <i className="fa fa-trash" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="promo-title-container">
                  <div className="promo-image-container">
                    <div>
                      <img src={img1} alt="chair" />
                    </div>
                    <div>
                      <img src={img2} alt="chair" />
                    </div>
                  </div>
                  <div className="promo-text">
                    <p>Americanas.com</p>
                    <h5>COMING UP NEW NEXT</h5>
                    <h6>ORIGINALS PRODUCT FOR YOU</h6>
                    <small>Product from the season 2023 and 2022 are not avalible for return</small>
                  </div>

                  <div>
                    <Link to="/" className="continue-shoppingp">
                      ← Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WishList;
