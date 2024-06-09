import bgVideo from '../../assets/shop.mp4';
import './promotion.css';

const Promotion = () => {
  return (
    <div className="promotion-card">
      <video className="promotion-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
       
      </video>
      <div className="promotion-content">
        <h2>Special Promotion</h2>
        <p>Get 70% off on selected items!</p>
        <a href="/promotions" className="promotion-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Promotion;
