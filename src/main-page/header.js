import React from 'react';
import logo from './betilogo.png';

const Header = (props) => (
    <header classNamen="row">
        <div classNamen="col-md-5">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;