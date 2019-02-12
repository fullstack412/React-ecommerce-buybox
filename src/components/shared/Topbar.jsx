import React, {
  Component,
} from 'react';

import {
  AlertIcon
} from '../Icons';

export default class Topbar extends Component {

  render() {

    return (
      <header id="topbar">
        <div className="header-wrap">
          <div className="left-section">
            <a href="/" className="logo">
              Vivid Commerce
            </a>
            <AlertIcon />
          </div>
          <div className="right-section">
            <div className="customer-box">
              <h1 className="customer-name">Customer Name</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}