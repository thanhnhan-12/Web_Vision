import styled from "styled-components";
import Cat from '../../../../assets/BannerCatSlider.png'

export const ContainerCatSlider = styled.div`
  background-image: url(${Cat});
  background-repeat: no-repeat;
  background-size: cover;
  height: 730px;
`

export const CatSlider = styled.div`
  padding-top: 71px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  color: #FFFFFF;
  p {
    font-size: 48px;
    margin: 0;
    span {
      font-size: 36px;
      display: block;
    }
  }
`
