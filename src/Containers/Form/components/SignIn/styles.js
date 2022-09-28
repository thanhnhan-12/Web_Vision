import styled from "styled-components";
import Bg from '../../../../assets/SignInBg.png'

export const Wrapper = styled.div`
  padding: 107px 241px;
  background: #F6F6F6;
`

export const ContainerSignIn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  width: 1034px;
  height: 649px;
  box-shadow: 6px 6px #e5e5e5;
  background: #fff;
`

export const SignIn = styled.div`
  padding: 70px 54.33px 0 32.33px;
`

export const HeaderLogo = styled.div`
  padding-bottom: 8.125em;
  img {
    width: 9.5rem;
    height: 2.25rem;
  }
`

export const SignInForm = styled.form`
  h4,p {
    margin: 0;
  }  

  h4 {
    font-weight: 500;
    font-size: 24px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #A6A0A0;
    margin: 5px 0 30px;
  }
`

export const BtnSignIn = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #FFFDFD;
  background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  margin: 2.3125em 0 2.0625em;
`

export const LinkSignIn = styled.div`
  margin: 0;
  text-align: center;
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0666F7;
    text-decoration: none;
  }
`

export const SignInBg = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: auto;
  height: 649px;
  border-radius: 0 5px 5px 0;
`