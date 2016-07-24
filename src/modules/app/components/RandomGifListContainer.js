import {inject} from 'mobx-react';
import {Component} from 'modules/randomGifList';

export default inject(
  ({randomGifList}) => ({
    model: randomGifList,
  })
)(Component);
