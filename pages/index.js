import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Loading from '../components/Loading'

  // THEMES
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Coda', cursive;
  }
  `
  const Body = styled.body`
    
  `
  const Hero = styled.div`
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    padding: 15px;
    text-align: center;
  `


export default function Home() {
  //HOOKS


  // DISPLAYING
  return (
    <div>
      <Header />
      <Loading />
      <Body>
        <Hero>
          ASTROLIQ is a theme which build with NextJS, Styled Components, and
          GSAP
        </Hero>

      </Body>
      <GlobalStyle />
    </div>
  )
}
