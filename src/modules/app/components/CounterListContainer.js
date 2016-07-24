import {inject} from 'mobx-react';
import {Component} from 'modules/counterList';

export default inject(
  ({counterList}) => ({
    model: counterList,
  })
)(Component);
