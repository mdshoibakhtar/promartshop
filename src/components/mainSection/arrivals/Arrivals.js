import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { arrivals } from "./mockData";
import { BsCurrencyRupee } from "react-icons/bs";
export const Arrivals = () => {
    const data = arrivals.data

    const slideRef = useRef(null)

    var settings = {

        dots: false,
        autoplay: true,
        infinite: true,
        speed: 400,
        autoplaySpeed: 1800,
        slidesToShow: 8,
        slidesToScroll: 3,
        initialSlide: 0,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container-fluid mt-5">

            <div className="row">
                <div className=" maximum-width m-auto position-relative">
                    <h3 className="fw-bold">New Arrivals</h3>

                    < div className="d-flex justify-content-between px-3 position-absolute w-100 btnz-index h-100 align-items-center left-3">
                        <div className="">
                            <div className=" bordersolid btnz-index position-absolute left-btn " onClick={() => { slideRef.current.slickPrev() }}>
                                <FaAngleLeft />
                            </div>
                            <div className=" bordersolid btnz-index position-absolute right-btn" onClick={() => { slideRef.current.slickNext() }}><FaAngleRight /> </div>
                        </div>
                    </div>
                    <Slider ref={slideRef} {...settings}>

                        {data.map((value) => {
                            return (
                                <div className="carouselWrapper arrivalsCards px-3 rounded-2 " key={value.id}>
                                    <Link className=" text-decoration-none">
                                        <figure className="heightFix2 overflow-hidden">
                                            <img src={value.recImg} width={100 + "%"} alt="no-img found  " />
                                        </figure>
                                        <figcaption>
                                            <h6 className="fontSize">{value.titleName}</h6>
                                        </figcaption>
                                        <p className="text-center paraColor font-size">{value.para}</p>
                                        <div className="text-dark text-center">
                                            <span className="fw-bold"><BsCurrencyRupee />{value.price}</span>
                                            <span className="text-decoration-line-through ms-2"> < BsCurrencyRupee />{value.offPrice}</span>
                                            <span className="fw-bold"> {value.rangePrice}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </div >
    )
}