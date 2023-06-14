import React from "react";
import {ai} from '../../assets/index.js'
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-title">
                    Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </div>
            </div>
            <img src={ai}/>
        </div>
    )
};

export default Header;
