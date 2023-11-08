import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./App.css";

function App() {
  return (
    <div className="sample-slider">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        speed={500}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        // スライドが表示された最初の1回に実行されます。
        onSwiper={() => console.log("スライドが生成されました")}
        // スライドが切り替わるたび実行される。
        onSlideChange={() => console.log("スライドが変更されました。")}
      >
        <SwiperSlide>
          <img src="./img/mainvisual1.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual2.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual3.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual4.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual5.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual6.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mainvisual7.jpg" alt="" width={1000} height={600} />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-prev prev">
        <div className="circle"></div>
      </div>
      <div className="swiper-button-next next"></div>
    </div>
  );
}

export default App;
