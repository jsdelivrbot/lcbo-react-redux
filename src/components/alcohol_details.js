import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBottle, clearChoices } from '../actions';

import Loading from './loading'

class AlcoholDetails extends Component {
  componentDidMount() {
    if (!this.props.bottle) {
      this.props.fetchBottle(this.props.match.params.id);
    }
  }

  clearChoices() {
    this.props.clearChoices();
  }

  render() {
    const { bottle } = this.props;
    if (!bottle) {
      return (
        <Loading />
      );
    }
    return(
      <div className="details-container">
        <div className="alcohol-details">
          <img src={bottle.image_url} alt=""/>
          <br/>
          <h4>{bottle.name}</h4>
          <h5>{bottle.origin}</h5>
          <h5>{bottle.package}</h5>
          <h5>${(bottle.regular_price_in_cents / 100).toFixed(2)}</h5>
        </div>
        <br/>
        <Link 
          onClick={this.clearChoices.bind(this)}
          className="btn btn-secondary"
          to="/">
          Try it again!
        </Link>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  const choices = state.alcoholChoices;
  return {
    bottle: _.find(choices, c => c.id == ownProps.match.params.id)
  }
}

export default connect(mapStateToProps, { fetchBottle, clearChoices })(AlcoholDetails);
