import React, {Component} from 'react';


import '../css/nav.css';

import {Button} from './button';


const MenuItems = [
    {
        title: "Home",
        url: "#",
        cName: "nav-links"
    },
    {
        title: "Services",
        url: "#",
        cName: "nav-links"
    },
    {
        title: "Portfolio",
        url: "#",
        cName: "nav-links"
    },
    {
        title: "Contact",
        url: "#",
        cName: "nav-links"
    },
    {
        title: "Sign-Up",
        url: "#",
        cName: "nav-links-mobile"
    }
]
class Navbar extends Component{

    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="Navbar-Items">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar