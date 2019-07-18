import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import './style/header.scss'

const Header = ({ siteTitle }) => (
    <header>
        <div className="navbar-menu">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand className="logo-name">
                    <Link to="/">{siteTitle}</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-items">
                    <Nav className="mr-auto">
                        <Nav>
                            <Link to="/resources/page/1">Resources</Link>
                        </Nav>
                        <Nav>
                            <Link to="/news-feed/page/1">News Feeds</Link>
                        </Nav>
                        <Nav>
                            <Link to="/awesome">Awesome Cassandra</Link>
                        </Nav>

                    </Nav>
                    <Nav>
                        <Nav>
                            <a href ="https://github.com/Anant/awesome-cassandra">Contribute</a>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
