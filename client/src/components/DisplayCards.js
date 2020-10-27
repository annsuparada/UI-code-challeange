import React from "react";
import UpgradePlanCard from "./UpgradePlanCard";
import ProfileCard from "./ProfileCard";
import PricingCard from "./PricingCard";

import { Row, Col } from "antd";

const DisplayCards = () => {
  return (
    <div className="display-container">
      <Row justify="space-around">
        <Col span={12}>
          <UpgradePlanCard />
        </Col>

        <Col span={10}>
          <ProfileCard />
          <PricingCard />
        </Col>
      </Row>
    </div>
  );
};

export default DisplayCards;
