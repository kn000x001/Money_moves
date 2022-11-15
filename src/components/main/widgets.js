import { Swiper, SwiperSlide} from 'swiper/react';
import styles from './widget.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import bagIcon from '../../images/bag_icon.png'
import gearIcon from '../../images/gear_icon.png'
import coinIcon from '../../images/coin_icon.png'
import { faCircleInfo, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



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
        <SwiperSlide className={styles.swiperslide}>
          <div className="bag_icon_frame p-2">
            <img src={bagIcon} alt=""></img>
          </div>
          <div className="d-flex">
            <p className="me-2">ამანათები</p>
            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
          </div>

          <div className="d-flex align-items-end">
            <h2>14</h2>
            <p className="ps-1">ამანათები</p>
          </div>
         
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className="gear_icon_frame p-2">
            <img src={gearIcon} alt=""></img>
          </div>
          <div className="d-flex">
            <p className="me-2">სერვისები</p>
            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
          </div>

          <div className="d-flex align-items-end">
            <h2>17</h2>
            <p className="ps-1">უფასო</p>
          </div>
         
          </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className="coin_icon_frame p-2">
            <img src={coinIcon} alt=""></img>
          </div>
          <div className="d-flex">
            <p className="me-2">ფინანსები</p>
            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
          </div>
          <div>
            <div className="d-flex align-items-end">
              <div className="d-flex align-items-end">
                <h2>14.45</h2><p className="mb-1">₾</p>
              </div>
              <div><p className="m-1">აქტიური</p></div>
            </div>
          </div>
          
        </SwiperSlide>
       </Swiper>

        <div className="d-flex justify-content-center">
          <button className="d-flex p-2 align-items-center mt-2  mb-2 mb-lg-0 widget_button">
            <p className="m-0">ყველა ვიჯეტი</p>
            <FontAwesomeIcon icon={faChevronRight} className="px-2"></FontAwesomeIcon>
          </button>
        </div>
      </div>

    )
}

export default Widgets