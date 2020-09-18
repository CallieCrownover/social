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

      <div className="scroll col px-md-5 d-flex justify-content-end" >
     <div className="auto-scroll">
<UncontrolledCarousel items={items} />

</div>
</div>

export default ReactAutoScroll;




// import React from 'react';
// import { UncontrolledCarousel } from 'reactstrap';

// const items = [
//   {
//     src: 'https://www.northwestmilitary.com/northwest-travel/attractions/2019/01/Urban-axe-throwing-trend-hits-the-Northwest/uploads/articles/29881-banner-Urban-axe-throwing-trend-hits-the-Northwest.jpg',
//     altText: 'Slide 1',
//     caption: <p>Come join us to throw a bunch of axes!</p>,
//     header: <h1>Bad Axe Throwing</h1>,
//     key: '1'
//   },
//   {
//     src: 'https://media.truelocal.com.au/4/9/42784066-3AAF-45C6-BF44-B6AC6E9C4049/1521284059904_IMG_8143-300x0.jpg',
//     altText: 'Slide 2',
//     caption: <p>Painting the night away while sipping on some wine!</p>,
//     header: <h1>Sip and Paint</h1>,
//     key: '2'
//   },
//   {
//     src: 'https://ak.picdn.net/shutterstock/videos/1026372254/thumb/1.jpg',
//     altText: 'Slide 3',
//     caption: <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>,
//     header: <h1>Yoga at Dawn</h1>,
//     key: '3'
//   },
//   {
//     src: 'https://mcdowallvets.com.au/wp-content/uploads/2018/08/dogpark-4.jpg',
//     altText: 'Slide 4',
//     caption: 'Slide 4',
//     header: 'Slide 4 Header',
//     key: '4'
//   },
//   {
//     src: 'https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg',
//     altText: 'Slide 5',
//     caption: 'Slide 5',
//     header: 'Slide 5 Header',
//     key: '5'
//   },
// ];

// const ReactAutoScroll = () => <UncontrolledCarousel items={items} />;

// export default ReactAutoScroll;































// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// const items = [
//   {
//     id: 1,
//     src: 'https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg',
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     id: 2,
//     src: 'https://mcdowallvets.com.au/wp-content/uploads/2018/08/dogpark-4.jpg',
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     id: 3,
//     src: 'https://www.northwestmilitary.com/northwest-travel/attractions/2019/01/Urban-axe-throwing-trend-hits-the-Northwest/uploads/articles/29881-banner-Urban-axe-throwing-trend-hits-the-Northwest.jpg',
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];

// const ReactAutoScroll = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         className="custom-tag"
//         tag="div"
//         key={item.id}
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//       >
//         <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <div>
//       <style>
//         {
//           `.custom-tag {
//               max-width: 100%;
//               height: 500px;
//               background: black;
//             }`
//         }
//       </style>
//       <Carousel
//         activeIndex={activeIndex}
//         next={next}
//         previous={previous}
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//       </Carousel>
//     </div>
//   );
// }

// export default ReactAutoScroll;











// import "../node_modules/bootstrap/scss/bootstrap";



// function ReactAutoScroll(props) {
//   return (
    
    
// <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://www.northwestmilitary.com/northwest-travel/attractions/2019/01/Urban-axe-throwing-trend-hits-the-Northwest/uploads/articles/29881-banner-Urban-axe-throwing-trend-hits-the-Northwest.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h1>Axe Throwing</h1>
//         <p>Come join us to throw a bunch of axes!</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://studio.pinotspalette.com/naperville/images/nap-takehome.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-caption d-none d-md-block">
//         <h1>Sip and Paint</h1>
//         <p>Painting the night away while sipping on some wine!</p>
//       </div>
//     <div class="carousel-item">
//       <img src="https://ak.picdn.net/shutterstock/videos/1026372254/thumb/1.jpg" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h1>Yoga at Dawn</h1>
//         <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>

// );
// }
// export default ReactAutoScroll;
























// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// function ReactAutoScroll(props) {
//   return (
//       <div className="scroll">
//     <div className="auto-scroll">
        
//      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
//      <div class="carousel-inner">
//      <div class="carousel-item active">
//        <img src="https://www.northwestmilitary.com/northwest-travel/attractions/2019/01/Urban-axe-throwing-trend-hits-the-Northwest/uploads/articles/29881-banner-Urban-axe-throwing-trend-hits-the-Northwest.jpg" class="d-block w-100" alt="..."/>
//        <div class="carousel-caption d-none d-md-block">
//          <h1>Axe Throwing</h1>
//          <p>Come join us to throw a bunch of axes!</p>
//        </div>
//      </div>
//      <div class="carousel-item">
//        <img src="https://studio.pinotspalette.com/naperville/images/nap-takehome.jpg" class="d-block w-100" alt="..."/>
//      </div>
//      <div class="carousel-caption d-none d-md-block">
//          <h1>Sip and Paint</h1>
//          <p>Painting the night away while sipping on some wine!</p>
//        </div>
//      <div class="carousel-item">
//        <img src="https://ak.picdn.net/shutterstock/videos/1026372254/thumb/1.jpg" class="d-block w-100" alt="..."/>
//        <div class="carousel-caption d-none d-md-block">
//          <h1>Yoga at Dawn</h1>
//          <p>Get your zen on! Come do yoga at dawn with us and stretch the day away.</p>
//        </div>
//      </div>
//      <div class="carousel-item">
//        <img src="..." class="d-block w-100" alt="..."/>
//      </div>
//      <div class="carousel-item">
//        <img src="..." class="d-block w-100" alt="..."/>
//      </div>
//      <div class="carousel-item">
//        <img src="..." class="d-block w-100" alt="..."/>
//      </div>
//    </div>
//    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//      <span class="sr-only">Previous</span>
//    </a>
//    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//      <span class="carousel-control-next-icon" aria-hidden="true"></span>
//      <span class="sr-only">Next</span>
//    </a>
//  </div>
      
//     </div>
//     </div>
//   );
// }

// export default ReactAutoScroll;



