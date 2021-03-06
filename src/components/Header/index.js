import React from "react";
import '../style.css'
// import './slide'
import Slide from '../Slide';
import Navbar from '../Navbar';

function Header() {
    return (
        <div>
            <div className="hero is-dark is-fullheight">
                <div className="hero-body" id="hero_picture">
                    <div className="container has-text-centered">
                        <br />
                        <a className="title" href="https://www.linkedin.com/in/cory-marshman-6aba24152/" target="__blank">
                            <img id="head_shot" src="assets/images/head_shot.png" alt="head_shot"/>
                        </a>
                        <h1 className="title">
                            Cory Marshman
                        </h1>
                        <Slide/>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header