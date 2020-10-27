import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const ProfileCard = () => {
  return (
    //COVER IMAGE
    <Card
      cover={
        <img
          alt="cover"
          src="/img/cover.png"
          style={{ padding: 7, borderRadius: "15px 15px 0 0" }}
        />
      }
      style={{ borderRadius: 15, padding: 0, zIndex: -1 }}
    >
      <Row justify="center">
        <img
          alt="avater"
          src="/img/avatar.png"
          width="120px"
          height="120px"
          style={{
            borderRadius: "50%",
            marginTop: "-100px",
            border: "5px solid #ffffff",
            zIndex: 1,
          }}
        />
      </Row>

      {/* INFO */}
      <Row justify="center">
        <Title level={3} style={{ margin: 5 }}>
          Fillip Martin Jose
        </Title>
      </Row>
      <Row justify="center">
        <Text type="secondary" style={{ fontSize: 17 }}>
          Los Angeles
        </Text>
      </Row>
      <Row justify="center">
        <div
          style={{
            backgroundColor: "#0149ef",
            width: 110,
            borderRadius: 20,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <p
            style={{
              color: "#ffffff",
              margin: 0,
              padding: "7px 12px 7px 12px",
              fontSize: 15,
            }}
          >
            Pro Level
          </p>
        </div>
      </Row>

      {/* STATS */}
      <Row justify="space-around" style={{ marginTop: 25 }}>
        <Col>
          <Text type="secondary" style={{ fontSize: 17 }}>
            Followers
          </Text>
          <p style={{ fontSize: 25 }}>980</p>
        </Col>
        <Col>
          <Text type="secondary" style={{ fontSize: 17 }}>
            Projects
          </Text>
          <p style={{ fontSize: 25 }}>142</p>
        </Col>
        <Col>
          <Text type="secondary" style={{ fontSize: 17 }}>
            Rank
          </Text>
          <p style={{ fontSize: 25 }}>129</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
