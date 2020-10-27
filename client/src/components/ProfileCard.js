import React from "react";
import { Card, Row, Col, Typography, Avatar } from "antd";

const { Title, Text } = Typography;

const ProfileCard = () => {
  return (
    <div>
      <Card
        cover={
          <img
            alt="cover"
            src="/img/cover.png"
            style={{ padding: "7px", borderRadius: "15px 15px 0 0" }}
          />
        }
        style={{ borderRadius: "15px", padding: 0, zIndex: -1 }}
      >
        <Row justify="center">
          <img
            alt="avater"
            src="/img/avatar.png"
            width="150px"
            height="150px"
            style={{
              borderRadius: "50%",
              marginTop: "-100px",
              border: "5px solid #ffffff",
              zIndex: 1,
            }}
          />
        </Row>
        <Row justify="center">
          <Title level={2} style={{ margin: "5px" }}>
            Fillip Martin Jose
          </Title>
        </Row>
        <Row justify="center">
          <Text type="secondary" style={{ fontSize: "17px" }}>
            Los Angeles
          </Text>
        </Row>

        <Row justify="space-around" style={{ marginTop: "25px" }}>
          <Col>
            <Text type="secondary" style={{ fontSize: "17px" }}>
              Followers
            </Text>
            <p style={{ fontSize: "25px" }}>980</p>
          </Col>
          <Col>
            <Text type="secondary" style={{ fontSize: "17px" }}>
              Projects
            </Text>
            <p style={{ fontSize: "25px" }}>142</p>
          </Col>
          <Col>
            <Text type="secondary" style={{ fontSize: "17px" }}>
              Rank
            </Text>
            <p style={{ fontSize: "25px" }}>129</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProfileCard;
