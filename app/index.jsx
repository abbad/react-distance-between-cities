/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home.jsx';

// Main entry to the app.
class Index extends React.Component {
  render() {
    return (<Home/>);
  }
}


ReactDOM.render(<Index/>, document.getElementById('root'));
