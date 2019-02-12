import React, {
  Component,
} from 'react';

import {
  PageWrapper,
} from '../../components';
import BuyboxContainer from './BuyboxContainer';
import MenuContainer from './MenuContainer';

export default class Buybox extends Component {

  render() {
    return (
      <PageWrapper>
        <MenuContainer />
        <BuyboxContainer />
      </PageWrapper>
    );
  }
}