import React, {Component} from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';

@observer
export default class RandomGif extends Component {

  render() {
    const {model} = this.props;
    return (
      <div style={{width: '200px'}}>
        <span>{model.topic}</span>
        <img
          src={model.gifUrl}
          style={{
            width: '200px',
          }}
        />
        <button
          onClick={model.requestMore}
          style={{
            width: '200px',
          }}
        >
          More
        </button>
      </div>
    );
  }

}
