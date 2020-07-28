import React from 'react';
import logo from '../../assets/img/logo.png';
import "./Menu.css";
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
        <a href="/">
            <img className="Logo" src={logo} alt="TechFlix logo"/>
        </a>
        <Button as="a" href="#">
            Novo Vídeo
        </Button>
    </nav>
    );
}

export default Menu;