import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class AlcoholList extends Component {
  renderItem(item) {
    return(
      <Link 
        key={item}
        to={item}
        >
        <div 
          className="main-list-item"
          key={item}
          >
          <h1>{item}</h1>
        </div>
      </Link>
    );
  }

  render() {
    return(
      <div>
        <h1 className="main-title">Pick a Type of Alcohol!</h1>
        <div className="main-list">
          {this.props.mainList.map(a => this.renderItem(a))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    mainList: state.mainAlcoholList
  };
}

export default connect(mapStateToProps)(AlcoholList);