import styled from "styled-components";
import Bg from '../../../../assets/SignUpBg.png'


export const Wrapper = styled.div`
  padding: 107px 241px;
  background: #F6F6F6;
`

export const ContainerSignUp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  width: 1034px;
  height: 649px;
  box-shadow: 6px 6px #e5e5e5;
  background: #fff;
`

export const SignUp = styled.div`
  padding: 70px 54.33px 0 32.33px;
`

export const HeaderLogo = styled.div`
  padding-bottom: 3.875em;
  img {
    width: 9.5rem;
    height: 2.25rem;
  }
`

export const SignUpForm = styled.form`
  h4,p {
    margin: 0;
  }  

  h4 {
    font-weight: 500;
    font-size: 24px;
    padding-bottom: 20.25pt;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #A6A0A0;
    margin: 5px 0 30px;
  }
`

export const SignUpFormEnter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SignUpFormLabel = styled.div`
  display: grid;
`

export const SignUpFormInput = styled.div``

export const BtnSignUp = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #FFFDFD;
  background: linear-gradient(269.46deg, #A36DA2 0.24%, #59A0C5 96.9%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  margin: 2.3125em 0 2.0625em;
  cursor: pointer;
`

export const LinkSignUp = styled.div`
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

export const SignUpBg = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: auto;
  height: 649px;
  border-radius: 0 5px 5px 0;
`