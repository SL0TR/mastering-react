import React, { Component } from 'react';

class Counter extends Component {
  render() {

    const {  onIncrement, onDecrement, onDelete, counter } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
          </div>
          <div className="col-3">
            <button onClick={ () => onIncrement(counter) } className="btn btn-secondary mr-3"><strong>+</strong></button>
            <button onClick={ () => onDecrement(counter) } className="btn btn-secondary mr-3" disabled={counter.value === 0 ? 'disabled' : ''}><strong>-</strong></button>
            <button onClick={ () => onDelete(counter.id) } className="btn btn-danger mt-2 mb-2"><strong>X</strong></button>
          </div>
        </div>
      </div>
    )
  }


  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}
 
export default Counter;