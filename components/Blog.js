import React from 'react'
import styled from 'styled-components'

const BlogBase = styled.div`
  color: var(--primary-text);
  width: 100%;
  height: 100%;
  padding: 1.2em;

  @media screen and (min-width: 675px) {
    & {
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
  filter: drop-shadow(0 0 0.55rem var(--primary-text));

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
  return (
    <BlogBase>
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
    </BlogBase>
  )
}

export default Blog
