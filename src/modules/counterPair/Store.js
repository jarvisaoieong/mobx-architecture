import {observable, action} from 'mobx';
import {Store as Counter} from 'modules/counter';

export default class CounterPair {

  first = new Counter;
  second = new Counter;

}
