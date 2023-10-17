import React from "react";

export const Video = (props) => {
    return (
        <div className="video-section">
            <video className="video" controls>
                {/* <source src="video/12 лет рабства.mp4" type="video/mp4"></source> */}
                <source src="movie.ogg" type="video/ogg"></source>
                Your browser does not support the video tag.
            </video>
        </div>
            );
        };