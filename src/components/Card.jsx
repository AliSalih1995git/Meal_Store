import { Card, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Meta } = Card;

function DisplayCard() {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="cardContainer">
      <List
        grid={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/${item.idMeal}`}>
              <Card
                key={item.idMeal}
                hoverable
                style={{ width: 240, margin: 8 }}
                cover={<img alt={item.strArea} src={item.strMealThumb} />}
              >
                <Meta title={item.strArea} />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default DisplayCard;
