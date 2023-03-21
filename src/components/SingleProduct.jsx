import React, { useEffect } from "react";
import { Col, Row, Image, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

function SingleProduct() {
  const params = useParams();
  const { productId } = params;
  const product = useSelector((state) => state.product);
  const {
    0: {
      strArea,
      strMealThumb,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
    } = {},
  } = product;

  const dispatch = useDispatch();

  const navigate = useNavigate();
  console.log(productId, "PRODUCT ID");

  const fetchSingleProducts = async (id) => {
    console.log(id, "ID");
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log("FETCH");
      const result = response.data.meals;
      dispatch(selectedProduct(result));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchSingleProducts(productId);
  }, [productId]);

  console.log(product, "productName");

  const clickHandler = () => {
    navigate("/placeorder");
  };

  return (
    <div>
      <Row>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image
            width={400}
            className="singleImage"
            src={strMealThumb}
            alt={strArea}
          />
        </Col>
        <Col xs={24} sm={12} md={16} lg={18}>
          <Row className="imageDescription">
            <Col span={16}>
              <h2>Description</h2>
              <p className="imageDescriptionContant">{strInstructions}</p>
            </Col>
            <Col span={16}>
              <h2>Increaseance</h2>
              <p>{strIngredient1}</p>
              <p>{strIngredient2}</p>
              <p>{strIngredient3}</p>
              <p>{strIngredient4}</p>
            </Col>
            <Col span={24}>
              <Button type="primary" size={20} onClick={clickHandler}>
                Checkout
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SingleProduct;
