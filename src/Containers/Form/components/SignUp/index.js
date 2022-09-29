import React from 'react'
import * as S from './styles'
import Logo from '../../../../assets/HeaderLogo.png'
import Email from './Input/Email'
import Pass from './Input/Pass'
import Name from './Input/Name'
import Phone from './Input/Phone'



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
            <S.SignUpFormEnter>
              <S.SignUpFormLabel>
                <label htmlFor="">Name</label>
                <label htmlFor="">Email</label>
                <label htmlFor="">Phone</label>
                <label htmlFor="">Password</label>
                <label htmlFor="">Confirm Password</label>
              </S.SignUpFormLabel>

              <S.SignUpFormInput>
                <Name />
                <Email />
                <Phone />
                <Pass />
                <Pass />
              </S.SignUpFormInput>
            </S.SignUpFormEnter>

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