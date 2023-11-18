'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import RankingList from './RankingList';

export default function SlideItems({pointColor, items}: {
  pointColor: string;
  items:TrendItem[];
}) {
  return (
    <Swiper
      grabCursor={true}
      loop={false}
      centeredSlides={true}
      slidesPerView={3}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 60,
        scale: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
    >
        {items.map((item) => (
          <SwiperSlide 
            key={item.rank}>
              <div>
                <RankingList color={pointColor} item={item} />
              </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}