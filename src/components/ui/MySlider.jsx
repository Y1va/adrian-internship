import { Children } from 'react';

// Import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Mirrors the .collection-column breakpoints in index.css (6/5/4/3/2/1 columns).
// Swiper breakpoints are min-width, so each one starts 1px after the max-width rule.
const collectionBreakpoints = {
  481: { slidesPerView: 2 },
  769: { slidesPerView: 3 },
  1025: { slidesPerView: 4 },
  1201: { slidesPerView: 5 },
  1601: { slidesPerView: 6 },
};

export default function MySlider({
  children,
  breakpoints = collectionBreakpoints,
}) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={breakpoints}
      className="my-slider"
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
