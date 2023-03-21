import React, { useEffect } from "react";
import DisplayCard from "./Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

function HomeScreen() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const feetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const result = response.data.meals.slice(0, 10);
      // console.log("result", result);
      dispatch(setProducts(result));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    feetchProducts();
  }, []);

  // console.log("prod", products);
  return (
    <div>
      <DisplayCard />
    </div>
  );
}

export default HomeScreen;
