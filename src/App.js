import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ProductDetalil from './Component/ProductDetalil';
import Cart from './Component/Cart';
function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/product/:id' element={<ProductDetalil/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>

     </Routes>
    </>
  );
}

export default App;
