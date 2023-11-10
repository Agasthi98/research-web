import Card from "react-bootstrap/Card";
import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";

function BasicExample() {
  return (
    <>
      <div
        className="card-view"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          justifyContent: "center",
          margin: "5rem 0",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Img1} />
          <Card.Body>
            <Card.Title style={{ fontSize: "23px", fontWeight: "500" }}>
              {" "}
              Dr. Anuradha Jayakody
            </Card.Title>
            <Card.Text style={{ fontWeight: "500" }}>
              Head | Graduate Studies | Assistant Professor <br /> FACULTY OF
              COMPUTING | COMPUTER SYSTEMS ENGINEERING
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Img2} />
          <Card.Body>
            <Card.Title
              style={{ fontSize: "23px", fontWeight: "500", marginTop: "7px" }}
            >
              Ms. Narmada Gamage
            </Card.Title>
            <Card.Text style={{ fontWeight: "500" }}>
              Lecturer
              <br />
              FACULTY OF COMPUTING | COMPUTER SYSTEMS ENGINEERING
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
