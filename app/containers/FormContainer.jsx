import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

import styles from './formContainer.css';
import cities from '../cities';


/**
 * A function used to trim auto complete result, based on user input.
 */
function matchStateToTerm(state, value) {
  return (
    state.city.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.state.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

/**
 * FormContainer to handle user input.
 * It has 2 auto complete components.
 * And 3 labels.
 */
export default class FormContainer extends React.Component {
  static propTypes = {
    handleFromSelect: PropTypes.func,
    handleFromChange: PropTypes.func,
    toName: PropTypes.string,
    distance: PropTypes.number,
    handleToChange: PropTypes.func,
    fromName: PropTypes.string,
    handleToSelect: PropTypes.func,
  };

  render() {
    const showDistance = this.props.distance !== 0;

    return (<div>
      <h1>
        Select Cities:
      </h1>

      { /* From Section */ }
      <label htmlFor='fromCity' className={ styles.label }>
              City A:
      </label>
      <div className={ styles.div_input }>
        <Autocomplete id='fromCity'
          getItemValue={item => item.city}
          items={cities}
          onChange={ this.props.handleFromChange }
          onSelect={ this.props.handleFromSelect }
          shouldItemRender={matchStateToTerm}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              { item.city }
            </div>)}
          className={ styles.input }
          value={this.props.fromName}
        />
      </div>
      { /* To Section */ }
      <br/>
      <label htmlFor='toCity' className={ styles.label }>
              City B:
      </label>
      <div className={ styles.div_input }>
        <Autocomplete id='toCity'
          getItemValue={item => item.city}
          className={ styles.input }
          onSelect={ this.props.handleToSelect }
          onChange={ this.props.handleToChange }
          items={cities}
          shouldItemRender={matchStateToTerm}
          value={this.props.toName}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.city}
            </div>)}/>
      </div>
      { /* Result Section */ }
      { showDistance &&
      <div className={ styles.label }>
           Distance: { this.props.distance } Miles.
      </div> }
    </div>);
  }
}
