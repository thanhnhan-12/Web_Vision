import React from 'react'
import styled from 'styled-components'

const ContainersInputName = styled.div`
`

const InputName = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

function Name() {
  return (
    <ContainersInputName>
      <InputName placeholder='Name' type="text" />
    </ContainersInputName>
  )
}

export default Name