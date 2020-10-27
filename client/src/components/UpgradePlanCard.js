import React from "react";
import { Card, Row, Col, Typography, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const UpgradePlanCard = () => {
  return (
    <div className="box-a">
      <Card
        style={{
          borderRadius: 15,
          paddingTop: 15,
          height: "100%",
        }}
      >
        <Title level={3}>Upgrade your plan</Title>
        <div style={{ width: "80%" }}>
          <Text type="secondary" style={{ fontSize: 16 }}>
            Please make the payment to start enjoying all the features of our
            premium plan as soon as possible.
          </Text>
        </div>

        <Card
          style={{
            border: "2px solid #175BF8",
            marginTop: 25,
            marginBottom: 45,
            backgroundColor: "#E4ECF8",
          }}
        >
          <Row justify="space-between">
            <Col span={4}>
              <img
                src="/img/icon-3.png"
                alt="icon"
                width="80px"
                style={{ borderRadius: 5 }}
              />
            </Col>
            <Col span={10}>
              <Title level={4}>Small Business</Title>
              <Title level={5} style={{ margin: 0, color: "#175BF8" }}>
                CHANGE PLAN
              </Title>
            </Col>
            <Col span={7} style={{ marginTop: 10 }}>
              <Text type="secondary">
                <span
                  style={{
                    top: -6,
                    position: "relative",
                  }}
                >
                  $
                </span>{" "}
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
        <Row
          justify="space-between"
          style={{ marginBottom: 20, marginTop: 25 }}
        >
          <Col span={4}>
            <img src="/img/icon-1.png" alt="icon" width="70px" />
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
        <Row justify="space-between" style={{ marginBottom: 40 }}>
          <Col span={4}>
            <img src="/img/icon-2.png" alt="icon" width="70px" />
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

        <Title level={5} style={{ color: "#175BF8" }}>
          ADD PAYMENT METOD{" "}
        </Title>
        <Input
          size="large"
          placeholder="Email address"
          style={{ padding: 12, marginBottom: 25, marginTop: 25 }}
        />
        <Button type="primary" size="large" block style={{ height: 70 }}>
          Proceed to payment
          <ArrowRightOutlined />
        </Button>
      </Card>
    </div>
  );
};

export default UpgradePlanCard;
