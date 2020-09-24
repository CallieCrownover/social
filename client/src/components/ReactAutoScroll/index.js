import React from "react"; 
import "./style.css";




import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../assets/image/axeThrowing.png',
    altText: 'Slide 1',
    caption: <p>Come join us to throw a bunch of axes!</p>,
    header: <h1>Bad Axe Throwing</h1>,
    key: '1'
  },
  {
    src: '../assets/image/PaintandSip.png',
    altText: 'Slide 2',
    caption: <p>Painting the night away while sipping on some wine!</p>,
    header: <h1>Sip and Paint</h1>,
    key: '2'
  },
  {
    src: '../assets/image/yoga.png',
    altText: 'Slide 3',
    caption: <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>,
    header: <h1>Yoga at Dawn</h1>,
    key: '3'
  },
  {
    src: '../assets/image/dogPark.png',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  },
  {
    src: '../assets/image/Bowling.png',
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '5'
  },
];


const ReactAutoScroll = () =>

      <div className="scroll" className="carousel slide carousel-fade">
     
<UncontrolledCarousel items={items} />


</div>

export default ReactAutoScroll;







