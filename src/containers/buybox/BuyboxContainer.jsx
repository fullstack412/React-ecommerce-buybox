import React, {
  Component,
} from 'react';

import SummaryContainer from './SummaryContainer';
import GraphContainer from './GraphContainer';

export default class BuyboxContainer extends Component {

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <span className='title'>BuyBox Tracking</span>
          <div className='period-bar'>
            <div className='period-box'>
              11/25/2018 - 11/26/2018
            </div>
            <div className='period-button-group'>
              <span className='period-button selected'>D</span>
              <span className='period-button'>M</span>
              <span className='period-button'>W</span>
            </div>
          </div>
        </div>
        <GraphContainer />
        <SummaryContainer />
      </div>
    );
  }
}