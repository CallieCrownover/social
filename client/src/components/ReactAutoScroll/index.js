import React from "react"; 
import "./style.css";




import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../assets/image/Urban-axe-throwing.jpg',
    altText: 'Slide 1',
    caption: <p>Come join us to throw a bunch of axes!</p>,
    header: <h1>Bad Axe Throwing</h1>,
    key: '1'
  },
  {
    src: '../assets/image/paintparty.jpg',
    altText: 'Slide 2',
    caption: <p>Painting the night away while sipping on some wine!</p>,
    header: <h1>Sip and Paint</h1>,
    key: '2'
  },
  {
    src: '../assets/image/yoga1.jpg',
    altText: 'Slide 3',
    caption: <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>,
    header: <h1>Yoga at Dawn</h1>,
    key: '3'
  },
  {
    src: '../assets/image/dogpark-4.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  },
  {
    src: '../assets/image/free_bowling.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '5'
  },
];


const ReactAutoScroll = () =>

      <div className="scroll" >
     
<UncontrolledCarousel items={items} />


</div>

export default ReactAutoScroll;







