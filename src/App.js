import React, {Component, Fragment} from 'react';

import Header from './components/Header'
import Menu from './components/Menu'
import MailList from "./components/MailList";

import './App.scss';

class App extends Component {
    state = {
        active: 'getted',
        mailList: {
            getted: [
                {
                    status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                    from: 'test@danit.com',
                    subject: 'Some some danit text'
                },
                {
                    status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                    from: 'test@aaasaaaaa.com',
                    subject: 'Text from test at aaaaasaaaaa.com'
                },
                {
                    status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                    from: 'friend@hjkl;jklhjkl.com',
                    subject: 'Text from friend'
                }
            ],
            sent: [{
                status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                from: 'PETYA POROSHENKO',
                subject: 'privet'
            },
                {
                    status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                    from: 'MOM',
                    subject: 'Text from test at aaaaasaaaaa.com'
                },
                {
                    status: true,    // PROVERKA NA "PROCHITANO" ILI NET"
                    from: 'DAD',
                    subject: 'Text from friend'
                }],
        }
    };

    render() {
        let activeCategory = this.state.active;
        return (
            <Fragment>
                <Header/>
                <div className="main-region">
                    <Menu active={activeCategory} />
                    <MailList mails={this.state.mailList[this.state.active]}/>
                </div>
            </Fragment>
        );
    }
}

export default App;
