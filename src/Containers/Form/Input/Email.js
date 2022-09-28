import React from 'react'
import styled from 'styled-components'
import Mail from '../../../assets/SignInIconMail.svg'


const ContainersInputMail = styled.div`
  position: relative;
`

const InputMail = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

const InputIconMail = styled.div`
  position: absolute;
  top: -1px;
  right: 4px;
`

function Email() {
  return (
    <ContainersInputMail>
      <InputMail placeholder='Email' type="text" />
      <InputIconMail>
        <img src={Mail} alt="" />
      </InputIconMail>
    </ContainersInputMail>
  )
}

export default Email