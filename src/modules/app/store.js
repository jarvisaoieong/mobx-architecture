import {Store as Counter} from 'modules/counter';
import {Store as CounterPair} from 'modules/counterPair';
import {Store as CounterList} from 'modules/counterList';
import {Store as CounterFancy} from 'modules/counterFancy';
import {Store as RandomGif} from 'modules/randomGif';
import {Store as RandomGifPair} from 'modules/randomGifPair';
import {Store as RandomGifList} from 'modules/randomGifList';

export default {
  counter: new Counter,
  counterPair: new CounterPair,
  counterList: new CounterList,
  counterFancy: new CounterFancy,
  randomGif: new RandomGif('funny cat'),
  randomGifPair: new RandomGifPair('funny cat', 'funny dog'),
  randomGifList: new RandomGifList(['hello', 'world']),
};
