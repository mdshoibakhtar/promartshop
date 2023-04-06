import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

import hpbrand from "../../../assets/images/dropdown-png/download.png"
import bose from "../../../assets/images/dropdown-png/download.jpg"
import huawei from "../../../assets/images/dropdown-png/huawei.png"
import phlipis from "../../../assets/images/dropdown-png/philips.png"
import sumsung from "../../../assets/images/dropdown-png/samsung.png"
import sony from "../../../assets/images/dropdown-png/sony.png"
import xiaomi from "../../../assets/images/dropdown-png/xiaomi.png"
import lenovo from "../../../assets/images/dropdown-png/lenovopng.png"
import joyStick from "../../../assets/images/dropdown-png/lapt.jpg"
import bath from "../../../assets/images/homebrandIcon/bath.png"
import apex from "../../../assets/images/homebrandIcon/download.png"
import blackdecker from "../../../assets/images/homebrandIcon/blackDecker.png"
import danubehome from "../../../assets/images/homebrandIcon/danube.png"
import homebox from "../../../assets/images/homebrandIcon/homebox.png"
import pan from "../../../assets/images/homebrandIcon/download.png"
import pristiges from "../../../assets/images/homebrandIcon/prestige.png"
import royakford from "../../../assets/images/homebrandIcon/royalford.png"
import tefal from "../../../assets/images/homebrandIcon/tefal.png"
import beeding from "../../../assets/images/homebrandIcon/home.jpg"
export const BotHeader = () => {
    return (
        <Navbar bg="light" variant="light" className='p-0 d-lg-block  d-lg-fs-1 fs-lg-1 d-none '>
            <div className="container-fluid">
                <Nav className="me-auto fst-normal hoverClass">
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>All categories</span> <span className='roatet-180 '><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                Beauty & Fragrances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Fashion
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home & Kitchen
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Sports & Outdoor
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Grocery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Tools & Home Improvement
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Electronics</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={hpbrand} width={160} alt='no img found' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={bose} width={160} alt='no img found' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={huawei} width={160} alt='no img found' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={phlipis} width={160} alt='no img found' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={sumsung} width={160} alt='no img found' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={sony} width={160} alt='no img found' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={xiaomi} width={160} alt='no img found' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={lenovo} width={160} alt='no img found' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={sony} width={160} alt='no img found' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={joyStick} height={"360px"} alt='no img found' /> />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Home</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                Bedding
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Bath
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home Decor
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Kitchen & Dining
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Larges Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Tools & Home Improvement
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Furniture
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Home Storage & Organisation
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={apex} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={bath} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                <img src={blackdecker} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={danubehome} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={homebox} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={pan} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={pristiges} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={royakford} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={tefal} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link to="/comingpages">
                                            <img src={beeding} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Grocery</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown alt='apex' /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link to="/comingpages">
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comingpages">
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                <img src={hpbrand} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={bose} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={huawei} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={phlipis} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sumsung} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={xiaomi} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={lenovo} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={joyStick} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Baby & Toys</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                <img src={hpbrand} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={bose} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={huawei} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={phlipis} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sumsung} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={xiaomi} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={lenovo} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={joyStick} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Beauty & Fragrance</span  > <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                <img src={hpbrand} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={bose} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={huawei} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={phlipis} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sumsung} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={xiaomi} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={lenovo} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={joyStick} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Mens's Fashion</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                <img src={hpbrand} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={bose} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={huawei} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={phlipis} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sumsung} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={xiaomi} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={lenovo} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={joyStick} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#home" className=' px-3'><span className='fw-bold'>Sports</span> <span className='roatet-180'><MdOutlineKeyboardArrowDown /></span>
                        <div className='  megaDropdown w-100 position-absolute z-index'>
                            <div className='row flex-1'>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                Mobiles & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Laptops & Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Television
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Home Appliances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Speakers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Headphones & Earphones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Power Bank
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Wearable Devices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Camera,Photo & Video
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Tables & Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='unlist'>
                                        <li>
                                            <Link>
                                                <img src={hpbrand} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={bose} width={160} alt='apex' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <img src={huawei} width={160} alt='apex' />
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={phlipis} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sumsung} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={xiaomi} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={lenovo} width={160} alt='apex' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={sony} width={160} alt='apex' />
                                        </Link>
                                    </li>

                                </ul></div>
                                <div className='col'><ul className='unlist'>
                                    <li>
                                        <Link>
                                            <img src={joyStick} height={"360px"} alt='apex' />
                                        </Link>
                                    </li>


                                </ul></div>
                            </div>
                        </div>
                    </Nav.Link>

                </Nav>
            </div >
        </Navbar>
    )
}