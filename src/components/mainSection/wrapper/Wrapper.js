import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/* carousel-images  ------*/

import carousel1 from "../../../assets/images/slider1.png"
import carousel2 from "../../../assets/images/slider2.png"
import carousel3 from "../../../assets/images/slider3.png"
import carousel5 from "../../../assets/images/slider5.png"
import carousel6 from "../../../assets/images/slider6.png"
export const Wrapper = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        autoplay: true,
        draggable: true,

    };
    return (
        <Slider {...settings}>
            <div className="sliderImg">
                <img src={carousel1} alt='apex' />
            </div>
            <div className="sliderImg">
                <img src={carousel5} alt='apex' />
            </div >
            <div className="sliderImg">
                <img src={carousel2} alt='apex' />
            </div >
            <div className="sliderImg">
                <img src={carousel3} alt='apex' />
            </div>
            <div className="sliderImg">
                <img src={carousel5} alt='apex' />
            </div>
            <div className="sliderImg">
                <img src={carousel6} alt='apex' />
            </div>

        </Slider>
    );
}