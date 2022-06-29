import React from "react";
import Post from "./Post";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
const datas = [
  {
    postedBy: "Isaac Erickson",
    posterEmail: "natoque.penatibus.et@google.ca",
    postTitle: "molestie pharetra",
    postContent: "non, sollicitudin a, malesuada id, erat.",
    date: "Jul 15, 2021",
  },
  {
    postedBy: "Lillian Cruz",
    posterEmail: "curabitur.consequat@outlook.couk",
    postTitle: "egestas",
    postContent: "sem mollis dui, in sodales elit erat vitae",
    date: "Aug 3, 2022",
  },
  {
    postedBy: "Blaze Reese",
    posterEmail: "orci.tincidunt@hotmail.couk",
    postTitle: "pede, ultrices a, auctor",
    postContent: "enim mi",
    date: "Mar 15, 2022",
  },
  {
    postedBy: "Jocelyn David",
    posterEmail: "erat.neque.non@aol.net",
    postTitle: "sed dictum eleifend,",
    postContent: "sit amet diam eu dolor",
    date: "Sep 2, 2022",
  },
  {
    postedBy: "Adara Berger",
    posterEmail: "a.facilisis.non@outlook.ca",
    postTitle: "a, aliquet vel,",
    postContent: "egestas. Sed pharetra, felis eget varius",
    date: "Jan 24, 2022",
  },
  {
    postedBy: "Hope Boyd",
    posterEmail: "turpis.in@yahoo.ca",
    postTitle: "Proin",
    postContent:
      "Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat",
    date: "Feb 7, 2023",
  },
  {
    postedBy: "Sylvester Moore",
    posterEmail: "posuere.enim@hotmail.ca",
    postTitle: "lacinia vitae, sodales at, velit.",
    postContent: "vitae, posuere at, velit. Cras lorem",
    date: "Aug 8, 2022",
  },
  {
    postedBy: "Tiger Hodge",
    posterEmail: "quis@aol.com",
    postTitle: "quis diam.",
    postContent:
      "interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt",
    date: "Nov 15, 2022",
  },
  {
    postedBy: "Madison Barlow",
    posterEmail: "fermentum.convallis@hotmail.ca",
    postTitle: "interdum enim",
    postContent: "Donec egestas. Aliquam nec enim. Nunc ut",
    date: "Aug 18, 2021",
  },
];

function PostRow(props) {
  return (
    <Container>
      <div>
        <h1>{props.title}</h1>
        <Row>
          {datas.map((singlePost) => {
            return (
              <Col lg={3} style={marginLeft:10}>
                <Post
                  cardTitle={singlePost.postTitle}
                  cardDescription={singlePost.postContent}
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
