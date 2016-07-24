import {inject} from 'mobx-react';
import {Component} from 'modules/counter';

export default inject(
  ({counter}) => ({
    model: counter,
  })
)(Component);
