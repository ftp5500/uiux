import {useState, useEffect} from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import {logo} from '../../assets/index.js'
import './navbar.css'

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const navbarLinks = ['Home', 'What is GPT', 'Open AI', 'Case Studio', 'Library']
    const Menu = (index) => {
        return (
            navbarLinks.map((link)  => (

                <p><a href={`#${link}`} key={`${index + Math.random()}`}>{link}</a></p>
            ))
        )
    }// End of menu


    return (
        <div className="gpt3__navbar ">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="gpt3__navbar-links_container">
                    {
                        !toggleMenu && (
                            <Menu/>
                        )
                    }

                </div>

                <div className="gpt3__navbar-sign">
                    <p><a className="gpt3__navbar-sign_in" href="#">Sign in</a></p>
                    <p><a className="gpt3__navbar-sign_up" href="#">Sign up</a></p>
                </div>

                <div className="gpt3__navbar-menu">
                    {
                        toggleMenu ? (
                            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                        ) : (
                            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                        )
                    }
                    {
                        toggleMenu && (
                            <div className="gpt3__navbar-menu_container scale-up-center ">
                                <div className="gpt3__navbar-menu_container-links">
                                    {
                                        <Menu/>

                                    }
                                    <div className="gpt3__navbar-menue_container-link-sign">
                                        <p><a className="gpt3__navbar-sign_in" href="#">Sign in</a></p>
                                        <p><a className="gpt3__navbar-sign_up" href="#">Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>


        </div>
    )
}

export default Navbar