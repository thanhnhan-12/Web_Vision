import React from 'react'
import styled from 'styled-components'

const ContainersInputMail = styled.div`
  padding-top: 14px;
`

const InputMail = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

function Email() {
  return (
    <ContainersInputMail>
      <InputMail placeholder='Email' type="email" />
    </ContainersInputMail>
  )
}

export default Email