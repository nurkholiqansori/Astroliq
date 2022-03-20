import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Layer1 from '../components/Layer1'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Blog from '../components/Blog'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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

  a {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
  .mx {
    margin: 0 40px;
  }
  `
const Body = styled.div`
  background: #000;
`
const Container = styled.div``
const Hero = styled.div`
  height: 100vh;
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
const Description = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 1.5em;
  background-color: #000;
  color: var(--primary-text);
  background: url('/images/dario-bronnimann-CpIEyqdwygY-unsplash.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`
const DescContent = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px var(--primary-text);
  text-stroke: 1px var(--primary-text);
  font-size: 2em;
`

const Footer = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--primary-text);
  background: url('/images/hubble_j2034417_freggs_fullsize_0.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  & .footer-wrapper {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
  }
  & .copyright {
    font-size: 1.3em;
    text-align: center;
    color: #fff;
  }
`

export default function Home() {
  let heroRef = useRef(null)
  let descriptionRef = useRef(null)
  let footerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from(heroRef, 3.5, {
      delay: 18,
      ease: 'power3.In',
      y: 64,
      display: 'none',
      opacity: 0,
      stagger: {
        amount: 1,
      },
    })
  }, [heroRef])

  useEffect(() => {
    gsap.fromTo(
      descriptionRef,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: descriptionRef,
          start: 'top top',
          end: 'bottom bottom',
        },
      },
    )
  }, [])
  useEffect(() => {
    gsap.fromTo(
      footerRef,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: footerRef,
          start: 'center center',
          end: 'bottom bottom',
        },
      },
    )
  }, [footerRef])

  // DISPLAYING
  return (
    <>
      <Header />
      <Body>
        <Loading />
        <Container ref={(el) => (heroRef = el)}>
          <Hero>
            <Layer1>ASTROLIQ</Layer1>
          </Hero>
          <Description>
            <DescContent ref={(el) => (descriptionRef = el)}>
              Astroliq is an astronomy themed template. Built with Next.js,
              Styled Components, and GSAP
            </DescContent>
          </Description>
          <About />
          <Blog />
          <Gallery />
          <Footer>
            <div className='footer-wrapper' ref={(el) => (footerRef = el)}>
              <Title>Astroliq</Title>
              <div className='copyright'>
                <i>
                  Image from{' '}
                  <Link href='https://unsplash.com/'>
                    <a
                      title='Free Image on Unsplash'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      unsplash
                    </a>
                  </Link>
                  , and{' '}
                  <Link href='https://www.nasa.gov/mission_pages/msl/images/index.html'>
                    <a
                      title='Mars Curiosity Image Gallery | NASA'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      NASA
                    </a>
                  </Link>
                </i>
                <br />
                <br />
                ASTROLIQ by{' '}
                <Link href='https://www.nurkholiqansori.me'>
                  <a
                    title='Personal web Nur Kholiq Ansori'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Nur Kholiq Ansori
                  </a>
                </Link>{' '}
              </div>
            </div>
          </Footer>
        </Container>
      </Body>
      <GlobalStyle />
    </>
  )
}
