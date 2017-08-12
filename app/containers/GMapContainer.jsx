import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../components/MapMarker.jsx';

// Container for google maps.
export default class GMapContainer extends Component {
  static propTypes = {
    lat1: PropTypes.number,
    lat2: PropTypes.number,
    lon1: PropTypes.number,
    lon2: PropTypes.number,
    iata1: PropTypes.string,
    iata2: PropTypes.string,
    zoom: PropTypes.number,
    center: PropTypes.object,
  };

  static defaultProps = {
    center: { lat: 39, lng: -98 },
    zoom: 4,
  };

  render() {
    return (
      <div>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          { /* Check whether lat1, lon1 has been supplied, if so put a marker on the map.*/ }
          { this.props.lat1 && this.props.lon1 &&
            <MapMarker lat={ this.props.lat1 } lng={ this.props.lon1 }
              text={ this.props.iata1 } /> }

          { /* Check whether lat2 lon2 has been supplied, if so put a marker on the map. */ }
          { this.props.lat2 && this.props.lon2 &&
            <MapMarker lat={ this.props.lat2 } lng={ this.props.lon2 }
              text={ this.props.iata2 } />
          }
        </GoogleMapReact>
      </div>
    );
  }
}
