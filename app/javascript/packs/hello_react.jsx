import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FlareLoading from '../components/FlareLoading';
import StartScreen from '../components/StartScreen';

const Hello = props => (
  <div className="is-hidden">Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <FlareLoading />
      <StartScreen />
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
