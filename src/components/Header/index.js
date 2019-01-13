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
                    <a href="#">
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png"
                             alt="logo"/>
                    </a>
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