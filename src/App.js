import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FoodCategory from "./pages/FoodCategory/FoodCategory";
import Bar from "./pages/Bar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import LoginSignup from "./pages/LoginSignup/LoginSingup";
import Order from "./pages/Order";
import Verify from "./pages/Verify/Verify";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Bar/>}/>
          <Route path='/rolls' element={<FoodCategory category='rolls'/>}/>
          <Route path='/pizza' element={<FoodCategory category='pizza'/>}/>
          <Route path='/burgers' element={<FoodCategory category='burgers'/>}/>
          <Route path='/drinks' element={<FoodCategory category='drinks'/>}/>
          <Route path='/snacks' element={<FoodCategory category='snacks'/>}/>
          <Route path='/soups' element={<FoodCategory category='soups'/>}/>
          <Route path='/salads' element={<FoodCategory category='salads'/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
