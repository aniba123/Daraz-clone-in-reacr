import './footer.css'
import pakistan from '../../../assets/pakistan.png'
import srilanka from '../../../assets/srilanka.png'
import myanmar from '../../../assets/myanmar.png'
import nepal from '../../../assets/nepal.png'
import bangladash from '../../../assets/bangladash.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='learn-more'><Link to='/load'>LOAD MORE</Link></div>
    <div className='main-class'>
      <div className='costumer-care'><h2>Costumer Care</h2>
      <ul>
        <li><a href='#'>Help Center</a></li>
        <li><a href='#'>How to Buy</a></li>
        <li><a href='#'>Corporate & Bulk Purchasing</a></li>
        <li><a href='#'>Returns & Refunds</a></li>
        <li><a href='#'>Daraz Shop</a></li>
        <li><a href='#'>Contact Us</a></li>
        <li><a href='#'>Purchase Protection</a></li>
        <li><a href='#'>Daraz Pick up Points</a></li>
      </ul>
      <h2>Make Money With Us</h2>
      <ul>
        <li>Daraz University</li>
        <li>Sell on Daraz</li>
        <li>Join Daraz Affiliate Program</li>
      </ul>
      </div>
      <div className='daraz'><h2>Daraz</h2>
      <ul>
       <li><a href='#'>About Us</a></li>
       <li><a href='#'>Digital Payments</a></li>
       <li><a href='#'>Daraz Donates</a></li>
       <li><a href='#'>Daraz Blogs</a></li>
       <li><a href='#'>Terms and Conditions</a></li>
       <li><a href='#'>Privacy Policy</a></li>
       <li><a href='#'>NTN Number:4012118-6</a></li>
       <li><a href='#'>STRN Number:1700401211818</a></li>
       <li><a href='#'>Online shopping App</a></li>
       <li><a href='#'>Online Grocerry Shopping</a></li>
       <li><a href='#'>Daraz Exclusive</a></li>
      </ul>
      </div>
      <div className='darazinter'><h2>Daraz International</h2>
      <ul>
       <li>
        <div  className='flag'>
        <img src={pakistan} />Pakistan
        </div>
        </li>
       <li  className='flag'><img src={srilanka}></img>Srilanka</li>
      </ul>
      <ul>
       <li  className='flag'><img src={myanmar} ></img>Myanmar</li>
       <li  className='flag'><img src={nepal} style={{width:'40%'}} ></img>Nepal</li>
      </ul>
      <ul>
       <li  className='flag'><img src={bangladash} style={{width:'27%'}}  ></img>bangladash</li>
      </ul>
      </div>
      <div className='exclusive'><h2>Exclusive Deals and Offers!</h2>
      <ul>
        <li><a href='#'>Mart sale</a></li>
        <li><a href='#'>Hot sale</a></li>
        <li><a href='#'>50% off sale</a></li>
        <li><a href='#'>Landa bazar</a></li>
        <li><a href='#'>Dani free sale</a></li>
        <li><a href='#'>inni sale</a></li>
        <li><a href='#'>brand sale</a></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Footer;