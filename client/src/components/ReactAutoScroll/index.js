import React from "react"; 
import "./style.css";

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../assets/image/axeThrowing.png',
    altText: 'Slide 1',
    caption: <p className="descript rounded">Come join us to throw a bunch of axes!</p>,
    header: <h1 className="event-name rounded">Bad Axe Throwing</h1>,
    key: '1'
  },
  {
    src: '../assets/image/PaintandSip.png',
    altText: 'Slide 2',
    caption: <p className="descript rounded">Painting the night away while sipping on some wine!</p>,
    header: <h1 className="event-name rounded">Sip and Paint</h1>,
    key: '2'
  },
  {
    src: '../assets/image/yoga.png',
    altText: 'Slide 3',
    caption: <p className="descript rounded">Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>,
    header: <h1 className="event-name rounded">Yoga at Dawn</h1>,
    key: '3'
  },
  {
    src: '../assets/image/dogPark.png',
    altText: 'Slide 4',
    caption: <p className="descript rounded">Bark, Beer and Boos!</p>,
    header: <h1 className="event-name rounded">Barktoberfest</h1>,
    key: '4'
  },
  {
    src: '../assets/image/Bowling.png',
    altText: 'Slide 5',
    caption: <p className="descript rounded">Split Happens!</p>,
    header: <h1 className="event-name rounded">Big League Bowling Bash</h1>,
    key: '5'
  },
];


const ReactAutoScroll = () =>

      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />


</div>

export default ReactAutoScroll;







