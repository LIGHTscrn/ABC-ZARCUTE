import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from 'react';

export default function Ls_2(){
    return(
        <>
        <div className="row row-cols-1 shadow g-4 p-5">
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Virtual Event Streaming</h5>
                        <p className="card-text">Host webinars, conferences, and online summits with real-time audience engagement.<br />
                        Broadcast to multiple platforms like YouTube, Facebook, LinkedIn, and custom websites.<br />
                        Features: Live Q&A, polls, breakout rooms, screen sharing, and live chat.
                        </p>
                        <img src="livestream2.webp" height="auto" width="100%" alt="Virtual Event Streaming" />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Offline Event Streaming</h5>
                        <p className="card-text">Relive memorable occasions worldwide by live streaming your special moments with friends,<br /> 
                        family, and more people.Wedding,Celebration,Meeting,
                        </p>
                        <img src="livestream1.png" alt="Offline Event Streaming" />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">3. Esports & Gaming Live Streams</h5>
                        <p className="card-text">End-to-end streaming for esports tournaments, gaming events, and influencer streams.<br/>
                        Advanced overlays, real-time scoreboards, and professional commentators.<br/>
                        Live broadcast on Twitch, YouTube Gaming, and custom esports hubs.
                        </p>
                        <img src="./livestream3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}