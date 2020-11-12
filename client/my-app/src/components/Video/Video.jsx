import React from "react";

export default function VideoPlayer({ video }) {
  if (!video) return <div>Loading</div>;
  console.log("video detail: ", video.id.videoId);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe
        title='YouTube Player'
        id='ytplayer'
        type='text/html'
        width='640'
        height='360'
        src={videoSrc}
        frameBorder='0'></iframe>
    </div>
  );
}
