
import './card2.css';
const Card2 = (props) =>{
    return(
        <>
        <div className="card2-main">
            <img src={props.data.imgurl} className="card2-self"></img>
           <div className="div-text">
           <p  > {props.data.paragraph} </p>
            <p style={{color:"red"}} >RS: {props.data.newprice} </p>
           <p style={{color:'gray'}} > RS:<span className="cut"> {props.data.oldprice} </span> <span> {props.data.disc} </span></p>
          
           </div>
        </div>
        </>
    );
}
export default Card2;
