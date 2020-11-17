import React from "react";

export default function VideoPlayer({ video }) {
  if (!video) return <div></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe
          title='YouTube Player'
          id='ytplayer'
          type='text/html'
          width='640'
          height='360'
          src={videoSrc}
          frameBorder='0'></iframe>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
