import React, { Component } from 'react';
import './MailList.scss'

class MailList extends Component {

    state = {
        openedMsg: []
    };

    togleMsg = () => {
        let tample = this.state.openedMsg;
        this.setState({

        })
    };
    render() {
        let mailList = this.props.mails.map((item) => {
            return (<li key={item.id}>{item.from} - {item.subject}</li>)
        });
        return (
            <div className="mail-list">
                <ul>
                    {mailList}
                </ul>
            </div>
        );
    }
}

export default MailList;