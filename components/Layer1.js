import React from 'react'
import styled from 'styled-components'

const Layer1Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  background-color: var(--primary-bg);
  pointer-events: none;
`
const Heading = styled.h1`
opacity: 0,
  color: transparent;
  -webkit-text-stroke: 1px var(--primary-text);
  text-stroke: 1px var(--primary-text);
  font-size: 1em;
  filter: drop-shadow(0 0 0.55rem var(--primary-text));

  @media screen and (min-width: 768) {
    & {
      font-size: 1.5em;
    }
  }
  @media screen and (min-width: 1080px) {
    & {
      font-size: 2em;
    }
  }
`

const Layer1 = ({ children }) => {
  return (
    <>
      <Layer1Content>
        <Heading>{children}</Heading>
      </Layer1Content>
    </>
  )
}

export default Layer1
