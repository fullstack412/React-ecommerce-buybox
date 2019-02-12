import React, {
  Component,
} from 'react';

export default class DropDown extends Component {

  constructor (props) {
    super(props);

    this.state = {
      selected: props.selected,
      show: false,
    };    
  }

  _toggleDropdownList = (ev) => {
    this.setState({ show: !this.state.show });
  };

  _onSelectItem = (id) => ev => {
    this.setState({
      selected: id,
      show: false,
    }, () => this.props.onChange(id));
  };

  render() {
    const {
      items,
      style,
    } = this.props;
    const { show, selected } = this.state;
    const { width, fontSize, lineHeight } = style;

    return(
      <div className='dropdown' style={{width, fontSize}}>
        <div className='selected-box' onClick={this._toggleDropdownList}>
          <span style={{lineHeight}}>{items[selected]}</span>
          <span style={{lineHeight}}>&#x25BC;</span>
        </div>
        {show && <div className='dropdown-list'>
            {
              items.map((item, id) => (
                <div key={id} className={selected === id ? 'selected' : ''} onClick={this._onSelectItem(id)}>{item}</div>
              ))
            }
          </div>
        }
      </div>
    )
  }
}