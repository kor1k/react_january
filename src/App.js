import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    state = {
        showGreetings: false,
    };

    showMsg = () => {
        this.setState({
            showGreetings: !this.state.showGreetings,
        })
    };

    render() {
        let greetings = null;
        let btnValue = 'Open';
        if (this.state.showGreetings) {
            greetings = <p>Hello world dude!</p>;
            btnValue = 'Close'
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    {greetings}
                    <button onClick={this.showMsg}>{btnValue}</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
