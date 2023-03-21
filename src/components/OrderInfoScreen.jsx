import React, { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSelectedProduct } from "../redux/actions/productActions";

function OrderInfoScreen() {
  const user = useSelector((state) => state.user);
  const { fullName } = user;
  console.log(user);
  const product = useSelector((state) => state.product);
  const { strArea, strCategory, strMeal } = product[0];

  return (
    <div className="orderInfoContainer">
      <h2>Purchased</h2>
      <Card
        title={`Hai ${fullName} your Order is Successfull`}
        bordered={false}
        style={{
          width: 600,
        }}
      >
        <p> Name : {strArea}</p>
        <p> Category : {strCategory}</p>
      </Card>
    </div>
  );
}

export default OrderInfoScreen;
