import React from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { storeUserData } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

function PlaceOrderScreen() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user, "USER");

  return (
    <div className="placeholderForm">
      <header className="placeholderHeader">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
            dispatch(storeUserData(values));
            console.log(values);
            navigate("/purchased");
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please enter your Address",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Address" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please enter your Phone Number",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Phone Number" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please enter your City",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your City" />
          </Form.Item>

          <Form.Item
            name="cipostalty"
            label="Postal"
            rules={[
              {
                required: true,
                message: "Please enter your Postal Code",
              },
              { type: Number },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Postal Code" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[
              {
                required: true,
                message: "Please enter your country",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your country" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Purchase
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default PlaceOrderScreen;
