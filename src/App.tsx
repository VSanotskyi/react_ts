import React, {Component} from 'react';

type CounterState = {
    counter: number
}

type Props = {
    title?: string
}

class App extends Component<Props, CounterState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleClick = () => {
        this.setState(prev => {
            return {
                ...prev,
                counter: prev.counter + 1,
            };
        });
    };

    render() {
        const {state: {counter}} = this;

        return (
            <div>
                <h1>{counter}</h1>
                <button
                    onClick={this.handleClick}
                >{counter > 0 ? counter : null} + 1
                </button>
            </div>
        );
    }
}

export {App};