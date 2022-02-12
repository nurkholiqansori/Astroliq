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
                  '//**************************************************//<br /><br /><span class="whiteText"><font color="#0ff">about</font> - ASTROLIQ<br /><font color="#0ff">about</font> - Https://astroliq.vercel.app<br /><font color="#0ff">about</font> - Build on Vercel<br /><font color="#0f0">ready</font><span class="whiteText blink">_</span></span><br /><br />//**************************************************//<br/><br/><span class="whiteText"><font color="#0ff">build</font> - With<br /><font color="#0ff">build</font> - > NextJS<br /><font color="#0ff">build</font> - > Styled Components<br /><font color="#0ff">build</font> - > GSAP<br /><br /><font color="#0ff">build</font> - From 12 Feb. 2022<br /><br /></span><span><font color="#0f0">ready</font><span class="whiteText blink">_</span></span><br/><br/> //**************************************************// <br/><br/><span class="whiteText"><font color="#0ff">creator</font> - Nur Kholiq Ansori<br /><font color="#0ff">creator</font> - Https://nurkholiqansori.me</span> <br /><br /><span><font color="#0f0">ready</font><span class="whiteText blink">_</span></span><br/><br/><span class="whiteText">Enter</span>',
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
