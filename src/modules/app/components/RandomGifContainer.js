import {inject} from 'mobx-react';
import {Component} from 'modules/randomGif';

export default inject(
  ({randomGif}) => ({
    model: randomGif,
  })
)(Component);
