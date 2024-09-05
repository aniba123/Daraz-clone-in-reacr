import './sidemenu.css'
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CiBeaker1 } from "react-icons/ci";
import { FaShirt } from "react-icons/fa6";
import { FaStudiovinari } from "react-icons/fa";
import { GrRestroomWomen } from "react-icons/gr";
import { TbRazorElectric } from "react-icons/tb";
import { VscHome } from "react-icons/vsc";
import { MdOutlineElectricScooter } from "react-icons/md";
import { TbFridge } from "react-icons/tb";
import { MdSportsSoccer } from "react-icons/md";
import { VscWatch } from "react-icons/vsc";
import { FaMotorcycle } from "react-icons/fa";
const Sidemenu = () => {
  return (
   <>
    <div className='main-box'>
      <ul>
        <li><MdOutlineLocalGroceryStore rotate={270}   style={{  marginTop:"10px" ,marginLeft:"10px" , marginRight: "10px"}} />Groceries & Pets</li>
        <li><CiBeaker1 spin={90} style={{ marginLeft:"10px" , marginRight: "10px"}} />Health & Beauty</li>
        <li><FaShirt  style={{ marginLeft:"10px" , marginRight: "10px"}} />Mens Fashion</li>
        <li><FaStudiovinari  style={{ marginLeft:"10px" , marginRight: "10px"}}  />Womens Fashion</li>
        <li><GrRestroomWomen  style={{marginLeft:"10px" , marginRight: "10px"}}  />Mother & Baby</li>
        <li><VscHome  style={{marginLeft:"10px" , marginRight: "10px"}}  />Home & Lifestyle</li>
        <li><TbRazorElectric style={{marginLeft:"10px" , marginRight: "10px"}} />Electronic Devices</li>
        <li><MdOutlineElectricScooter style={{marginLeft:"10px" , marginRight: "10px"}} />Electronic Accessories</li>
        <li><TbFridge style={{marginLeft:"10px" , marginRight: "10px"}} />TV & Home Appliances</li>
        <li><MdSportsSoccer style={{marginLeft:"10px" , marginRight: "10px"}} />Sports & Outdoor</li>
        <li><VscWatch style={{marginLeft:"10px" , marginRight: "10px"}} />Watches,Bags & Jewellery</li>
        <li><FaMotorcycle style={{marginLeft:"10px" , marginRight: "10px"}} />Automotive & Motorbike</li>
      </ul>
    </div>
   </>
  )
};

export default Sidemenu;