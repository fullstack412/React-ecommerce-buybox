import React, {
  Component,
} from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default class PageWrapper extends Component {

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className='page-container'>
        <Sidebar />
        <div className='content'>
          <Topbar />
          <div className='main-content'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}