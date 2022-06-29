import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./Post.css";

function Post(props) {
  return (
    <>
      <Container fluid>
        {console.log(props.mapDeletedData)}
        <Row lg={4}>
          <Col>
            <Card
              style={{ height: 400, width: "18rem" }}
              className="bg-secondary shadow p-3 mb-5 rounded overflow"
            >
              <Card.Img
                className="postImage"
                variant="top"
                src={
                  "https://picsum.photos/100/180?random" + Math.random() * 100
                }
                style={{ height: 200, width: 260 }}
              />
              <Card.Body>
                <Card.Title className="text-white">
                  {props.cardTitle}
                </Card.Title>
                <Card.Text className="text-white">
                  {props.cardDescription}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5000/posts?id=${props.id}`)
                      .then((data) => {})
                      .catch((error) => {
                        alert("Something went wrong");
                      });
                    props.mapDeletedData(props.id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Post;
