import React from "react";
import { Navbar, Row } from 'react-materialize';
// eslint-disable-next-line no-lone-blocks
{/* import { NavLink } from 'react-router-dom'; */}

const Header = () => (
    <Row>
        <Navbar className="grey darken-1">
            {/* <li><NavLink to="/">Home</NavLink></li> */}
        </Navbar>
    </Row>

);

export default Header;