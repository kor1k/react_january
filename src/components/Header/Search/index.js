import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import App from "../../App";

class Search extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" value="" placeholder="Search...">
                </input>

                <button className="search-button">Search</button>
            </Fragment>
        );
    }
}

export default Search