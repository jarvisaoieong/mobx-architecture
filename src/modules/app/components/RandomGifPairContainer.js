import {inject} from 'mobx-react';
import {Component} from 'modules/randomGifPair';

export default inject(
  ({randomGifPair}) => ({
    model: randomGifPair,
  })
)(Component);
