import Slider from "react-slick";
import { eleccatdata } from "./mockData";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
export const ElecCate = () => {
    const data = eleccatdata.eleccate

    const slideRef = useRef(null)

    var settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 15,
        slidesToScroll: 1,
        initialSlide: 1,
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
        <div className="container-fluid">

            <div className="row mt-5">
                <div className=" maximum-width m-auto">
                    <h3 className="fw-bold">Electronics Category</h3>

                    < div className="d-flex justify-content-between px-3">
                        <div className="position-realtive">
                            <div className=" bordersolid btnz-index position-absolute left-btn " onClick={() => { slideRef.current.slickPrev() }}>
                                <FaAngleLeft />
                            </div>
                            <div className=" bordersolid btnz-index position-absolute right-btn" onClick={() => { slideRef.current.slickNext() }}><FaAngleRight /> </div>
                        </div>
                    </div>
                    <Slider ref={slideRef} {...settings}>

                        {data.map((value) => {
                            return (
                                <div className="carouselWrapper px-2 " key={value.id}>
                                    <Link className=" text-decoration-none">
                                        <figure className="  bordersolid">
                                            <img src={value.img} width={100 + "%"} alt="no-img found  " />
                                        </figure>
                                        <figcaption>
                                            <h5>{value.title}</h5>
                                        </figcaption>
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