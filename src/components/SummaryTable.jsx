import React, {
  Component,
} from 'react';
import styled from 'styled-components';

import {
  SortIcon,
  Flag,
} from './Icons';
import DropDown from './DropDown';

const TableCell = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: ${props => props.width || 80}px;

  &:first-child {
    flex-grow: 1;
    justify-content: flex-start;
    text-align: left;
    font-size: 12px;
    font-weight: normal;
    line-height: normal;

    & > div > .name {
      color: #1E135F;
    }

    & > div > .number {
      color: rgba(30, 19, 95, 0.6);
    }
  }

  &:last-child {
    flex-direction: column;
  }

  & > span {
    margin-right: 5px;
  }

  & > img {
    margin-right: 5px;
  }
`;
const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  &:nth-child(odd) {
    background: rgba(241, 243, 248, 0.6);
  }
`;
const Bar = styled.div`
  background: #D6D6DA;
  border-radius: 100px;
  position: relative;
  width: 90%;
  height: 6px;

  & > .complete {
    width: ${props => props.percent}%;
    background: ${props => props.percent > 50 ? '#00AB9C' : '#ED3E67'};
    height: 6px;
    border-radius: 100px;
  }
`;
const None = styled.div`
  width: 19px;
  height: 4px;
  background: #D6D6DA;
`;

const Percent = props => {
  const { percent } = props;
  const color = percent >= 50 ? '#00AB9C' : '#ED3E67';

  return (
    <React.Fragment>
      {percent === 0 && <None />}
      {percent > 0 && <Bar percent={percent}>
          <div className='complete'/>
          <span style={{color, fontSize: 12}}>{percent}%</span>
        </Bar>
      }
    </React.Fragment>
  )
}

export default class SummaryTable extends Component {

  constructor (props) {
    super(props);

    this.state = {
      diff: 0,
      sortIndex: 0,
      sortOrder: 1,
      data: props.data,
    };
  }

  _onChangeDifference = (n) => {
    this.setState({ diff: n });
  };

  handleSort = (ind) => ev => {
    console.log(ind)
    this.setState({
      sortIndex: ind,
      sortOrder: this.state.sortOrder * -1,
    });
  };

  render() {
    const { data } = this.props;
    const { diff, sortIndex, sortOrder } = this.state;

    data.sort((left, right) => {
      switch (sortIndex) {
        case 0:
          return (right.has_buybox < left.has_buybox ? 1 : -1) * sortOrder;
        case 1:
          return (right.stock - left.stock) * sortOrder;
        case 2:
          return (right.buybox_winrate - left.buybox_winrate) * sortOrder;
        case 3:
          return (right.amz_rank - left.amz_rank) * sortOrder;
        case 4:
          return (right.user_rank - left.user_rank) * sortOrder;
        case 5:
          return (right.sellers - left.sellers) * sortOrder;
        case 6:
          return (right.user_price - left.user_price) * sortOrder;
        case 7:
          return (right.amz_price - left.amz_price) * sortOrder;
        case 8:
          return (right.lowest_price - left.lowest_price) * sortOrder;
        default:
          return (right.id - left.id) * sortOrder;
      }
    });

    return (
      <div className='table-container'>
        <div className='table-header'>
          <TableCell><span>Product Name</span></TableCell>
          <TableCell><span>Has BuyBox</span><span onClick={this.handleSort(0)}><SortIcon/></span></TableCell>
          <TableCell><span>Stock</span><span onClick={this.handleSort(1)}><SortIcon/></span></TableCell>
          <TableCell width={100}><span>BuyBox Winrate</span><span onClick={this.handleSort(2)}><SortIcon/></span></TableCell>
          <TableCell><span>Amz Rank</span><span onClick={this.handleSort(3)}><SortIcon/></span></TableCell>
          <TableCell><span>User Rank</span><span onClick={this.handleSort(4)}><SortIcon/></span></TableCell>
          <TableCell><span># Sellers</span><span onClick={this.handleSort(5)}><SortIcon/></span></TableCell>
          <TableCell><span>Uesr Price</span><span onClick={this.handleSort(6)}><SortIcon/></span></TableCell>
          <TableCell><span>Amz Price</span><span onClick={this.handleSort(7)}><SortIcon/></span></TableCell>
          <TableCell><span>Lowest Price</span><span onClick={this.handleSort(8)}><SortIcon/></span></TableCell>
          <TableCell>
            <span>Price Difference</span>
            <DropDown
              items={['Amz v Lowest Price', 'Amz v User Price']}
              selected={0}
              onChange={this._onChangeDifference}
              style={{
                width: 100,
                fontSize: 10,
                lineHeight: '10px',
              }}
            />
          </TableCell>
        </div>
        <div className='table-body'>
        {
          data.map((product, id) => {
            const diffPrice = diff ? (product.amz_price - product.user_price) : (product.amz_price - product.lowest_price);

            return (
              <TableRow key={id}>
                <TableCell>
                  <img src={product.image_url} alt={'img'}/>
                  <div>
                    <div className='name'>{product.name}</div>
                    {/* For now just use only one flag. */}
                    <div className='number'><Flag />&nbsp;{product.number}</div>
                  </div>
                </TableCell>
                <TableCell style={{color: product.has_buybox?'#00AB9C':'#ED3E67'}}>{product.has_buybox ? 'Yes' : 'No'}</TableCell>
                <TableCell style={{color: product.stock?'#00AB9C':'#ED3E67'}}>{product.stock}</TableCell>
                <TableCell width={100}><Percent percent={product.buybox_winrate} /></TableCell>
                <TableCell>{product.amz_rank || <None />}</TableCell>
                <TableCell>{product.user_rank || <None />}</TableCell>
                <TableCell>{product.sellers || <None />}</TableCell>
                <TableCell>${product.user_price.toFixed(2) || <None />}</TableCell>
                <TableCell>${product.amz_price.toFixed(2) || <None />}</TableCell>
                <TableCell>${product.lowest_price.toFixed(2) || <None />}</TableCell>
                <TableCell>${diffPrice.toFixed(2)}</TableCell>
              </TableRow>
          )})
        }
        </div>
      </div>
    );
  }
}