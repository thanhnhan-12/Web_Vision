import React from 'react'
import * as S from './styles'
import Logo from '../../../../assets/HeaderLogo.png'
import Email from '../../Input/Email'
import Pass from '../../Input/Pass'


function SignUp() {
  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.SignUp>
          <S.HeaderLogo>
            <img src={Logo} alt="" />
          </S.HeaderLogo>

          <S.SignUpForm>
            <h4>REGISTER</h4>
            <Email />
            <Pass />
            <S.BtnSignUp>Register</S.BtnSignUp>
            <S.LinkSignUp>
              <p>Already have an account? <a href="/">Sign In</a></p>
            </S.LinkSignUp>
          </S.SignUpForm>
        </S.SignUp>

        <S.SignUpBg></S.SignUpBg>

      </S.ContainerSignUp>
    </S.Wrapper>
  )
}

export default SignUp