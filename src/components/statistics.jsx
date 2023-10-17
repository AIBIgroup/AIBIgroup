import React from "react";

export const Statistics = (props) => {
    return (
        <div className="container">
            <div className="statistics">
                <div className="stats-text">
                    <h1>A Team Where Every Mind Counts</h1>
                    <div className="text-blue-bg">
                        <p>From seasoned leaders to new recruits, every member 
                        of our team helps develop and execute on powerful insights.
                         We bring together brilliant minds to do what others consider impossible.</p>
                        <a href="#">About our teams</a>
                    </div>
                </div>
            </div>
            <div className="stats-group">
                 
                 <div className="stats">
                    <h1>20+</h1>
                    <p>Medal wins at International Olympiads in Mathematics, Physics, Chemistry and Informatics</p>
                 </div>

                 <div className="stats">
                    <h1>40%</h1>
                    <p>Team members who hold an advanced degree</p>
                 </div>

                 <div className="stats">
                    <h1>250+</h1>
                    <p>PhDs across 55+ fields of study, from aeronautics and atmospheric science to computer engineering and statistics</p>
                 </div>

                 <div className="stats">
                    <h1>80+</h1>
                    <p>Nationalities represented</p>
                 </div>

            </div>
        </div>
    );
};