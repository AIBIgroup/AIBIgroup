import React from "react";export const Video = () => {
   return (
      <div className="video-section">
         <div className="container">
            <iframe
               className="video"
               width="560"
               height="315"
               src="https://www.youtube.com/embed/Ud5FirIK_mI"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            ></iframe>
         </div>
      </div>
   );
};
