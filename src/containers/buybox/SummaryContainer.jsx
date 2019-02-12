import React, {
  Component
} from 'react';
import styled from 'styled-components';

import {
  DropDown,
  Slider,
  SummaryTable,
} from '../../components';

//Import mock data
import PRODUCT_SUMMARY from '../../mockup/product_summary';
/* Dev Note - Guillermo */
/*
  Currently I don't have any REST API service, so just import product summary mock data.
  And present them onto my own slider component. Slider component just manages page count, current page, etc.
  In the real mode, we don't need to fetch all product summary data.
  When page is changed by slider, front-end requires N page's data to server.
  And present those received data to summary section.
*/

const SUMMARY_ITEMS = ['Product Summary', 'Competition Summary'];
const COUNT_PER_PAGE = 5;

const Flexbox = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  
  & > div:first-child {
    margin-right: 20px;
  }
`;

export default class SummaryContainer extends Component {
    
  constructor (props) {
    super(props);

    this.state = {
      summaryId: 0,
      pageNum: 0,
      pageCount: Math.round(PRODUCT_SUMMARY.length / COUNT_PER_PAGE),
    };
  }

  _onChangeSummary = (id) => {
    this.setState({ summaryId: id });
  };

  _onPageChange = (n) => {
    this.setState({ pageNum: n });
  };

  render() {
    const { summaryId, pageNum, pageCount } = this.state;
    
    //Dev NOTE - This should be fetched by API call when page is changed.
    const summaryData = PRODUCT_SUMMARY.slice(pageNum * COUNT_PER_PAGE, Math.min(PRODUCT_SUMMARY.length - 1, (pageNum + 1) * COUNT_PER_PAGE));

    return (
      <div className='container'>
        <Flexbox>
          <DropDown
            items={SUMMARY_ITEMS}
            selected={summaryId}
            onChange={this._onChangeSummary}            
            style={{
              width: 190,
              fontSize: 14,
              lineHeight: '21px',
            }}
          />
          <Slider
            pageCount={pageCount}
            currentPage={pageNum}
            onPageChange={this._onPageChange}
          />
        </Flexbox>
        <SummaryTable
          isLoading={false}
          data={summaryData}
        />
      </div>
    )
  }
}
