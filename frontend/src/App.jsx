import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App