import React from 'react';
import VideoGrid from './VideoGrid';

const videosData = [
  {
    title: 'Video1',
    src: null,
  },
  {
    title: 'Video2',
    src: null,
  },
  {
    title: 'Video3',
    src: null,
  },
  {
    title: 'Video4',
    src: null,
  },
  {
    title: 'Video5',
    src: null,
  },
  {
    title: 'Video6',
    src: null,
  },
  {
    title: 'Video7',
    src: null,
  },
  {
    title: 'Video8',
    src: null,
  },
  {
    title: 'Video9',
    src: null,
  },
  {
    title: 'Video10',
    src: null,
  },
  {
    title: 'Video11',
    src: null,
  },
  {
    title: 'Video12',
    src: null,
  },
  {
    title: 'Video13',
    src: null,
  },
  {
    title: 'Video14',
    src: null,
  },
  {
    title: 'Video15',
    src: null,
  },
  {
    title: 'Video16',
    src: null,
  },
  {
    title: 'Video17',
    src: null,
  },
  {
    title: 'Video18',
    src: null,
  },
  {
    title: 'Video19',
    src: null,
  },
  {
    title: 'Video20',
    src: null,
  },
  {
    title: 'Video21',
    src: null,
  },
  {
    title: 'Video22',
    src: null,
  },
  {
    title: 'Video23',
    src: null,
  },
  {
    title: 'Video24',
    src: null,
  },
];

const Video = ({ title, src }) => (
  <div className="flex-1 p-4">
    <h2 className="text-lg     font-bold mb-2 hover:border-solid hover:transition-shadow">{title}</h2>
    <video src={src} className="w-full h-10" />
    <VideoGrid/>
  </div>
);

const VideoSection = () => (
  <div className="grid grid-cols-6 gap-4 w-[100vw] justify-between">
    {videosData.map((video, index) => (
      <Video key={index} {...video} />
      
    ))}
  </div>
);

export default VideoSection;