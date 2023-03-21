import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import SingleProduct from "./components/SingleProduct";
import OrderInfoScreen from "./components/OrderInfoScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/:productId" element={<SingleProduct />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/purchased" element={<OrderInfoScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
