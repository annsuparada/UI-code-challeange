import React from "react";
import { Card, Row, Col, Typography, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const UpgradePlanCard = () => {
  return (
    <Card style={{ borderRadius: "15px" }}>
      <Title level={3}>Upgrade your plan</Title>
      <Text type="secondary">
        Please make the payment to start enjoying all the features of our
        premium plan as soon as possible.
      </Text>

      <Card
        style={{
          borderColor: "#0149ef",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <Row justify="space-between">
          <Col span={4}>
            <img
              src="/img/icon-3.png"
              width="80px"
              style={{ borderRadius: "5px" }}
            />
          </Col>
          <Col span={10}>
            <Title level={4}>Small Business</Title>
            <Title level={5} style={{ margin: 0, color: "#0149ef" }}>
              CHANGE PLAN
            </Title>
          </Col>
          <Col span={7} style={{ marginTop: "10px" }}>
            <Text type="secondary">
              ${" "}
              <span
                style={{ color: "black", fontSize: 25, fontWeight: "bold" }}
              >
                8,350
              </span>{" "}
              /year
            </Text>
          </Col>
        </Row>
      </Card>

      <Title level={4}>Payment Details</Title>
      <Row justify="space-between" style={{ marginBottom: "20px" }}>
        <Col span={4}>
          <img src="/img/icon-1.png" width="70px" />
        </Col>
        <Col span={17}>
          <Title level={4} style={{ margin: 0 }}>
            Credit card
          </Title>
          <Text type="secondary"> 2844 xxxx xxxx 8880</Text>
        </Col>
        <Col span={3}>
          <Input placeholder="CVC" />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginBottom: "30px" }}>
        <Col span={4}>
          <img src="/img/icon-2.png" width="70px" />
        </Col>
        <Col span={17}>
          <Title level={4} style={{ margin: 0 }}>
            Credit card
          </Title>
          <Text type="secondary"> 8890 xxxx xxxx 1234</Text>
        </Col>
        <Col span={3}>
          <Input placeholder="CVC" />
        </Col>
      </Row>

      <Title level={5} style={{ color: "#0149ef" }}>
        ADD PAYMENT METOD{" "}
      </Title>
      <Input
        size="large"
        placeholder="Email address"
        style={{ padding: 12, marginBottom: 18, marginTop: 18 }}
      />
      <Button type="primary" size="large" block style={{ height: 55 }}>
        Proceed to payment
        <ArrowRightOutlined />
      </Button>
    </Card>
  );
};

export default UpgradePlanCard;
