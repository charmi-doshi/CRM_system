import React from 'react';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideMenuData } from './SideMenuData';
import { Link } from 'react-router-dom';
import './sidemenu.css'
import { MainHeader } from './MainHeader';

export const SideMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);

    return (
        <div>
            <div  className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
                    
                 </ul>
            </nav>
            
        </div>
    )
}
