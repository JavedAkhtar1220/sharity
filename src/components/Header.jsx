import React from 'react';
import logo from '../images/logo.png';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Header = (props) => {

    console.log(props.mode);

    const toggleColorMode = () => {

        if (props.mode === "dark") {
            props.setMode("light");
        } else {
            props.setMode("dark");
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logo} alt="logo" width="200" height="80" class="d-inline-block align-text-top" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href='#htb'>Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mission">Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ecosystem">Ecosystem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sharity">Sharity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">whitepaper</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadmap">roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#transparency">transparency</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#community">community</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Newsroom
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Blaze Fire Games</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Willie D</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Certik</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">contact</a>
                        </li>
                        <li className="nav-item">
                            <IconButton sx={{ ml: 1 }} className="text-white mode-icon" onClick={toggleColorMode} color="inherit">
                                {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
