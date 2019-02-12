import React, {
  Component,
} from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import styled from 'styled-components';

import {
  Menu,
} from '../../components';
import {
  StatusIcon,
} from '../../components/Icons';

const CustomInputGroup = styled(InputGroup)`
  padding: 12px 20px 12px 20px;
  margin-left: -20px;

  & > div > span {
    background: white;
    color: #4B42C6;
  }

  & > input {
    background: white;
    border-left: none;
    padding-left: 0px;
    font-size: 12px;
    color: rgba(30, 19, 95, 0.5);

    &:focus {
      border: none;
      box-shadow: none;
    }
  }
`;

const MenuItem = styled(Button)`
  width: 100%;
  height: 34px;
  font-family: Open Sans;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #4B42C6;
  background: #FFFFFF;
  border: 0.5px solid #4B42C6;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    display: none;
  }

  &:focus {
    box-shadow: none;
  }

  &:hover {
    & > span {
      display: block;
    }
  }

  &.add {
    text-align: center;
    border-color: #BFBBF2;
    font-size: 10px;
    color: #1E135F;
    justify-content: center;

    &.on {
      color: #FFFFFF;
      background: #4B42C6;

      & > svg > path {
        fill: white;
      }
    }
  }
`;

const MENU_ITEMS = [{
  label: 'All Products',
  isActive: false,
}, {
  label: 'Dog Products',
  isActive: true,
}, {
  label: 'Cat Products',
  isActive: false,
}, {
  label: 'Bird Products',
  isActive: false,
}, {
  label: 'Rodent Products',
  isActive: false,
}, {
  label: 'Reptile Products',
  isActive: false,
}];

export default class MenuContainer extends Component {
  state = {
    query: '',
  };

  handleQueryChange = (ev) => {
    this.setState({
      query: ev.target.value.toLowerCase(),
    });
  };

  render() {
    const { query } = this.state;

    return (
      <Menu>
        <CustomInputGroup>
          <InputGroupAddon addonType="prepend">
            <span className='input-group-text'><i className='fas fa-search' /></span>
          </InputGroupAddon>
          <Input placeholder="Search" onChange={this.handleQueryChange} />
        </CustomInputGroup>
        {MENU_ITEMS.filter(item => item.label.toLowerCase().includes(query)).map((sm, id) => 
          <MenuItem key={id}>
            {sm.label}
            <StatusIcon checked={sm.isActive} />
          </MenuItem>
        )}
      </Menu>
    );
  }
}