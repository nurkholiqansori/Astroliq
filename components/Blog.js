import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React from 'react'
import styled from 'styled-components'

const BlogBase = styled.div`
  color: var(--primary-text);
  width: 100%;
  height: 100%;
  background: url('/images/hubble_ngc_3568_potw2150a.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  & .blog-wrapper {
    padding: 1.2em;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 675px) {
    & .blog-wrapper {
      padding: 5em;
    }
  }
`
const TitleH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: var(--primary-text);
  font-size: 1.8em;
  text-align: center;
`
const BlogLists = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 10px 0;

  @media screen and (min-width: 675px) {
    & {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`
const BlogList = styled.div`
  border: 1px solid #fff;
  box-shadow: 10px 10px 10px -10px #fff, -10px 10px 10px -10px #fff;
  background: rgba(0, 0, 0, 0.9);

  & img {
    width: 100%;
    height: 33.333333%;
  }
`
const BlogTitle = styled.h3`
  margin: 1.1em 1.1em 0 1.1em;
  font-weight: 600;
`
const BlogDescription = styled.p`
  margin: 1.2em;
  text-align: justify;
`

const Blog = () => {
  let blogRef = React.useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  React.useEffect(() => {
    gsap.fromTo(
      blogRef,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: blogRef,
          start: 'top top',
          end: 'bottom bottom',
        },
      },
    )
  }, [blogRef])

  return (
    <BlogBase>
      <div className='blog-wrapper' ref={(el) => (blogRef = el)}>
        <TitleH2>Blog</TitleH2>
        <BlogLists>
          <BlogList>
            <img
              src='/images/pia20844-main.jpg'
              alt='Curiosity Rover Finds and Examines a Meteorite on Mars'
            />
            <BlogTitle>Galaxy Andromeda will going to our galaxy.</BlogTitle>
            <BlogDescription>
              The dark, smooth-surfaced rock at the center of this Oct. 30, 2016
              ...
            </BlogDescription>
          </BlogList>
          <BlogList>
            <img
              src='/images/pia20844-main.jpg'
              alt='Curiosity Rover Finds and Examines a Meteorite on Mars'
            />
            <BlogTitle>Galaxy Andromeda will going to our galaxy.</BlogTitle>
            <BlogDescription>
              The dark, smooth-surfaced rock at the center of this Oct. 30, 2016
              ...
            </BlogDescription>
          </BlogList>
          <BlogList>
            <img
              src='/images/pia20844-main.jpg'
              alt='Curiosity Rover Finds and Examines a Meteorite on Mars'
            />
            <BlogTitle>Galaxy Andromeda will going to our galaxy.</BlogTitle>
            <BlogDescription>
              The dark, smooth-surfaced rock at the center of this Oct. 30, 2016
              ...
            </BlogDescription>
          </BlogList>
          <BlogList>
            <img
              src='/images/pia20844-main.jpg'
              alt='Curiosity Rover Finds and Examines a Meteorite on Mars'
            />
            <BlogTitle>Galaxy Andromeda will going to our galaxy.</BlogTitle>
            <BlogDescription>
              The dark, smooth-surfaced rock at the center of this Oct. 30, 2016
              ...
            </BlogDescription>
          </BlogList>
        </BlogLists>
      </div>
    </BlogBase>
  )
}

export default Blog
