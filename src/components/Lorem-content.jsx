import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { FaGlobeAfrica, FaBuilding, FaBell } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoPieChartSharp } from "react-icons/io5";
// import { FaBagShopping } from "react-icons/fa6";

import "animate.css";

const CardComponent = ({ title, iconSize, Icon, color, hoverAnimation,description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="card-style border-0 text-center p-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div
        className={`d-inline-block animate__animated ${
          isHovered ? hoverAnimation : ""
        }`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
      </div>
      <Card.Body>
        <Card.Title className="fontdesign text-center">{title}</Card.Title>
        <Card.Text className="fontdesign text-center">
       {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


function Loremcontent() {
const cardData = [
  {
    title: "Customised Borewell Drilling",
    description: "We offer customized borewell drilling in sizes 4.5\", 5\", 6.5\", and 8\" up to 1600 ft deep.",
  },
  {
    title: "Borewell Flushing & Cleaning",
    description: "We do borewell cleaning & flushing services to remove blockages, contamination, sediment, debris, silts and algae.",
  },
  {
    title: "Borewell Extension & Expansion",
    description: "We do borewell extension & expansion of 4.5 inch borewell to 6.5 inch for steady water supply during dry season or accommodate a larger pump. ",
  },
  {
    title: "Agri Land Net Bore & Side Bore Services",
    description: "We provide drilling horizontally from the main borewell into the surrounding water-bearing fissures and ensure a more reliable water supply.",
  },
  {
    title: "Solar Customized Drilling",
    description: "We serve clients with a specialized process of drilling piles into the ground to support the mounting structures for solar panels.",
  },
  {
    title: "Road Crossing Work",
    description: "We do horizontal directional drilling in road crossing for water, electrical, telephone and drainage lines without damaging the road.   ",
  },
];
  return (
    <div className="lorem text-center">
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} >
              <CardComponent {...card} />
            </Col>
          ))}
        </Row>
      </Container>


    </div>
  );
}

export default Loremcontent;
