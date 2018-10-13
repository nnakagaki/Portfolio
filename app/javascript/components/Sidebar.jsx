import React from 'react';

export default function Sidebar({ imageUrl }) {
  return (
    <div className="side-bar">
      <div className="top-curve"></div>
      <div className="top-curve2"></div>
      <h1>Norris Nakagaki</h1>
      <div className="triangle"></div>
      <div className="top-circle"></div>
      <img src={imageUrl} />
      <ul>
        <li className="intro"><div className="right-arrow"></div>Intro</li>
        <li className="projects"><div className="right-arrow"></div>Projects</li>
        <li className="skills"><div className="right-arrow"></div>Skills</li>
        <li className="about"><div className="right-arrow"></div>About</li>
        <li className="contact"><div className="right-arrow"></div>Contact</li>
      </ul>

      <ul className="links">
        <li><a className="github" href='https://github.com/nnakagaki' target='_blank'></a></li>
        <li><a className="linkedin" href='https://www.linkedin.com/pub/norris-nakagaki/26/6b2/85b' target='_blank'></a></li>
        <li><a className="codeeval" href='http://www.codeeval.com/profile/nnakagaki/' target='_blank'></a></li>
        <li><a className="project-euler" href='https://projecteuler.net/profile/norichan.png' target='_blank'></a></li>
        <li><a className="facebook" href='https://www.facebook.com/itsfinetoday' target='_blank'></a></li>
        <li><a className="tumblr" href='https://www.tumblr.com/blog/nnakagaki' target='_blank'></a></li>
        <li><a className="deviantart" href='http://norisuke.deviantart.com/' target='_blank'></a></li>
        <li><a className="youtube" href='https://www.youtube.com/channel/UCd8sPxNL3EC_QTshgLbfqSw' target='_blank'></a></li>
      </ul>
    </div>
  );
}
