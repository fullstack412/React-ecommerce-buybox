import React, {
  Component,
} from 'react';

import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  SettingsIcon,
} from '../Icons';

const MENU_ITEMS = [{
  path: '/',
  name: 'Page1',
  icon: <Icon1 />,
}, {
  path: '/',
  name: 'Page2',
  icon: <Icon2 />,
}, {
  path: '/',
  name: 'Page3',
  icon: <Icon3 />,
}, {
  path: '/',
  name: 'Page4',
  icon: <Icon4 />,
}, {
  path: '/',
  name: 'Page5',
  icon: <Icon5 />,
}];

export default class Sidebar extends Component {

  render() {

    return (
      <div id='sidebar'>
        <div>
          {MENU_ITEMS.map((item, id) => {
            const cls = id === 2 ? 'selected' : '';

            return (<div className='nav-item' key={id}>
              <a key={id} className={cls} href={item.path}>{item.icon}</a>
            </div>
            )
          })}
        </div>
        <div>
          <span className='nav-item'><SettingsIcon /></span>
        </div>
      </div>
    )
  }
}