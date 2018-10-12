import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import FlareLoading from '../components/FlareLoading';
import StartScreen from '../components/StartScreen';

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
      loading : true
    };

    this.documentLoadHandle();
  }

  documentLoadHandle() {
    $(window).load(() => {
      window.setTimeout(() => {
        this.setState({ loading : false });
      }, 1000);
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Transition
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
          in={!loading}
          timeout={300}
        >
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <StartScreen />
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
