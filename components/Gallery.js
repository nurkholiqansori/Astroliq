import React from 'react'
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'

const dataGallery = [
  {
    title: "Curiosity at 'Glen Etive'",
    link: '/images/pia23378-16.jpg',
    description:
      "NASA's Curiosity rover took this selfie on Oct. 11, 2019, the 2,553rd Martian day, or sol, of its mission.",
  },
  {
    title:
      "Seven Years After Landing, Curiosity Rover is Still Rock N' Rolling",
    link: '/images/pia23346-16.jpg',
    description:
      'Our Curiosity rover has come a long way since touching down on Mars seven years ago. It has traveled a total of 13 miles (21 kilometers) and ascended 1,207 feet (368 meters) to its current location.',
  },
  {
    title: 'Going Forward',
    link: '/images/pia22326-16.jpg',
    description:
      "This close-up image is of a 2-inch-deep hole produced using a new drilling technique for NASA's Curiosity rover. The hole is about 0.6 inches (1.6 centimeters) in diameter. This image was taken by Curiosity's Mast Camera (Mastcam) on Sol 2057.",
  },
  {
    title: 'Curiosity Rover Finds and Examines a Meteorite on Mars',
    link: '/images/pia21134.jpg',
    description:
      "The dark, smooth-surfaced rock at the center of this Oct. 30, 2016, image from the Mast Camera (Mastcam) on NASA's Curiosity Mars rover was examined with laser pulses and confirmed to be an iron-nickel meteorite.",
  },
  {
    title: "Curiosity Self-Portrait at 'Murray Buttes'",
    link: '/images/pia20844-main.jpg',
    description:
      'This self-portrait of NASA\'s Curiosity Mars rover shows the vehicle at the "Quela" drilling location in the "Murray Buttes" area on lower Mount Sharp.',
  },
  {
    title: 'Curiosity Celebrates 8 Years on the Red Planet',
    link: '/images/pia22486-main.jpg',
    description:
      "NASA's Curiosity Mars Rover touched down eight years ago, on Aug. 5, 2012, and will soon be joined by a second rover, Perseverance.",
  },
  {
    title: "The Red Planet's Holden Crater",
    link: '/images/pia23952.jpg',
    description:
      "Exquisite layering is revealed emerging from the sand in southern Holden Crater. Sequences like these offer a window into Mars' complicated geologic history.",
  },
]

const GalleryBase = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  color: var(--primary-text);
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 675px) {
    & {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 5em;
    }
  }
  & .description {
    display: flex;
    align-items: center;
  }
`
const DescriptionGallery = styled.p`
  padding: 10px 0;
  color: var(--primary-text);
  text-align: justify;
`
const TitleH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: var(--primary-text);
  font-size: 1.8em;
`
const List = styled.div`
  width: 250px;
  height: 500px;
  border: 1px solid #fff;
  box-shadow: 10px 10px 10px -10px #fff, -10px 10px 10px -10px #fff;

  & img {
    width: 100%;
    height: 33.333333%;
  }
  & .title {
    margin: 1.1em 1.1em 0 1.1em;
    font-weight: 600;
  }
  & .description {
    margin: 1.2em;
    text-align: justify;
  }
`
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const Gallery = () => {
  return (
    <GalleryBase>
      <div className='description'>
        <div>
          <TitleH2>Gallery</TitleH2>
          <DescriptionGallery>
            Anim labore consequat anim dolore id anim labore fugiat laboris.
            Elit laboris quis nulla eiusmod. Est labore exercitation id proident
            qui pariatur consequat deserunt. Nostrud cillum dolor esse excepteur
            nostrud amet Lorem nostrud. Labore do consectetur in veniam
            voluptate Lorem do fugiat consequat id ex.
          </DescriptionGallery>
        </div>
      </div>
      <div className='gallery'>
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          infinite
          autoPlay
          itemClass='carousel-item-padding-40-px mx'
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {dataGallery.map((i) => (
            <List key={i.title}>
              <img src={i.link} alt={i.title} />
              <h3 className='title'>{i.title}</h3>
              <div className='description'>{i.description}</div>
            </List>
          ))}
        </Carousel>
        <small><i>Use cursor for swipe</i></small>
      </div>
    </GalleryBase>
  )
}

export default Gallery
