import React, {useState,useEffect}from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from'./SidebarData';
import   './Navbar.css';
import DarkMode from './DarkMode';

import image from'./image.jpg'

 function Navbar() {
     const[sidebar,setSidebar]=useState(false);

     const showSidebar=()=>setSidebar(!sidebar);
    
const [showLinks,setShowLinks]=useState(false);
    

    return (
        <>
       
           <div className="navbar">
              <div className="left">
              <span className="search">
              <input type="text" placeholder="search..."/>
               </span>
              </div>
            <div className="right" id={showLinks? 'hidden':''}>
            
                <span className="notif">
                <AiIcons.AiFillBell/>
                </span>
                
                    <img className="image" src={image} alt="image"/>
                <DarkMode/>
               
            </div>
          
           </div>
           
           <nav className= 'nav-menu active '>
             
               <ul className="nav-menu-items" onClick={showSidebar}>
                 <div className="logo">
             
                   ma<p>T </p> es  
                
                 </div>
                   
                   {SidebarData.map((item,index)=>{
                       return(
                           <li key={index} className={item.cName}>
                               
                               <Link to={item.path}>
                                   {item.icons}
                                   <span>{item.title}
                                   </span>
                                   
                               </Link>
                              
                           </li>
                           
                       )
                   })}
                


               </ul>
           </nav>
          
        </>
    )
}
export default Navbar;