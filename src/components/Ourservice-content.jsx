import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import drilling from "../image/drilling.svg";
import drill from "../image/drill.svg";
import well from "../image/well.svg";
import "animate.css";

function Outcontent() {
  return (
    <Container>
      <div className="fontdesign ">
        <Row className="g-0">
          <Col  md={4} >
            <div className="out1 pt-5  text-center animate__animated animate__fadeInLeft">
              <Card.Img
                variant="left"
                src={drill}
                width="110px"
                height="110px"
                rounded
                className="rotate-img mb-4"  // Rotating image
              
              />
              <div className="pt-4  text-white fw-bolder animate__animated animate__zoomIn">
            4.5 & 5 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4 "> </h5>
                <p className="px-4 pt-2">
                 4.5 and 5 inches are the most common diam0ter for individual homes and small buildings. 
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4} >
            <div className="out2 pt-5 text-center animate__animated animate__fadeInUp">
              <Card.Img
                variant="left"
                src={drilling}
                width="110"
                height="110"
                rounded
                className="rotate-img mb-4"
              />
              <div className=" pt-4 text-white fw-bolder animate__animated animate__zoomIn">
      6.5 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4"> </h5>
                <p className="px-4 pt-2">
                  6.5 inch are ideal for large apartments or housing complexes where higher output is needed.
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4}>
            <div className="out3 pt-5 text-center animate__animated animate__fadeInRight">
              <Card.Img
                variant="left"
                src={well}
                width="110"
                height="110"
                rounded
                className="rotate-img mb-4"
              />
              <div className=" pt-4 text-white fw-bolder animate__animated animate__zoomIn">
                8 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4"> </h5>
                <p className="px-4 pt-2">
                 8inch borewell is typically drilled for higher water yield in domestic, agricultural, and industrial establishments. 
                </p>
              </Card.Text>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Outcontent;
