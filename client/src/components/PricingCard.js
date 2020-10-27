import React, { useState } from "react";
import { Card, Row, Col, Typography, Button, Slider } from "antd";
import { ProfileOutlined, DashboardOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PricingCard = () => {
  const [number, setNumber] = useState(180);
  const [toggle, setToggle] = useState(true);

  const numberOnchange = (value) => {
    setNumber(value);
  };

  const hourlyToggle = () => setToggle(true);

  const fixedRateToggle = () => setToggle(false);

  return (
    <Card style={{ borderRadius: 15 }}>
      <Title level={3}>Set up your pricing</Title>
      <div style={{ width: "80%" }}>
        <Text type="secondary">
          Please set up your hourly or fix rate so that the client is aware of
          your pricing.
        </Text>
      </div>

      {/* BTN */}
      <Row justify="space-around" style={{ marginTop: 20, marginBottom: 20 }}>
        <Col span={10}>
          <Button size="large" block onClick={hourlyToggle}>
            <DashboardOutlined />
            Hourly
          </Button>
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
          <Button size="large" block onClick={fixedRateToggle}>
            <ProfileOutlined />
            Fixed
          </Button>
        </Col>
      </Row>

      {/* TOGGLE */}
      {toggle ? (
        <div>
          <Text type="secondary">
            <span
              style={{
                top: -6,
                position: "relative",
              }}
            >
              $
            </span>{" "}
            <span style={{ color: "black", fontSize: 25 }}>{number}</span> /hour
          </Text>
          <Slider min={20} max={300} value={number} onChange={numberOnchange} />
          <Row justify="space-around">
            <Col span={2}>
              <Text type="secondary">$20</Text>
            </Col>
            <Col span={20}></Col>
            <Col span={2}>
              <Text type="secondary">$300</Text>
            </Col>
          </Row>
        </div>
      ) : (
        <div style={{ marginBottom: 9 }}>
          <Title level={3}>Fixed Rate</Title>
          <Row justify="space-around">
            <Col span={7}>
              <Button size="large" block onClick={fixedRateToggle}>
                $1000
              </Button>
            </Col>
            <Col span={7}>
              <Button size="large" block onClick={fixedRateToggle}>
                $2000
              </Button>
            </Col>
            <Col span={7}>
              <Button size="large" block onClick={fixedRateToggle}>
                $3000
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </Card>
  );
};

export default PricingCard;
