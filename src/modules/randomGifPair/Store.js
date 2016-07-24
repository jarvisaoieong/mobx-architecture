import {observable, action} from 'mobx';
import {Store as RandomGif} from 'modules/randomGif';

export default class RandomGifPair {

  first;
  second;

  constructor(firstTopic, secondTopic) {
    this.first = new RandomGif(firstTopic);
    this.second = new RandomGif(secondTopic);
  }

}
