import styled from "styled-components";
import Women from '../../../../assets/BannerWomenSlider.png'

export const ContainerWomenSlider = styled.div`
  background-image: url(${Women});
  background-repeat: no-repeat;
  background-size: cover;
  height: 730px;
`

export const WomenSlider = styled.div`
  width: 36rem;
  font-family: 'Metrophobic';
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding-top: 7em;
  padding-left: 0.5em;
  
  p {
    font-weight: 400;
    span {
      font-family: 'Pacifico' ;
      font-size: 30px;
      line-height: 53px;
      color: #EF3A7F;
    }
  }

  h4 {
    font-weight: 100;
    font-size: 24px;
    padding-top: 31px;
    padding-left: 14em;
    line-height: 30px;
  }
  
  p, h4 {
    margin: 0;
  }
`