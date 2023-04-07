import Navbar from 'react-bootstrap/Navbar';
import promartlogo from "../../../assets/images/promart.png"
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
export const TopHeader = () => {
    return (
        <Navbar className='p-0 topNav'>
            <div className='container-fluid justify-xs-center'>
                <Navbar.Brand className='ps-4 py-0 pe-0'>
                    <Link to="/">
                        <img
                            alt="logo"
                            src={promartlogo}
                            className="d-inline-block align-top logospecification"
                        />{' '}
                    </Link>
                </Navbar.Brand>

                <div className='fs-6 fw-bolder d-none d-md-block d-lg-block d-xl-block'>
                    <span className='px-2'><BiSearchAlt2 /></span>
                    <span className='px-2'>Sign In</span>
                    <span className='px-2'>
                        <span className=' rounded-5 font-size bg-dark text-light position-relative cartCount '>0</span>
                        <span><BsFillBasket3Fill /></span>
                    </span>
                </div>
            </div>
        </Navbar>
    );
}