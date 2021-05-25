import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import image from'./image.jpg';
import './SidebarData.css';



export const SidebarData=[

   
    {
        title:'Profile',
        path:'/',
        icons:<BsIcons.BsFillPersonFill/>,
        cName:'nav-text'
    },
    {title:<p className="Main">MAIN</p>,
    },
    {
        title:'Team',
        path:'/Teams',
        icons:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title:'Calendar',
        path:'/Calendar',
        icons:<AiIcons.AiFillCalendar/>,
        cName:'nav-text'
    },
  
    {
        title:'Message',
        path:'/Message',
        icons:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title:'Setting',
        path:'./Setting',
        icons:<AiIcons.AiFillSetting/>,
        cName:'nav-text'
    },
    {title:<p className="Main">LEAVE</p>,
},
    {
        title:'LogOut',
        path:'/message',
        icons:<IoIcons.IoIosPower/>,
        cName:'nav-text'
    }
   

]

