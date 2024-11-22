import React from 'react';
import { useState } from 'react';
// import LazyLoad from 'react-lazy-load';

//fetching from database
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';

// const fetchVideos = async () => {
//   const response = await axios.get('/api/videos');
//   return response.data;
// };

// const VideoGrid = () => {
//   const { data, isLoading, error } = useQuery('videos', fetchVideos);
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (

//   );

// }

const VideoGrid = (props) => {
  const [showMenu, setShowMenu] = useState({});
  const videos = [
    {
      title: 'Video 1',
      duration: '3:45',
      creator: 'John Doe',
      section: 'Programming',
      src: '(link unavailable)',
    },
    // Add more videos...
  ];

  const handleMenu = (index) => {
    setShowMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded">
        <LazyLoad key={index} offset={100}>
          <div className="bg-gray-100 p-4 rounded">
            {/* Video content */}
          </div>
        </LazyLoad>
          <video src={video.src} className="w-full h-48" />
          <div className="mt-2">
            <h2 className="text-lg font-bold">{video.title}</h2>
            <p className="text-gray-600 text-sm">
              {video.duration} • {video.creator} • {video.section}
            </p>
          </div>
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => handleMenu(index)} >

            {/* <IconEllipses/> */}
          </div>
          {showMenu[index] && (
            <div className="absolute top-10 right-4 bg-gray-100 p-4 rounded">
              <ul>
                <li className="py-2 hover:bg-gray-200 cursor-pointer">
                  Save
                </li>
                <li className="py-2 hover:bg-gray-200 cursor-pointer">
                  Watch Later
                </li>
                <li className="py-2 hover:bg-gray-200 cursor-pointer">
                  Add to Playlist
                </li>
                <li className="py-2 hover:bg-gray-200 cursor-pointer">
                  Share
                </li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;