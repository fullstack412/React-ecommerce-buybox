import React, {
  Component,
} from 'react';
import styled from 'styled-components';

const PrevIcon = () => (
  <svg width="8" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.17515 5.07252L5.01523 0.177077C5.24866 -0.0590258 5.62711 -0.0590258 5.86052 0.177077L6.42503 0.748052C6.65806 0.983752 6.65851 1.36575 6.42603 1.60201L2.59018 5.50001L6.42603 9.39799C6.65851 9.63425 6.65806 10.0162 6.42503 10.2519L5.86052 10.8229C5.62708 11.059 5.24863 11.059 5.01523 10.8229L0.175175 5.92748C-0.0582566 5.6914 -0.0582571 5.30862 0.17515 5.07252Z" fill="#1E135F"/>
  </svg>
);
const NextIcon = () => (
  <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.02505 5.92748L2.18497 10.8229C1.95154 11.059 1.57309 11.059 1.33968 10.8229L0.775165 10.2519C0.542132 10.0162 0.541684 9.63425 0.774169 9.39799L4.61001 5.49999L0.774169 1.60201C0.541684 1.36575 0.542132 0.983752 0.775165 0.748052L1.33968 0.177077C1.57311 -0.0590258 1.95156 -0.0590258 2.18497 0.177077L7.02502 5.07252C7.25845 5.3086 7.25845 5.69138 7.02505 5.92748Z" fill="#1E135F"/>
  </svg>
);
const DotIcon = () => (
  <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.600098 3C0.600098 1.34315 1.94324 5.87108e-08 3.6001 1.31134e-07C5.25695 2.03558e-07 6.6001 1.34315 6.6001 3C6.6001 4.65685 5.25695 6 3.6001 6C1.94324 6 0.600097 4.65685 0.600098 3Z" fill="#E6E8ED"/>
  </svg>
);
const SVGButton = styled.div`
  display: flex;
  align-items: center;
  margin: 2px;
  cursor: pointer;

  &.prev {
    margin-right: 15px;
  }

  &.next {
    margin-left: 15px;
  }
  
  & > svg > path {
    fill: #E6E8ED;
  }

  &.active > svg > path {
    fill: #1E135F;
  }
`;

export default class Slider extends Component {

  constructor (props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      pages: [...Array(props.pageCount).keys()],
    };
  }

  _onSelectPage = (n) => ev => {
    this.setState({
      currentPage: n,
    }, () => this.props.onPageChange(n));
  };

  _onNextPrev = (b) => ev => {
    const { currentPage } = this.state;
    const { pageCount } = this.props;

    if ((currentPage === 0 && b === -1) || (currentPage === pageCount -1 && b === 1)) {
      return;
    }

    this.setState({
      currentPage: currentPage + b * 1,
    }, () => this.props.onPageChange(currentPage + b * 1));
  }

  render() {
    const { pageCount } = this.props;
    const { currentPage, pages } = this.state;
    const isFirst = currentPage === 0, isLast = currentPage === pageCount - 1;

    
    return (
      <div className='slider-container'>
        <SVGButton className={isFirst ? 'prev ' : 'prev active'} onClick={this._onNextPrev(-1)}><PrevIcon /></SVGButton>
        {pages.map(p => 
          <SVGButton
            key={p}
            className={p === currentPage ? 'active' : ''}
            onClick={this._onSelectPage(p)}
          >
            <DotIcon />
          </SVGButton>
        )}
        <SVGButton className={isLast ? 'next ' : 'next active'} onClick={this._onNextPrev(1)}><NextIcon /></SVGButton>
      </div>
    );
  }
}