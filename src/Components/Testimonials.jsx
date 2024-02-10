import { Card } from "react-bootstrap";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <>
      <hr></hr>
      <div className="primary">
        <p className="test">Testimonials</p>
        <div className="cards">
          <div>
            <Card className="testi">
              <Card.Body>
                <h4 className="test-names">Prathee!</h4>
                <div className="italic">
                  <i>
                    Loved it! The fabric is so much better than I expected it to
                    be!
                  </i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="testi">
              <Card.Body>
                <h4 className="test-names">Ravee</h4>
                <div className="italic">
                  <i>
                    The details on the prints are crazy af! The puff is soo
                    good!!!
                  </i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="testi">
              <Card.Body>
                <h4 className="test-names">Priya</h4>
                <div className="italic">
                  <i>
                    Lucid world is my favourite tee in the closet right now!!{" "}
                  </i>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
