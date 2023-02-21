import React, { useEffect } from 'react';

function YouTubePlayer({ videoLink }) {
  useEffect(() => {
    const videoId = videoLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]+)/)[1];

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        videoId: videoId,
        height: 360,
        playerVars: {
            autoplay: 1,
          },
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoLink]);

  return (
    <div id="player">
      Loading...
    </div>
  );
}

export default YouTubePlayer;
