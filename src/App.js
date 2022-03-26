import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Product from './component/products/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './component/question/Question';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
      
    </div>
  );
}

export default App;
