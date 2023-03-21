import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSelectedProduct } from "../redux/actions/productActions";

function Header() {
  const dispatch = useDispatch();
  const clickHomeHandler = () => {
    dispatch(removeSelectedProduct());
  };
  return (
    <div className="appHeader">
      <Link to="/">
        <Menu
          mode="horizontal"
          items={[
            {
              label: (
                <HomeFilled
                  style={{ fontSize: "36px" }}
                  onClick={clickHomeHandler}
                />
              ),
              key: "home",
            },
          ]}
        />
      </Link>
      <h1>Meal Store</h1>
      <div></div>
    </div>
  );
}

export default Header;
