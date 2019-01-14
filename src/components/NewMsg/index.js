import React, {Component} from 'react';
import './NewMsg.scss'

class NewMsg extends Component {
    render() {
        return (
            <div className="new-email">
                <div><input type="text" value="" placeholder="To..."/></div>
                <div><input type="text" value="" placeholder="Subject..."/></div>
                <div>
                    <textarea placeholder="Your message..."></textarea>
                </div>
                <div>
                    <button onClick={this.props.addNewMsg}>Send</button>
                    <button onClick={this.props.toggle}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default NewMsg;