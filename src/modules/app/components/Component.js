import React from 'react';
import CounterContainer from './counterContainer';
import CounterPairContainer from './counterPairContainer';
import CounterListContainer from './counterListContainer';
import CounterFancyContainer from './counterFancyContainer';
import RandomGifContainer from './RandomGifContainer';
import RandomGifPairContainer from './RandomGifPairContainer';
import RandomGifListContainer from './RandomGifListContainer';

export default () =>
  <div>
    <h2>1. Counter</h2>
    <CounterContainer />
    <h2>2. CounterPair</h2>
    <CounterPairContainer />
    <h2>3. CounterList</h2>
    <CounterListContainer />
    <h2>4. CounterFancy</h2>
    <CounterFancyContainer />
    <h2>5. RandomGif</h2>
    <RandomGifContainer />
    <h2>6. RandomGifPair</h2>
    <RandomGifPairContainer />
    <h2>7. RandomGifList</h2>
    <RandomGifListContainer />
  </div>
