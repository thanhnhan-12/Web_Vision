import styled from "styled-components";

export const ContainerFooter = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 240px;
  padding: 30px 156px 0;
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 5fr 5fr;
  grid-row-gap: 9.8px;
`

export const FooterItems = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  &:last-child {
    display: flex;
    align-items: center;
  }

  .Sub-Items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 13rem;
  }

  p {
    margin: 0;
    margin-top: 3px
  }
`

export const FooterService = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`

export const FooterDes = styled.div`
  margin-top: 9px;  
  
`
export const FooterDesList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
      span {
      font-weight: 300;
      font-size: 15px;
      padding-left: 21px;
    }
  }

  li:nth-child(2) {
    margin: 0 20px;
  }
`

export const FooterIcon = styled.div`
  img {
    margin-left: 26px;
  }
`
