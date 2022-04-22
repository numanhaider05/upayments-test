import logo from './logo.svg';
import './App.css';
import Header from './shared/components/header/header';
import Products from './pages/dashboard/products';
import ProductDetail from './pages/productdetail/productdetail';
import CreateProduct from './pages/newproduct/createproduct';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<Products />}></Route>
            <Route path=':productId' element={<ProductDetail />}></Route>
            <Route path='NewProduct' element={<CreateProduct />}></Route>
        {/* <Route path="*"
               element={
             <main style={{ padding: "1rem" }}>
                   <h1>Routing is not set for this page</h1>
            </main>
         }
       /> */}
        {/* <Products /> */}
        {/* <ProductDetail /> */}
        {/* <CreateProduct /> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;


