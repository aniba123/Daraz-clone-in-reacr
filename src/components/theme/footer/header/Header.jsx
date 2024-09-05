import './header.css'
import imgs from '../../../../assets/darazlogow.png'
import smallogo from '../../../../assets/littledaraz.png'
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header>
                <div className="left">
                    <ul>
                        <li><a href="#">Become a Seller</a></li>
                        <li><a href="#">Affliate a program</a></li>
                        <li><a href="#">Help&support</a></li>
                        <li><a href="#">Daraz logistics partner</a></li>
                        <div className="right"><img src={smallogo} />  Save more on app </div>
                    </ul>
                </div>
                <div className="main-header">
                    <div className="logo-div">
                       <Link to='/'  > <img src={imgs} className="self-logo" /></Link>
                    </div>

                    <div className="search-bar-parent">
                        <div className="search-bar">
                            <input type="text" placeholder="Search for daraz" className="self-box" />
                            <BsSearch size={20} className="search-icon" />
                        </div>
                    </div>


                    
                    <div className="navigation">
                        <ul>
                            <li><BsPersonPlus size={25} color="white" /></li>
                            <li style={{marginTop:'5px'}} ><Link to='/login'>Login</Link>  </li>
                            <li style={{marginTop:'5px'}}  >|</li>
                            <li style={{marginTop:'5px'}}  ><Link to='/signup'>Sign Up</Link> </li>
                            <li><FaInternetExplorer size={20} color="white" /></li>
                            <li style={{marginTop:'5px'}}  ><a href="#">EN</a></li>
                            <li><a href="#"><MdOutlineLocalGroceryStore size={25} /></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;