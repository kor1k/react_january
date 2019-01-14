import React, {Component, Fragment} from 'react';
import './menu.scss'

class Menu extends Component {
    state = {
        folders: [
            {
                name: 'Входящие',
                id: 'getted'
            },
            {
                name: 'Исходящие',
                id: 'sent'
            }
        ]
    };

    render() {
        let folderList = this.state.folders.map((item) => {
            let classN = null
            if (item.id == this.props.active) {
                classN = "active"
            }
            return (<li
                key={item.id}
                onClick={() => this.props.chgFolder(item.id)}
                className={classN}>
                {item.name}
            </li>)
        });
        return (
            <Fragment>
                <ul>
                    {folderList}
                </ul>
            </Fragment>
        );
    }
}

export default Menu;