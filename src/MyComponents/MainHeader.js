import React from 'react'
import '../mainheader.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Toolbar from '@material-ui/core/Toolbar';

export const MainHeader = () => {
    return (
        <div>
            

            <div id="navbar" className="wrapper">
                <ul className="mainMenu">
                    <li className="item" id="account">
                        <a href="#account" className="btn"><i className="fas fa-user-circle"></i>My Account</a>
                        <div className="subMenu">
                            
                            <a href="">item-1</a>
                            <a href="">item-2</a>
                            <a href="">item-3</a>
                        </div>
                    </li>
                    <li className="item" id="about">
                        <a href="#about" className="btn"><i className="fas fa-address-card"></i>About</a>
                        <div className="subMenu">
                            <a href="">item-1</a>
                            <a href="">item-2</a>
                          
                        </div>
                    </li>
                    <li className="item" id="support">
                        <a href="#support" className="btn"><i className="fas fa-info"></i>Support</a>
                        <div className="subMenu">
                            <a href="">item-1</a>
                            <a href="">item-2</a>
                            <a href="">item-3</a>
                        </div>
                    </li>
                    <li className="item">
                        <a href="#" className="btn"><i className="fas fa-sign-out-alt">LOG OUT</i></a>
                    </li>
                </ul>

            </div>
            
        </div>
        //end of div
    )
}

