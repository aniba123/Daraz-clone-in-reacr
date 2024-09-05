import './card.css'
const Card=(props)=>{
    return(
        <>
        <div className="main-div1">
            <img src={props.imgurl} className="self-card-image" />
            <p className="name" >{props.name}</p>
        </div>
        </>
    );
}
export default Card;