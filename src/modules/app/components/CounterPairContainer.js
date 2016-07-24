import {inject} from 'mobx-react';
import {Component} from 'modules/counterPair';

export default inject(
  ({counterPair}) => ({
    model: counterPair,
  })
)(Component);
