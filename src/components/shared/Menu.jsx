import React, {
  Component,
} from 'react';
import { Button } from 'reactstrap';

import {
  HideIcon,
} from '../Icons';

export default class MenuContainer extends Component {
  state = {
    show: true,
  };

  toggleMenu = show => (ev) => {
    this.setState({ show });
  };

  render() {
    const {
      children,
    } = this.props;
    const { show } = this.state;

    return (
      <div style={{position: 'relative'}}>
        {!show && <Button onClick={this.toggleMenu(true)}>Menu</Button>}
        {show && <div className='menu-container'>
            <div className='menu-title'>
              <span className='title'>Product Categories</span>
              <span onClick={this.toggleMenu(false)}><HideIcon /></span>
            </div>
            {children}
          </div>
        }
      </div>
    );
  }
}