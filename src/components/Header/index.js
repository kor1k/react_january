import React, {Component, Fragment} from 'react';
import Search from './Search'
import UserControl from './UserControl'
import './header.scss'

// import App from "../../App";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="main-header">
                    <img src="https://img.icons8.com/color/50/000000/gmail.png" alt="logo"/>
                </div>
                <div className="search-block">

                    <Search/>
                </div>
                <div className="control">
                    <UserControl/>
                </div>
            </header>
        )
    }
}

export default Header