import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Component as Counter} from 'modules/counter'

@observer
export default class CounterPair extends Component {

  render() {
    const {model} = this.props;

    return (
      <div>
        <Counter {...{
          model: model.first,
        }} />
        <Counter {...{
          model: model.second,
        }} />
      </div>
    );
  }

}
