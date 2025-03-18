import { Swiper, SwiperSlide } from "swiper/react";
import { useState , useContext } from "react";
import { Autoplay, Thumbs } from "swiper/modules";

import { motion } from "framer-motion";
import { IsMobileContext } from "../../utilis/IsMobileContext";
import 'swiper/css';
import "swiper/css/thumbs";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { isMobile } = useContext(IsMobileContext);
  return (
    <div className="banner">
      <Swiper modules={[Thumbs , Autoplay]} thumbs={{ swiper: thumbsSwiper }}   autoplay={{
          delay: 3000,
        }}
        loop={true}>
        <SwiperSlide>
          <div className="banner_image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1, staggerChildren: 0.25 }} src="src/assets/image/1.jpg" alt="" />
            <div className="banner_text">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem ipsum dolor sit amet.</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, quod.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1, staggerChildren: 0.25 }} src="src/assets/image/2.jpg" alt="" />
            <div className="banner_text">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem ipsum dolor sit amet.</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, quod.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1, staggerChildren: 0.25 }} src="src/assets/image/3.jpg" alt="" />
            <div className="banner_text">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem ipsum dolor sit amet.</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, quod.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {!isMobile ?       <Swiper className="banner_thumbs" modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress>
        <SwiperSlide>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} className="thumbs">
            <img src="src/assets/image/1.jpg" alt="" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} className="thumbs ">
            <img src="src/assets/image/2.jpg" alt="" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} className="thumbs ">
            <img src="src/assets/image/3.jpg" alt="" />
          </motion.div>
        </SwiperSlide>
      </Swiper> : ""}

    </div>
  );
}
