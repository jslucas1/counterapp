import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete = {onDelete} 
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}
                        counter={counter} 
                    />)
                )}
            </div> 
        )
    }
}
 
export default Counters;