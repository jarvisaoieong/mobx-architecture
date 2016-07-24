import React, {Component} from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';
import {Component as Counter} from 'modules/counter'

@observer
export default class CounterList extends Component {

  render() {
    const {model} = this.props;

    return (
      <div>
        <button
          style={{width: '100px'}}
          onClick={model.add}
        >
          ADD
        </button>
        <button
          style={{width: '100px'}}
          onClick={model.remove}
        >
          REMOVE
        </button>
        {
          _.map(model.counters, (counter, i) =>
            <Counter {...{
              key: i,
              model: counter,
            }} />
          )
        }
      </div>
    );
  }

}
