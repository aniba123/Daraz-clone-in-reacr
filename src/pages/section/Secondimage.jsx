import image2 from '../../assets/hotdeals.jpg'
import './secondimage.css';
import safe from '../../assets/safepayment.png';
import delivry from '../../assets/nationalwide.png';
import free from '../../assets/free.png';
import best from '../../assets/best.png';
import authentic from '../../assets/authentic.png';
import daraz from '../../assets/daraz.png';
const Simage = () => {
    return (
        <>
        <div className="home-small-line">
            <ul>
                <li><img src={safe} className="home-small-selfimg"/>Safe Payments </li>
                <li>|</li>
                <li><img src={delivry} className="home-small-selfimg"/>Nationwide Delivery </li>
                <li>|</li>
                <li><img src={free} className="home-small-selfimg"/>Free & Easy Returns </li>
                <li>|</li>
                <li><img src={best} className="home-small-selfimg"/>Best Price Guaranteed</li>
                <li>|</li>
                <li><img src={authentic} className="home-small-selfimg"/>100% Authentic Products </li>
                <li>|</li>
                <li><img src={daraz} className="home-small-selfimg"/>Daraz Verified </li>
                <li>|</li>
            </ul>
        </div>
            <div className="simage">
                <a href="#"><img src={image2} className="self-image" /></a>
            </div>
        
        </>
    );
}
export default Simage;