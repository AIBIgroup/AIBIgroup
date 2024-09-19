import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Intro } from "./components/intro";
import { About } from "./components/about";
import { Actions } from "./components/actions";
import { Video } from "./components/video";
import { Footer } from "./components/footer";
import { FixedButton } from "./components/button";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import { Statistics } from "./components/statistics";
// import { Careers } from "./components/careers";
// import { News } from "./components/news";
// import { Slider } from "./components/slider";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
   speed: 1000,
   speedAsDuration: true,
});

const App = () => {
   const [landingPageData, setLandingPageData] = useState({});
   useEffect(() => {
      setLandingPageData(JsonData);
   }, []);

   return (
      <div>
         <Navigation />
         <Intro data={landingPageData.Intro} />
         <About data={landingPageData.About} />
         <Video data={landingPageData.Video} />
         <Actions data={landingPageData.Actions} />
         <Footer data={landingPageData.Footer} />
         <FixedButton data={landingPageData.FixedButton} />
         {/* <Button data={landingPageData.Button} /> */}
         {/* <Services data={landingPageData.Services} /> */}
         {/* <Statistics data={landingPageData.Statistics} /> */}
         {/* <Careers data={landingPageData.Careers} /> */}
         {/* <News data={landingPageData.News} /> */}
         {/* <Header data={landingPageData.Header} /> */}
         {/* <Slider data={landingPageData.Slider} /> */}
      </div>
   );
};

export default App;
