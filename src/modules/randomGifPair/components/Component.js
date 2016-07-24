import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Component as RandomGif} from 'modules/randomGif'

@observer
export default class RandomGifPair extends Component {

  render() {
    const {model} = this.props;

    return (
      <div>
        <div style={{float: 'left'}}>
          <RandomGif {...{
            model: model.first,
          }} />
        </div>
        <div style={{float: 'left'}}>
          <RandomGif {...{
            model: model.second,
          }} />
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }

}
