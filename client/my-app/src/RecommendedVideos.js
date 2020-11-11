import React from "react";
import VideoCard from "./VideoCard"
import "./RecommendedVideos.css";


function RecommendedVideos(){
    return(
        <div className="RecommendedVideos">
            <h2>Recommended</h2>
            
            <iframe className="videoPlayer"  id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameBorder="0">

            </iframe>


            <div className="recommendedVideos__videos">
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                <VideoCard 
                title="" 
                views=""
                timestamp=""
                channelImage=""
                channel=""
                image=""
                />
                
        </div>
    </div>
    );
}

export default RecommendedVideos;