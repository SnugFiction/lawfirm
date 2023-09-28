import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "./../../Assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "./../../Assets/rightArrow.svg";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
   
   
  const [getprevbtn,setprevbtn] = useState(false);
  const [getnextbtn,setnextbtn] = useState(false);
 
  const Control = ({nextbtn,prevbtn,setnextbtn,setprevbtn}) =>
  {
     const useswiper = useSwiper();

     useEffect(()=>{
     
      if(nextbtn)
      {   
         setnextbtn(false);
         useswiper.slideNext();

      }else if(prevbtn)
      {
         setprevbtn(false);
         useswiper.slidePrev();
      }
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[nextbtn,prevbtn]);
     

   
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.subwrapper}>
        <h1 className={styles.heading}>What says our happy Clients</h1>
        <div>
          <LeftArrow onClick={()=>{
             setprevbtn(true);
          }}/>
          <RightArrow onClick={()=>{
            setnextbtn(true);
          }} style={{marginLeft:"18.78px"}}/>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          <Control nextbtn={getnextbtn} prevbtn={getprevbtn} setnextbtn={setnextbtn} setprevbtn={setprevbtn} />
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardWrapper}>
              <div className={styles.imgeContainer}></div>
              <h2 className={styles.cardheading}>Jane Cooper</h2>
              <p className={styles.cardposition}>Ceo of Hunt</p>
              <p className={styles.cardpara}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
