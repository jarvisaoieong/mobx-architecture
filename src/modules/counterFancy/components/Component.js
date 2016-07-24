import React, {Component} from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';
import CounterWithRemoveButton from './CounterWithRemoveButton'

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
        {
          _.map(model.counters, (counter) =>
            <CounterWithRemoveButton {...{
              key: counter.id,
              model: counter,
            }} />
          )
        }
      </div>
    );
  }

}
