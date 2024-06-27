import { useGetAllProductsQuery } from '../../redux/productsApi';
import './also-like.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import alsoLike from '../../../../backend/also-like';
import Loading from '../../components/loading/Loading';

const AlsoLike = () => {
  const { error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };


  return (
    <div className="cart-container">
      {isLoading ? (
        <div className="cart-loading-container">
          <p>
            <Loading />
            Loading!!!
          </p>
        </div>
      ) : error ? (
        <div className="cart-loading-container">
          <p>An error occurred...</p>
        </div>
      ) : (
        <>
          <h6 className="also-like-title">You may also like!</h6>
          <div className="card ">
            {alsoLike.map((product) => (
              <div className="product-container also-like-card" key={product.id}>
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="details-container">
                  <h3>{product.name}</h3>
                  <div className="rating"></div>
                  <div className="price">${(product.price / 100).toFixed(2)}</div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AlsoLike;
