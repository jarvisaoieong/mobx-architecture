import {observable, action} from 'mobx';
import {Store as Counter} from 'modules/counter';

export default class CounterList {

  @observable counters = [];

  @action add = () => {
    this.counters.push(new Counter);
  };

  @action remove = () => {
    this.counters.pop();
  };

}
