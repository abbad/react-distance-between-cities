import React from 'react';

import FormContainer from './FormContainer.jsx';
import GMapContainer from './GMapContainer.jsx';

import getDistanceInNauticalMiles from '../utils';

import styles from './home.css';

// Main Page.
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAirportObj: {},
      toAirportObj: {},
      toAirportName: '',
      fromAirportName: '',
    };
  }

  handleFromChange(event, value) {
    this.setState({ fromAirportName: value });
  }

  handleToChange(event, value) {
    this.setState({ toAirportName: value });
  }

  handleFromSelect(airport, item) {
    this.setState({ fromAirportObj: item,
      fromAirportName: airport });
  }

  handleToSelect(airport, item) {
    this.setState({ toAirportObj: item,
      toAirportName: airport });
  }

  getLat1() {
    return this.state.fromAirportObj.latitude;
  }

  getLon1() {
    return this.state.fromAirportObj.longitude;
  }

  getLat2() {
    return this.state.toAirportObj.latitude;
  }

  getLon2() {
    return this.state.toAirportObj.longitude;
  }

  getDistance() {
    const lat1 = this.getLat1();
    const lon1 = this.getLon1();
    const lat2 = this.getLat2();
    const lon2 = this.getLon2();

    let nDistance = 0;
    if (lat1 && lon1 && lat2 && lon2) {
      nDistance = getDistanceInNauticalMiles(lat1, lon1, lat2, lon2);
    }
    return nDistance;
  }

  render() {
    const nDistance = this.getDistance();

    return (<div className={ styles.box }>
      <div className={ styles.formContainer } >
        <FormContainer
          fromName={ this.state.fromAirportName }
          toName={ this.state.toAirportName }
          handleFromSelect={ this.handleFromSelect.bind(this) }
          handleToSelect={ this.handleToSelect.bind(this) }
          handleFromChange={ this.handleFromChange.bind(this) }
          handleToChange={ this.handleToChange.bind(this) }
          distance = { nDistance } >
        </FormContainer>
      </div>
      <div className={ styles.mapComponent }>
        <GMapContainer lat1={ this.getLat1() } lat2={ this.getLat2() }
          iata1={ this.state.fromAirportObj.code }
          lon1={ this.getLon1() } lon2={ this.getLon2() }
          iata2={ this.state.toAirportObj.code }
        />
      </div>
    </div>);
  }
}
