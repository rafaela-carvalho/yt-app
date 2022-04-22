// The VideoList is going to take that array of video objects fetched in the YouTube API.
import React from 'react';
import VideoItem from './VideoItem';

// functional component
const VideoList = ({ videos, onVideoSelect }) => {
  // map over the video's array, and for every video inside there we will render one single video item component.
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
