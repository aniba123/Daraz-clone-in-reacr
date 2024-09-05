import Sidemenu from '../firstpage/Sidemenu';
import Slider from '../firstpage/Slider';
import './home.css';
import Simage from '../section/Secondimage';
import Pics from '../section/Daraz-mart';
import Divlist from '../section/Item-list';
import Flashsale from '../sales/Flashsale/Flashsale';
const Home = () => {
  return (

    <>
     <div className='working-area'>
        <div className='main-section'>
          <Sidemenu />
          <Slider />
        </div>
        <Simage />
      <div>
        <Pics/>
      </div>
      <Divlist/>
      <div>
        <Flashsale/>
      </div>
      </div>
    </>
  )
}

export default Home;