import React, { PureComponent } from 'react';

export default class Sidebar extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onClick(event) {
    $('html, body').animate({
      scrollTop : $($("main ."+event.target.className).last()).offset().top
    }, 300);
  }

  onMouseEnter(event) {
    $(event.currentTarget).addClass("hover-animation");
    var intLength   = 2000,
        intLength2  = 500,
        timeoutFunc = () => {
          this.heartbeat = setTimeout(() => {
            intLength  = intLength * 0.9;
            intLength2 = intLength2 * 0.9;
            $(event.currentTarget).addClass("add-contrast");

            this.heartbeat2 = setTimeout(() => {
              $(event.currentTarget).removeClass("add-contrast");
            }, intLength2);

            timeoutFunc();
          }, intLength);
        };

    timeoutFunc();
  }

  onMouseLeave(event) {
    $(event.currentTarget).removeClass("hover-animation");
    $(event.currentTarget).removeClass("add-contrast");
    clearInterval(this.heartbeat);
    clearTimeout(this.heartbeat2);
  }

  render() {
    return (
      <div className="side-bar">
        <div className="top-curve"></div>
        <div className="top-curve2"></div>
        <h1>Norris Nakagaki</h1>
        <div className="triangle"></div>
        <div className="top-circle"></div>
        <img src={imageUrl} />
        <ul>
          <li className="intro" onClick={this.onClick}><div className="right-arrow"></div>Intro</li>
          <li className="projects" onClick={this.onClick}><div className="right-arrow"></div>Projects</li>
          <li className="skills" onClick={this.onClick}><div className="right-arrow"></div>Skills</li>
          <li className="about" onClick={this.onClick}><div className="right-arrow"></div>About</li>
          <li className="contact" onClick={this.onClick}><div className="right-arrow"></div>Contact</li>
        </ul>

        <ul className="links">
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="github" href='https://github.com/nnakagaki' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="linkedin" href='https://www.linkedin.com/pub/norris-nakagaki/26/6b2/85b' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="codeeval" href='http://www.codeeval.com/profile/nnakagaki/' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="project-euler" href='https://projecteuler.net/profile/norichan.png' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="facebook" href='https://www.facebook.com/itsfinetoday' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="tumblr" href='https://www.tumblr.com/blog/nnakagaki' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="deviantart" href='http://norisuke.deviantart.com/' target='_blank'></a></li>
          <li><a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="youtube" href='https://www.youtube.com/channel/UCd8sPxNL3EC_QTshgLbfqSw' target='_blank'></a></li>
        </ul>
      </div>
    );
  }
}
