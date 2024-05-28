import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './Home.css';

function Home() {
  return (
    <>

      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src="img/Shopping3.jpeg" alt="Shopping" style={{ width: '100%', height: '80vh', marginBottom: '30px' }} />
          <Carousel.Caption style={{color:'#f24',fontWeight:'Bold'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src="img/Shopping2.jpeg" alt="Shopping" style={{ width: '100%', height: '80vh', marginBottom: '30px' }} />
          <Carousel.Caption style={{ color: '#f24', fontWeight: 'Bold' }}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src="img/Shopping.jfif" alt="Shopping" style={{ width: '100%', height: '80vh', marginBottom: '30px' }} />
          <Carousel.Caption style={{ color: '#f24', fontWeight: 'Bold' }}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      

      <div className="selection">
        Please select your Category
      </div>

      <div className='Devices'>
        
        <Link to='/laptop' className='Devices-list'>
          <h1>Laptops</h1>
          <img src="img/laptop/01Acer_Predator TRITON 300 SE_54500.jpg" alt="laptop" />
        </Link>

        <Link to='/phone' className='Devices-list'>
          <h1>Cell Phones</h1>
          <img src="img/Cell Phone/01ُSumsung_Galaxy A54 5G_15299.jpg" alt="Cell Phone" />
        </Link>

        <Link to='/furniture' className='Devices-list'>
          <h1>Furnitures</h1>
          <img src="img/Furniture/01TV_Dewo_DSL-50SU1720_17590.jpg" alt="Furnitures" />
        </Link>

        <Link to='/supermarket' className='Devices-list'>
          <h1>Laptops</h1>
          <img src="img/Supermarket/04_Rangarang_250000.jpg" alt="Supermarket" />
        </Link>
      </div>
    </>
  )
}

export default Home