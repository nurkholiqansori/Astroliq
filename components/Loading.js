import React from 'react'
import styled, { keyframes } from 'styled-components'
import Typewriter from 'typewriter-effect'

const Base = styled.div`
  font-family: 'Fira Code', monospace;
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  position: fixed;
  overflow: hidden;
  z-index: 999999;
`
const Text = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 0.7em;
  color: #777;
  margin: 30px;

  @media screen and (min-width: 768px) {
    & {
      margin: 60px;
    }
  }
`

const Loading = () => {
  const el = React.useRef(null)
  const contributor = `&lt;\Creator\&gt;`

  return (
    <>
      <Base>
        <Text>
          <Typewriter
            options={{ delay: 15 }}
            onInit={(typewriter) => {
              typewriter
                .callFunction((state) => {
                  state.elements.cursor.innerHTML = '_'
                })
                .typeString('Ready?')
                .pauseFor(3000)
                .deleteAll()
                .typeString(
                  '//**************************************************//<br /><br /><span class="whiteText">ASTROLIQ<br />Https://astroliq.vercel.app<br />Build on Vercel<br />Ready<span class="whiteText blink">_</span></span><br /><br />//**************************************************//<br /><br /><span class="whiteText">Build with<br /> - NextJS<br /> - Styled Components<br /> - GSAP<br /><br />From 12 Feb. 2022<br /><br /></span> //**************************************************// <br/><br/><span class="whiteText">Nur Kholiq Ansori<br />Https://nurkholiqansori.me</span> <br /><br /><span class="whiteText">Enter</span>',
                )
                .start()
            }}
          />
        </Text>
      </Base>
    </>
  )
}


export default Loading
