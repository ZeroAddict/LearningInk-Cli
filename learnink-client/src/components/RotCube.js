import React from 'react';
import  "../app/styles/rotcube/stylesC.css"
// import video1 from "../../../public/assets/videos/1-SectionOverview(3)";


const RotCube = () => {
  return (
    <div className="scene">
    <div className="cube">
      <div className="cube_face cube_face--front show-front">front
        <video width={190} height={190} controls>
          <source src="/assets/videos/1-SectionOverview(3).mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cube_face show-back cube_face--back">back
      <video width={190} height={190} controls>
          <source src="/assets/videos/1-SectionOverview(4).mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="cube_face show-right cube_face--right">right
      <video width={190} height={190} controls>
          <source src="/assets/videos/1-SectionOverview(5).mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="cube_face show-left cube_face--left">left
      <video width={190} height={20} controls>
          <source src="/assets/videos/1-SectionOverview(6).mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="cube_face show-top cube_face--top">top
      <video width={190} height={190} controls>
          <source src="/assets/videos/1-SectionOverview(7).mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="cube_face show-bottom cube_face--bottom">
      <video width={190} height={190} controls>
          <source src="/assets/videos/1-SectionOverview(8).mp4" type="video/mp4"/>
        </video>bottom</div>
    </div>
  </div>
  )
}

export default RotCube;

/*

const cube = document.querySelector('.cube');

document.addEventListener('keydown', (e) => {
if (e.key === 'ArrowRight') {
cube.classList.add('show-right');
} else if (e.key === 'ArrowLeft') {
cube.classList.add('show-left');
}
});

*/ 