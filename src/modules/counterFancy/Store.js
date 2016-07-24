import {observable, action} from 'mobx';
import {Store as Counter} from 'modules/counter';
import _ from 'lodash';

class CounterWithRemove {

  id;
  data;
  listStore;

  constructor({id, listStore}) {
    this.id = id;
    this.data = new Counter;
    this.listStore = listStore;
  }

  @action remove = () => {
    this.listStore.remove(this.id);
  };

}

export default class CounterList {

  @observable counters = [];
  nextId = 0;

  @action add = () => {
    this.counters.push(new CounterWithRemove({
      id: this.nextId,
      listStore: this,
    }));
    this.nextId++;
  };

  @action remove = (id) => {
    this.counters = _.reject(this.counters, {id});
  };

}
