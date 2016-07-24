import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Counter extends Component {

  render() {
    const {model} = this.props;
    return (
      <div>
        <button
          style={{width: '50px'}}
          onClick={model.add}
        >
          +
        </button>
        <span
          style={{paddingLeft: '50px', paddingRight: '50px'}}
        >
          {model.count}
        </span>
        <button
          style={{width: '50px'}}
          onClick={model.subtract}
        >
          -
        </button>
      </div>
    );
  }

}
