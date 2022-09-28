import React from 'react'
import styled from 'styled-components'
import Lock from '../../../assets/SignInIconLock.svg'

const ContainersInputLock = styled.div`
  position: relative;
  padding-top: 14px;
`

const InputLock = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

const InputIconLock = styled.div`
  position: absolute;
  top: 10px;
  right: 4px;
`

function Pass() {
  return (
    <ContainersInputLock>
      <InputLock placeholder='Password' type="password" />
      <InputIconLock>
        <img src={Lock} alt="" />
      </InputIconLock>
    </ContainersInputLock>
  )
}

export default Pass