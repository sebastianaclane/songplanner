import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
    <header className="container-fluid">        
            <ul class="nav">
                <li class="nav-item">
                    {/* Add a music symbol icon before the title */}
                    <h1 className="title"><a class="nav-link active" href="#">{props.title}</a></h1>
                </li>
            </ul>            
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;