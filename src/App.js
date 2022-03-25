import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Product from './component/products/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
    </div>
  );
}

export default App;
