import React from 'react'
import pic1 from '../../bannerImages/1000_F_357701907_PKMDvvlIcv6sdK2uPF72r4PXkp5olaB1.jpg'
import pic2 from '../../bannerImages/tutor-with-litthe-girl-studying-home_1157-33817.jpg'
import pic3 from '../../bannerImages/photo-mixed-race-boy-girl-classmates-watch-tutorial-video-together-laptop-computer_273609-28629.jpg'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Banner
