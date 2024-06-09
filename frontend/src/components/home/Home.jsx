import { useGetAllProductsQuery } from '../../redux/productsApi';
import Promotion from '../../components/promotion/Promotion';
import './home.css';


const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      {isLoading ? (
        <div className="loading-container">
          {/* <p><Loading />Loading!!!</p> */}
        </div>
      ) : error ? (
        <div className="loading-container">
          <p>An error occurred...</p>
        </div>
      ) : (
        <>
          <div className="main">
            {/* <Categories /> */}
            <div className="products-flex">
              {data?.map((product) => (
                <div key={product.id} className="product-container">
                  <div className="product-image-container">
                    <img className="product-image" src={product.image} alt={product.name} />
                  </div>
                  <div className="product-name limit-text-to-2-lines">{product.name}</div>
                  <div className="product-rating-container">
                    <img className="product-rating-stars" src={`/ratings/rating-${product.rating.stars * 10}.png`} alt={`${product.rating.stars} stars`} />
                    <div className="product-rating-count link-primary">{product.rating.count}</div>
                  </div>
                  <div className="product-price">${(product.price / 100).toFixed(2)}</div>
                  <div className="product-quantity-container"></div>

                  <button  className="add-to-cart-button">
                    Add to Cart
                  </button>
                  <button  className="add-to-wishlist-button">
                    <i className="fas fa-heart wishlist-icon"></i>
                  </button>
                </div>
              ))}
              <Promotion />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;