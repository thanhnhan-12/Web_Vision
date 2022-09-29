import React, { useState } from 'react'
import * as S from './styles'
import Logo from '../../../../assets/HeaderLogo.png'

function Header() {
  const [changeColor, setChangeColor] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const handleClick = () => {
    setChangeColor(!changeColor);
    setChangeText(!changeText);
  };

  return (
    <S.ContainerHeader>
      <S.Header>
        <S.HeaderLogo>
          <img src={Logo} alt="" />
        </S.HeaderLogo>
      </S.Header>

      <S.HeaderNav>
        <S.HeaderSubNav>
          <li><a href="/">Home</a></li>
          <li><a href="/">Category</a></li>
          <li><a href="/">Location</a></li>
          <li><a href="/">FAQ</a></li>
        </S.HeaderSubNav>

        <S.HeaderBtnSignUp
          style={{
            backgroundColor: changeColor ? 'salmon' : '',
            
          }}
          onClick={handleClick}
        >
           {changeText ? "Sign In" : "Sign Up" }
        </S.HeaderBtnSignUp>

      </S.HeaderNav>
    </S.ContainerHeader>
  )
}

export default Header