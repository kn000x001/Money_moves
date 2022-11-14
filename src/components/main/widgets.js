import { useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import styles from './widget.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const Widgets = () => {
    return (
      <div className="mt-3">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-4">ვიჯეტები</h6>
          <div className="d-flex justify-content-between">
            <div className="swiper-button-prev me-3"></div>
            <div className="swiper-button-next ms-3"></div>
          </div>
        </div>
        
       <Swiper 
       modules={[Navigation]}
       navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        clickable: true,
      }}
       effect
       speed={600}
       slidesPerView={3}
       loop
       centeredSlides
       spaceBetween={30}
       className={styles.myswiper}
       >
        <SwiperSlide className={styles.swiperslide}>ამანათები</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>სერვისები</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>ფინანსები</SwiperSlide>
       </Swiper>

      </div>

    )
}

export default Widgets