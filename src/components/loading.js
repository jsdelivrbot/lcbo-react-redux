import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

export default class Loading extends Component {
  render() {
    return(
      <div className="loading-container">
        <ClipLoader  
          loading={true}
          color={'#fff'} 
          size={200}
        />
      </div>
    );
  }
}