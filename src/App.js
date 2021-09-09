import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import ProductDetails from "./components/ProductDetail/ProductDetail";
import Android from "./pages/Android";
import Camera from "./pages/Camera";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Laptop from "./pages/Laptop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Category Route */}
          <Route exact path="/android">
            <Android />
          </Route>
          <Route exact path="/laptop">
            <Laptop />
          </Route>
          <Route exact path="/camera">
            <Camera />
          </Route>
          {/* Product Details */}
          <Route exact path="/:category/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
