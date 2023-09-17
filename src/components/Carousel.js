import {Carousel} from '3d-react-carousal';

let slides = [
  <img  src="/assets/swipe1.jpg" alt="1" />,
  <img  src="/assets/swipe.jpeg" alt="2" />  ,
  <img  src="/assets/swipe3.jpg" alt="3" />  ,
  <img  src="/assets/swipe4.jpg" alt="4" />  ,
  <img src="/assets/swipe5.jpg" alt="5" /> ,
  <img  src="/assets/swipe6.jpg" alt="6" />  , 
  <img  src="/assets/swipe7.jpeg" alt="7" />  ,
  <img  src="/assets/swipe8.jpeg" alt="8" />  ,
  <img  src="/assets/swipe9.jpg" alt="9" />  ,
  <img  src="/assets/swipe10.jpg" alt="10" />  ,
 ];

const CustomCarousel = () =>{
  return(
    <Carousel slides={slides} autoplay={true} interval={2500}/>
  )
}
export default CustomCarousel;
