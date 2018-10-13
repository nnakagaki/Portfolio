import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { sample } from 'lodash';

const imageClasses = [
  'norris-after-dance',
  'norris-pingpong',
  'norris-sephora',
  'norris-city-view'
];

export default class StartScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageClass           : 'norris-after-dance',
      workExtraPadding     : false,
      personalExtraPadding : false
    };

    this.rotateImage();

    this.workMouseEnter = this.workMouseEnter.bind(this);
    this.workMouseLeave = this.workMouseLeave.bind(this);
    this.personalMouseEnter = this.personalMouseEnter.bind(this);
    this.personalMouseLeave = this.personalMouseLeave.bind(this);
    this.toNextScreen = this.toNextScreen.bind(this);
  }

  rotateImage() {
    this.rotateImageInterval = window.setInterval(() => {
      this.setState({ imageClass : sample(imageClasses) });
    }, 5000);
  }

  workMouseEnter() {
    this.setState({ workExtraPadding : true });
  }

  workMouseLeave() {
    this.setState({ workExtraPadding : false });
  }

  personalMouseEnter() {
    this.setState({ personalExtraPadding : true });
  }

  personalMouseLeave() {
    this.setState({ personalExtraPadding : false });
  }

  toNextScreen() {
    const { loadMainScreen } = this.props;

    loadMainScreen();

    $(".js-work").off();
    $(".js-start-screen").fadeOut(() => {
      $(".js-start-screen").addClass("hidden");

      $(".js-show-after-load").css({ display: "none" }).removeClass("hidden").fadeIn(400);

      window.clearInterval(this.rotateImageInterval);

      window.setTimeout(() => {
        $(window).resize().scroll();
        $(".js-show-after-load-delay").css({ display: "none" }).removeClass("hidden").fadeIn();
      }, 0);
    });
  }

  render() {
    const { imageClass, workExtraPadding, personalExtraPadding } = this.state;
    const startScreenClassName = classNames('js-start-screen start-screen fixed-full', imageClass);
    const workClassName = classNames('js-work cursor-pointer ss-work-span', {
      'ss-more-padding' : workExtraPadding
    });
    const personalClassName = classNames('js-life cursor-pointer ss-personal-span', {
      'ss-more-padding' : personalExtraPadding
    });

    return (
      <div className={startScreenClassName}>
        <div className="ss-hello">Hi! I'm Norris</div>
        <div className="ss-left-side">
          <div className="vertical-center-wrapper">
            <div className="ss-work vertical-center-content">
              <span className={workClassName} onMouseEnter={this.workMouseEnter} onMouseLeave={this.workMouseLeave} onClick={this.toNextScreen}>Work &#10097;&#10097;</span>
            </div>
          </div>
        </div>
        <div className="ss-right-side">
          <div className="vertical-center-wrapper float-right">
            <div className="ss-personal vertical-center-content">
              <span className={personalClassName} onMouseEnter={this.personalMouseEnter} onMouseLeave={this.personalMouseLeave} onClick={this.toNextScreen}>&#10096;&#10096; Life</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
