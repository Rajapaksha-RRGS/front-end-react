import "./App.css";
import Header from "./components/header.jsx";
import Usestate from "./components/usestate.jsx";
import ProductCarts from "./components/productCarts.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="test2">
        <ProductCarts
          name="apple leptop"
          description="High-performance laptop"
          price="$1299.99"
          picture="https://picsum.photos/id/1/200/300"
        />
        <ProductCarts
          name="dell leptop"
          description="High-performance laptop"
          price="$1399.99"
          picture="https://picsum.photos/id/20/200/300"
        />
        <ProductCarts
          name="hp leptop"
          description="High-performance laptop"
          price="$1199.99"
          picture="https://picsum.photos/id/30/200/300"
        />
        <ProductCarts
          name="lenovo leptop"
          description="High-performance laptop"
          price="$1099.99"
          picture="https://picsum.photos/id/40/200/300"
        />
      </div>
    </div>
  );
}

export default App;
