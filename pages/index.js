import Image from 'next/image'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Layer1 from '../components/Layer1'
import { useState } from 'react'
import gsap from 'gsap'

  // THEMES
  const GlobalStyle = createGlobalStyle`
  :root {
    --primary-text: #fff;
    --primary-bg: #000;
  }

  html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Coda', cursive;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--primary-bg);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background: var(--primary-text);
    }
  }
  `
  const Body = styled.div`
    background: #000;
  `
  const Hero = styled.div`
    letter-spacing: 0.5em;
    font-size: clamp(2em, 5vw, 6rem);

    @media screen and (min-width: 768) {
      & {
        font-size: 3em;
      }
    }
    @media screen and (min-width: 1080px) {
      & {
        font-size: 4em;
      }
    }
  `


export default function Home() {

  // DISPLAYING
  return (
    <>
      <Header />
      {/* <Loading /> */}
      <Body>
        <Hero>
          <Layer1>ASTROLIQ</Layer1>
        </Hero>
        <div>tets</div>
      </Body>
      <GlobalStyle />
    </>
  )
}
