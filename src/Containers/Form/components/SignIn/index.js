import React from 'react'
import * as S from './styles'
import Logo from '../../../../assets/HeaderLogo.png'
import Email from './Input/Email'
import Pass from './Input/Pass'



function SignIn() {
  return (
    <S.Wrapper>
      <S.ContainerSignIn>
        <S.SignIn>
          <S.HeaderLogo>
            <img src={Logo} alt="" />
          </S.HeaderLogo>

          <S.SignInForm>
            <h4>SIGN IN</h4>
            <p>Pleas sign in to continue</p>
            <Email/>
            <Pass />
            <S.BtnSignIn>Sign In</S.BtnSignIn>
            <S.LinkSignIn>
              <p>Haven't Registered? <a href="/">Sign Up </a></p> 
            </S.LinkSignIn>
          </S.SignInForm>
        </S.SignIn>

        <S.SignInBg></S.SignInBg>

      </S.ContainerSignIn>
    </S.Wrapper>
  )
}

export default SignIn