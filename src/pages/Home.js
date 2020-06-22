import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Home = () => {
  return (
    <HomeContainer>
      <Button
        value='Enviar'
        size='medium'
        color='danger'
        variant='outline'
        disabled={false}/>
    </HomeContainer>
  )
}

export default Home
