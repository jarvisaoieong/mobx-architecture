import {observable, action} from 'mobx';
import {Store as RandomGif} from 'modules/randomGif';
import _ from 'lodash';

export default class RandomGifList {

  @observable gifList = [];
  nextId = 0;

  constructor(topics = []) {
    _.each(topics, this.add);
  }

  @action add = (topic) => {
    this.gifList.push({
      id: this.nextId,
      data: new RandomGif(topic),
    });
    this.nextId++;
  };

}
