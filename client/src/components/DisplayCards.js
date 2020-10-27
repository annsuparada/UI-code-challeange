import React from "react";
import UpgradePlanCard from "./UpgradePlanCard";
import { Card, Row, Col, Typography, Input, Button, Avatar } from "antd";

const { Title, Text } = Typography;
const DisplayCards = () => {
  return (
    <div className="display-container">
      <Row justify="space-around">
        <Col span={10}>
          <UpgradePlanCard />
        </Col>

        <Col span={10}>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayCards;
