import { Link } from "react-router-dom"
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

import mastercard from "../../../assets/images/payimages/mastercard.png"
import visa from "../../../assets/images/payimages/visa.png"
import paypal from "../../../assets/images/payimages/paypal.png"
import jcb from "../../../assets/images/payimages/jcb.png"
import skril from "../../../assets/images/payimages/skrill.png"
export const Footer = () => {
    return (
        <div className="container-fluid bgLfooter">
            <div className="maximum-width m-auto pt-5 pb-2">
                <div className="row w-100">
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block  fs-5">Electronics</strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Tablets
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Mobile
                                </Link>
                            </li>

                            <li>
                                <Link>
                                    Home Appliances
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Camera & Photo
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Television
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Headphones
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Video Games
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block  fs-5">Fashion</strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Women's Fashion
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Men's Fashion

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Girl's Fashion
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Boy's Fashion
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Watches
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Jewellery
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Women's Handbags
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Men's Eyewear
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block">Home</strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Bath
                                </Link>
                            </li>
                            <li>
                                <Link >
                                    Home Decor
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Kitchen & Dining

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Tools Improvement

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Audio & Video

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Furniture

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Patio, Lawn

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Pet supplies
                                </Link>
                            </li>
                            <li>
                                <Link>

                                </Link>
                            </li>
                            <li>
                                <Link>

                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block">Beauty</strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Fragrances

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Make-Up

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Haircare

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Skincare

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Bath & Body

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Electronic Beauty Tool

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Men's Grooming

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Health Care Essential
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block">Baby & Toys
                        </strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Diapering

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Baby Transport

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Nursing & Feeding

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Kids Fashion

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Toddler Toys

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Tricycle & Scooters

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Board Games & Card

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Outdoor Play
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <strong className="py-4 d-block">Grocery
                        </strong>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link >
                                    Fresh Produce

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Daily & Eggs

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Bread & Bakery

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Meat & Seafood

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Breakfast Food

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Pantry Staples

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Household Supplies

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Personal Carousel
                                </Link>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
            {/* social footer */}
            <div className="maximum-width m-auto pb-5 ">
                <div className="row">
                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">Social</span>
                        <ul className='unlist footerunlist socialIcon'>
                            <li>
                                <Link >
                                    <span><AiOutlineTwitter /></span>
                                    <span>Twitter</span>
                                </Link>
                            </li>
                            <li>
                                <Link >
                                    <span><AiOutlineInstagram /></span>
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link >
                                    <span><BsFacebook /></span>
                                    <span>Facebook</span>
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">Contact
                        </span>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Email: admin@chawkbazar.demo
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Website:
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    https://redq.io
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">About
                        </span>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link>
                                    Support Center
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Copyright
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">Customer Care

                        </span>
                        <ul className='unlist footerunlist'>

                            <li>
                                <Link>
                                    FAQ & Helps

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Shipping & Delivery

                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Return & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Track Your Order
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">Our Information

                        </span>
                        <ul className='unlist footerunlist'>

                            <li>
                                <Link>
                                    Privacy policy update
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Terms & conditions
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Site Map
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className="col-md-2 col-6">
                        <span className="py-4 d-block  fs-5">Community

                        </span>
                        <ul className='unlist footerunlist'>
                            <li>
                                <Link>
                                    Announcements
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Answer center
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Discussion boards
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Giving works
                                </Link>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
            <hr />

            <div className="maximum-width m-auto py-2">
                <div className="row ">
                    <div className="col-12  ">
                        <div className="row ">
                            <div className="font-size  col-md-6 col-12 less-576-t-center">
                                <span> Copyright © 2023 <b>Capital Technology</b>  All rights reserved</span>
                            </div>
                            <div className="col-md-6 col-12 less-576-t-center">
                                <Link className="px-1">
                                    <img src={mastercard} alt="card img" />
                                </Link>
                                <Link className="px-1">
                                    <img src={visa} alt="card img" />
                                </Link>
                                <Link className="px-1">
                                    <img src={paypal} alt="card img" />
                                </Link>
                                <Link className="px-1">
                                    <img src={jcb} alt="card img" />
                                </Link>
                                <Link className="px-1">
                                    <img src={skril} alt="card img" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


