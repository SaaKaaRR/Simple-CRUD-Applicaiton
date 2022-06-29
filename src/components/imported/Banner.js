
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel fade>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={
            "https://picsum.photos/200/380?random" + Math.random() * 100
          }
        alt="First slide" style={{height:300,width:200}}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={
            "https://picsum.photos/200/380?random" + Math.random() * 100
          }
        alt="Second slide" style={{height:300,width:200}}
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={
            "https://picsum.photos/200/380?random" + Math.random() * 100
          }
        alt="Third slide"
        style={{height:300,width:200}}
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  );
}

export default Banner;
