import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import WishList from './components/wishlist/WishList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/wishlist" element={<WishList />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App