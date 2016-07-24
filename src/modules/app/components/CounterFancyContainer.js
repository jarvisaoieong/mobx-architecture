import {inject} from 'mobx-react';
import {Component} from 'modules/counterFancy';

export default inject(
  ({counterFancy}) => ({
    model: counterFancy,
  })
)(Component);
