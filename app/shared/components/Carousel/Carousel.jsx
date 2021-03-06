import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { A11y, Keyboard } from 'swiper'
import CarouselSlide from './CarouselSlide'
SwiperCore.use([A11y, Keyboard])

const Carousel = ({ images }) => {
  return (
    <div className="swipercarousel">
      <Swiper
        spaceBetween={10}
        slidesPerView="1"
        loopedSlides="3"
        watchSlidesVisibility={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        initialSlide="1"
        a11y={{
          enabled: true
        }}
        keyboard={{ enabled: true, onlyInViewport: false }}
      >
        {images?.map((img, id) => (
          <SwiperSlide key={id}>
            <CarouselSlide img={img} id={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Carousel
