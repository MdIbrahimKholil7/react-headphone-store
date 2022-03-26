import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Product from './component/products/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './component/question/Question';
import "aos/dist/aos.css";
import  AOS  from 'aos';
import { useEffect } from 'react';
function App() {
    useEffect(()=>{
      AOS.init()
    },[])
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
      
    </div>
  );
}

export default App;
