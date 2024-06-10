import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../redux/cartSlice';
import './categories.css';

const Categories = () => {
  const [activeButton, setActiveButton] = useState('All Products');

  const dispatch = useDispatch();

  const handleButtonClick = (category) => {
    console.log(`Category button clicked: ${category}`);
    setActiveButton(category);

    dispatch(setSelectedCategory(category === 'All Products' ? null : category));
  };

  return (
    <div className="cta-container">
      <div className="cta-btn">
        <button className={`all-products-button ${activeButton === 'All Products' ? 'active-btn' : ''}`} onClick={() => handleButtonClick('All Products')}>
          All Products
        </button>
        <button className={activeButton === 'kitchen' ? 'active-btn' : ''} onClick={() => handleButtonClick('kitchen')}>
          Kitchen
        </button>
        <button className={activeButton === 'bathroom' ? 'active-btn' : ''} onClick={() => handleButtonClick('bathroom')}>
          Bathroom
        </button>
        <button className={activeButton === 'room' ? 'active-btn' : ''} onClick={() => handleButtonClick('room')}>
          Room
        </button>
      </div>
    </div>
  );
};

export default Categories;
