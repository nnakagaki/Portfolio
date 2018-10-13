import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import FlareLoading from '../components/FlareLoading';
import StartScreen from '../components/StartScreen';
import Sidebar from '../components/Sidebar';

const duration = 300;

const defaultStyle = {
  transition : `opacity ${duration}ms ease-in-out`,
  opacity    : 0,
}

const transitionStyles = {
  entering : { opacity : 0 },
  entered  : { opacity : 1 },
};

class Application extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading    : true,
      mainScreen : false
    };

    this.documentLoadHandle();
    this.loadMainScreen = this.loadMainScreen.bind(this);
  }

  documentLoadHandle() {
    $(window).load(() => {
      window.setTimeout(() => {
        this.setState({ loading : false });
      }, 1000);
    });
  }

  loadMainScreen() {
    this.setState({ mainScreen : true })
  }

  render() {
    const { loading, mainScreen } = this.state;

    return (
      <div>
        <Transition
          unmountOnExit
          in={loading}
          timeout={300}
        >
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <FlareLoading />
            </div>
          )}
        </Transition>
        <Transition
          mountOnEnter
          unmountOnExit
          in={!loading && !mainScreen}
          timeout={300}
        >
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <StartScreen loadMainScreen={this.loadMainScreen} />
            </div>
          )}
        </Transition>
        <Transition
          mountOnEnter
          in={mainScreen}
          timeout={300}
        >
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <Sidebar imageUrl={window.imageUrl} />
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
})
