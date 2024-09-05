import './flashsale.css';
import products from "../../../components/API/data";
import Card2 from "../../../components/card/Card2";
const Flashsale=()=>{
    return(
        <>
        <h1>Flash sale</h1>
        <div className="flashsale">
            {
                products.map((el)=>{
                    return(
                        <Card2 data={el}/>
                    )
                })
            }
        </div>
        <div className="flashsale">
            {
                products.map((el)=>{
                    return(
                        <Card2 data={el}/>
                    )
                })
            }
        </div>
        <div className="flashsale">
            {
                products.map((el)=>{
                    return(
                        <card2 data={el}/>
                    )
                })
            }
        </div>
        </>

    );
}
export default Flashsale;