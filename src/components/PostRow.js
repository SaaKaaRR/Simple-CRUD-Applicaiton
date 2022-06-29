import React from "react";
import Post from "./Post";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

function PostRow(props) {
  return (
    <Container>
      {console.log(props)}

      <div>
        <h1>{props.rowTitle}</h1>
        <Row>
          {props.data.map((singlePost) => {
            return (
              <Col lg={3}>
                <Post
                  id={singlePost._id}
                  cardTitle={singlePost.title}
                  cardDescription={singlePost.message}
                  mapDeletedData={props.mapDeletedData}
                ></Post>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default PostRow;
