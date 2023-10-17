// import React from "react";

// export const Slider = (props) => {
//     return (
//         <div class="grants-slider">
//             <div class="slider-btns">
//                 <button class="prev-btn grants-prev-btn"><img src="img/portfolio/logo.png"></img></button>
//                 <button class="next-btn grants-next-btn"><img src="img/portfolio/logo.png"></button>
//             </div>
//             <div class="grants-slider-cont">
//                 <div class="card-wrapper swiper-wrapper">
//                     {% for post in posts %}
//                     <div class="grant-card swiper-slide">
//                         <div class="card-cont">
//                             <div class="img">
//                                 <img class="white-img" src="{{post.featured_images[0].path}}">
//                                 {/* <img class="black-img" src="{{post.featured_images[1].path}}"> */}
//                             </div>
//                             <div class="info">
//                                 <p class="title">{{post.title}}</p>
//                                 <p class="text">{{ post.excerpt }}</p>
//                                 <div class="news-bottom">
//                                     <div class="date">
//                                         <img class="white-img" src="img/portfolio/logo.png">
//                                         {/* <img class="black-img" src="img/portfolio/logo.png"> */}
//                                         <p>{{ post.published_at|date('d.m.Y') }}</p>
//                                     </div>
//                                     <a href="{{post.url}}">Толық оқу</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {% endfor %}
//                 </div>
//             </div>
//         </div>
// )}




import React from "react";
import HoverCarousel from "hover-carousel";

export const Slider = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

// export default Slider;