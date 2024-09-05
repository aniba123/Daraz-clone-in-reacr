import './item-list.css'
import bathroom from '../../assets/bathroom.jpg'
import drawing from '../../assets/drawing.jpg'
import drills from '../../assets/drills.jpg'
import electric from '../../assets/electric.jpg'
import  hats from '../../assets/tovels.jpg'
import  heaters from '../../assets/heaters.jpg'
import inear from '../../assets/inear.jpg'
import oil from '../../assets/oil.jpg'
import shampo from '../../assets/shampo.jpg'
import smartwatches from '../../assets/smartwatches.jpg'
import sneakers from '../../assets/sneakers.jpg'
import tovels from '../../assets/tovels.jpg'
import trimmers from '../../assets/trimmers.jpg'
import walldocor from '../../assets/walldocor.jpg'
import Card from "../../components/card/Card";
const Divlist=()=>{
    return(
        <>
        <h1>Catagories</h1>
        <div className="div1">
                <Card imgurl={walldocor} name="Walldocor" />
                <Card imgurl={trimmers} name="Trimmers" />
                <Card imgurl={tovels} name="Tovels" />
                <Card imgurl={sneakers} name="Sneakers" />
                <Card imgurl={smartwatches} name="SmartWatches" />
                <Card imgurl={shampo} name="Shampoes" />
                <Card imgurl={oil} name="Oil" />
                <Card imgurl={sneakers} name="Sneakers" />
        </div>
        <div className="div2">
            <Card imgurl={inear} name="Inear" />
            <Card imgurl={heaters} name="Heaters" />
            <Card imgurl={hats} name="Hats" />
            <Card imgurl={electric} name="Electric" />
            <Card imgurl={drills} name="Drills" />
            <Card imgurl={drawing} name="Drawing" />
            <Card imgurl={bathroom} name="Bathrooms" />
            <Card imgurl={hats} name="Hats" />
        </div>
        </>
    );
}
export default Divlist;