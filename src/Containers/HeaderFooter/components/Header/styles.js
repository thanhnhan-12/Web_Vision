import styled from "styled-components";

export const ContainerHeader = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 44px 17px 81px;
  
`
export const Header = styled.div``

export const HeaderLogo = styled.div`
  img {
    width: 9.5rem;
    height: 2.25rem;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderSubNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  li {
    list-style-type: none;
    margin: 0 49px;
    font-weight: 500;
    font-size: 18px;
    a {
      color: #7A7A7A;
      text-decoration: none;
    }
  }
`

export const HeaderBtnSignUp = styled.button`
  width: 8.625rem;
  height: 2.875rem;
  background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

`