import React from "react"; 
import "./style.css";




import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.northwestmilitary.com/northwest-travel/attractions/2019/01/Urban-axe-throwing-trend-hits-the-Northwest/uploads/articles/29881-banner-Urban-axe-throwing-trend-hits-the-Northwest.jpg',
    altText: 'Slide 1',
    caption: <p>Come join us to throw a bunch of axes!</p>,
    header: <h1>Bad Axe Throwing</h1>,
    key: '1'
  },
  {
    src: 'https://media.truelocal.com.au/4/9/42784066-3AAF-45C6-BF44-B6AC6E9C4049/1521284059904_IMG_8143-300x0.jpg',
    altText: 'Slide 2',
    caption: <p>Painting the night away while sipping on some wine!</p>,
    header: <h1>Sip and Paint</h1>,
    key: '2'
  },
  {
    src: 'https://ak.picdn.net/shutterstock/videos/1026372254/thumb/1.jpg',
    altText: 'Slide 3',
    caption: <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>,
    header: <h1>Yoga at Dawn</h1>,
    key: '3'
  },
  {
    src: 'https://mcdowallvets.com.au/wp-content/uploads/2018/08/dogpark-4.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  },
  {
    src: 'https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '5'
  },
];


const ReactAutoScroll = () =>

      <div className="scroll" >
     <div className="auto-scroll">
<UncontrolledCarousel items={items} />

</div>
</div>

export default ReactAutoScroll;







