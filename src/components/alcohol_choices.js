import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAlcoholChoices } from '../actions';

import Loading from './loading';

class AlcoholChoices extends Component {
  componentWillMount() {
    this.props.fetchAlcoholChoices(this.props.match.params.type);
  }

  renderBottle(b) {
    return (
      <Link 
        className="list-group-item list-group-item-action"
        key={b.id}
        to={`/details/${b.id}`}
        >
        <h5>{b.style || b.varietal} from {b.origin ? b.origin.replace(', Region Not Specified', '') : ''}</h5>
      </Link>
    );
  }

  render() {
    if (this.props.choices.length === 0) {
      return(
        <Loading />
      );
    }

    const randomIndices = [];

    // generate 5 random numbers
    while (randomIndices.length < 5) {
      let rand = _.random(0, this.props.choices.length);

      if (randomIndices.indexOf(rand) === -1) {
        randomIndices.push(rand);
      }
    }

    return(
      <div>
        <h1 className="main-title">Which one seems more interesting to you?</h1>
        <div className='list-group alcohol-choices'>
          {randomIndices.map(i => this.renderBottle(this.props.choices[i]))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    choices: state.alcoholChoices
  };
}

export default connect(mapStateToProps, { fetchAlcoholChoices })(AlcoholChoices);