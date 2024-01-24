import React, {Component} from 'react';

class App extends Component<any, any> {

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit');
    };

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Copied!');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text"
                           name="text"
                           onFocus={this.handleFocus}
                           onCopy={this.handleCopy}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export {App};