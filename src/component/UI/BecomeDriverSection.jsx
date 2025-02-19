import React from "react";
import "../../Styles/BecomeDriverSection.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../../src/images/mercedes-offer.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>
          

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
