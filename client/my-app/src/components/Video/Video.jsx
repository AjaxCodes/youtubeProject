import React from "react";

export default function VideoPlayer() {
  return (
    <div>
      <iframe
        title='YouTube Player'
        id='ytplayer'
        type='text/html'
        width='640'
        height='360'
        src='https://www.youtube.com/embed/Lwv3Hvr24JE'
        frameBorder='0'></iframe>
    </div>
  );
}
