import React, {Component} from 'react';
import './NewMsg.scss'

class NewMsg extends Component {
    render() {
        return (
            <div className="new-email">
                <div className="new-email-title">New Message</div>
                <div><input type="text" value="" placeholder="To..." className="newMsgButtonInputTo"/></div>
                <div><input type="text" value="" placeholder="Subject..." className="newMsgButtonInputSubject"/></div>
                <div>
                    <textarea placeholder="Your message..."></textarea>
                </div>
                <div>
                    <button onClick={this.props.addNewMsg} className="newMsgButtonSend">Send</button>
                    <button onClick={this.props.toggle} className="newMsgButtonCancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default NewMsg;