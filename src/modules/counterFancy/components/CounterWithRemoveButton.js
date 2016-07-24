import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Component as Counter} from 'modules/counter'

@observer
export default class CounterWithRemoveButton extends Component {

  render() {
    const {model} = this.props;

    return (
      <div>
        <div style={{float: 'left'}}>
          <Counter {...{
            model: model.data,
          }} />
        </div>
        <div style={{float: 'left'}}>
          <button
            style={{width: '150px'}}
            onClick={model.remove}
          >
            REMOVE
          </button>
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }

}
