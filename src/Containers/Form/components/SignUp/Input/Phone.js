import React from 'react'
import styled from 'styled-components'

const ContainersInputPhone = styled.div`
  padding-top: 14px;
`

const InputPhone = styled.input`
  width: 99%;
  padding-bottom: 0.5rem;
  border-style: none none solid;
  border-bottom: solid 1px #1687F7;
`

function Phone() {
  return (
    <ContainersInputPhone>
      <InputPhone placeholder='Phone' type="tel" />
    </ContainersInputPhone>
  )
}

export default Phone