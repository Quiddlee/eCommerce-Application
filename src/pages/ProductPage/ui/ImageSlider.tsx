import { motion } from 'framer-motion';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { buttonTapAnimation, buttonTransition } from '../../../shared/ui/animations.tsx';

interface IImageSlider {
  isOpen: boolean;
  imgList: string[];
  onClose: () => void;
}

const crossSvg = (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="5.35364"
      y="7.96802"
      width="3.375"
      height="18"
      rx="1.6875"
      transform="rotate(-45 5.35364 7.96802)"
      fill="#333333"
    />
    <rect
      x="5.35754"
      y="18.3113"
      width="18"
      height="3.375"
      rx="1.6875"
      transform="rotate(-45 5.35754 18.3113)"
      fill="#333333"
    />
  </svg>
);

export default function ImageSlider({ isOpen, onClose, imgList }: IImageSlider) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-primary dark:bg-dark-bg-primary">
      <div className="w-full p-8">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
          }}
          pagination={{
            clickable: true,
          }}
          loop
          modules={[Navigation, Pagination]}
          className=""
        >
          {imgList.map((img) => (
            <SwiperSlide key={img} style={{ display: 'flex' }} className="max-h-3/4 items-center justify-center">
              <TransformWrapper>
                <TransformComponent>
                  <img className="mx-auto h-[70%] w-[70%] max-w-[1000px] sm:h-[55%] sm:w-[55%] " src={img} alt="" />
                </TransformComponent>
              </TransformWrapper>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-unique" />
          <div className="swiper-button-next-unique" />
        </Swiper>
        <motion.button
          whileTap={buttonTapAnimation}
          transition={buttonTransition}
          type="button"
          className="absolute left-[30px] top-[30px] z-[51] flex h-10 w-10 items-center justify-center rounded-full border-text-dark bg-inactive-icons-grey text-3xl transition-all hover:bg-inactive-icons-grey/90"
          onClick={onClose}
        >
          {crossSvg}
        </motion.button>
      </div>
    </div>
  );
}
