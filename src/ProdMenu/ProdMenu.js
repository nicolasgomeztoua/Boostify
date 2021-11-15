import React from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import "../Dropdown/Dropdown.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Scrollbar, EffectCoverflow, Autoplay]);
const ProdMenu = ({ border }) => {
  return (
    <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}>
      <ul id="prodMenu" style={{ borderBottom: border }}>
        {MenuItems.map((item, index) => {
          return (
             <SwiperSlide style={{ marginBottom: "30px", marginTop:"30px" }}>
            <li key={index} className="MenuItemsWrapper">
              <Link className={item.cName} to={item.path}>
                <div className="Icon-Title-container">
                  <p className="MenuItemTitle">{item.title}</p>
                  <img
                    src={item.icon}
                    alt=" boost icons"
                    className="MenuRankedBoostIcon "
                    id={item.cNameIcon}
                  ></img>
                </div>
              </Link>
            </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
};

export default ProdMenu;
