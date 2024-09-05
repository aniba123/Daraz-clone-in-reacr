import img2 from '../../assets/fashion.png'
import img3 from '../../assets/beauty.png'
import img1 from '../../assets/home.png'
// import img5 from '../../assets/darazlikenew.png'
import img6 from '../../assets/freedel.png'
import img7 from '../../assets/addtocart.png'
import img8 from '../../assets/everyday.png'
import img9 from '../../assets/newondaraz.png'
import img10 from '../../assets/flashsale.png'
import './daraz-mart.css'


import products from "../../components/API/data";
import Card2 from "../../components/card/Card2"
const Pics = () =>{
    return(
        <>
         <div className='pics-list'>
      <ul>
       <li><img src={img1} style={{width:'86px'}} />Mart</li>
       <div className="piclist-vertical"></div>
       <li><img src={img2} style={{width:'86px'}} />Fashion</li>
       <div className="piclist-vertical"></div>
       <li><img src={img3} style={{width:'86px'}} />Beauty</li><br/>
       <div className="piclist-vertical"></div>
       <li><img src={img6} style={{width:'86px'}} />Free Delivery</li><br/>
       <div className="piclist-vertical"></div>
       <li><img src={img7} style={{width:'86px'}} />Add to Cart</li>
       <div className="piclist-vertical"></div>
       <li><img src={img8} style={{width:'86px'}} />Low Prices</li>
       <div className="piclist-vertical"></div>
       <li><img src={img9} style={{width:'86px'}} />New on Daraz</li>
       <div className="piclist-vertical"></div>
       <li><img src={img10} style={{width:'86px'}} />Flash Sale</li>
      </ul>
    </div>
    <h1 className="h1" >Just For You</h1>
        <div className="flashsale">
            {
                products.map((el)=>{
                    return(
                        <Card2 data={el}/>
                    )
                })
            }
        </div>
        </>
    );
}
export default Pics;