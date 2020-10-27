import React from "react";
import UpgradePlanCard from "./UpgradePlanCard";
import ProfileCard from "./ProfileCard";
import PricingCard from "./PricingCard";

import { Row, Col } from "antd";

const DisplayCards = () => {
  return (
    <div className="display-container">
      {/* <Row justify="space-around">
        <Col span={12}>
          <UpgradePlanCard />
        </Col>

        <Col span={8}>
          <ProfileCard />
          <PricingCard />
        </Col>
      </Row> */}

      <div className="display-grid">
        <UpgradePlanCard />
        <ProfileCard />
        <PricingCard />
      </div>
    </div>
  );
};

export default DisplayCards;
