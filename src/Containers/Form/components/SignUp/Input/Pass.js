import React from 'react'
import styled from 'styled-components'

const ContainersInputLock = styled.div`
  padding-top: 14px;
`

const InputLock = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

function Pass() {
  return (
    <ContainersInputLock>
      <InputLock placeholder='Password' type="password" />
    </ContainersInputLock>
  )
}

export default Pass