import {observable, action} from 'mobx';
import request from 'superagent';
import _ from 'lodash';
import defaultGifUrl from './components/waiting.gif';

export default class RandomGif {

  @observable topic;
  @observable gifUrl = defaultGifUrl;

  constructor(topic) {
    this.topic = topic;
    this.requestMore();
  }

  @action requestMore = () => {
    this.gifUrl = defaultGifUrl;
    request.get('https://api.giphy.com/v1/gifs/random')
      .query({
        api_key: 'dc6zaTOxFJmzC',
        tag: this.topic,
      })
      .then((res) => {
        this.gifUrl  = _.get(res, 'body.data.image_url');
      });
  };

}
