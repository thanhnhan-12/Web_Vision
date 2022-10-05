import React from 'react'
import Slider from 'react-slick'
import ArrowLeft from '../../../assets/svgs/arrow-left'
import ArrowRight from '../../../assets/svgs/arrow-right'
import CatSlider from './CatSlider'
import * as S from './styles'
import WomenSlider from './WomenSlider'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Banner() {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  }

  
  return (
    <S.ContainerBanner>
      <S.Banner>
        <Slider {...settings} >
          <CatSlider />

          <WomenSlider />

        </Slider>

      </S.Banner>
    </S.ContainerBanner>
  )
}

export default Banner