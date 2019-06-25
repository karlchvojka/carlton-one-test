import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderImg from "../assets/sliderImage.jpg";
import PrevIcon from '../assets/prevArrow.png';
import NextIcon from '../assets/nextArrow.png';

class Slider extends Component {
  render() {
    return (
      <Carousel
        indicators={false}
        nextIcon={<img className="nextArrow" alt="Next Arrow" src={NextIcon} />}
        prevIcon={<img className="previousArro" alt="Previous Arrow" src={PrevIcon} />}
        slide={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Welcome to the company employee rewards program</h2>
            <p>Our exclusive appreciation program is designed to recognize and reward the ongoing support and commitment of our valued employees.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Welcome to the company employee rewards program</h2>
            <p>Our exclusive appreciation program is designed to recognize and reward the ongoing support and commitment of our valued employees.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Welcome to the company employee rewards program</h2>
            <p>Our exclusive appreciation program is designed to recognize and reward the ongoing support and commitment of our valued employees.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
