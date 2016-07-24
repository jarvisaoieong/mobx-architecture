import React, {Component} from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';
import {Component as RandomGif} from 'modules/randomGif'

@observer
export default class RandomGifList extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const {model} = this.props;
    model.add(this.refs.text.value);
    this.refs.text.value = '';
  };

  render() {
    const {model} = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text" />
          <button>Enter</button>
        </form>
        {
          _.map(model.gifList, (gif) =>
            <div key={gif.id} style={{float: 'left'}}>
              <RandomGif {...{
                model: gif.data,
              }} />
            </div>
          )
        }
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }

}
