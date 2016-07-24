import {observable, action} from 'mobx';

export default class Counter {

  @observable count = 0;

  @action add = () => {
    this.count++;
  };

  @action subtract = () => {
    this.count--;
  };

}
