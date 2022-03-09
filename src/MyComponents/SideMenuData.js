import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideMenuData = [

    // {
    //     title:'Home',
    //     path:'/',
    //     icon:<AiIcons.AiFillHome/>,
    //     cName:'nav-text'
    // },
    {
        title:'Client',
        path:'/client/addclient',
        icon:<IoIcons.IoIosContact/>,
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Add Client',
              path: '/client/addclient',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Show Clients',
              path: '/client/showclient',
              icon: <IoIcons.IoIosPaper />
            },
            
              
            
          ]

    },
    // {
    //   title: 'Financial year',
    //   path: '/fin-year',
    //   icon: <IoIcons.IoIosPaper />
    // },
    {
        title:'WorkList',
        path:'/client/addclient',
        icon:<IoIcons.IoIosFiling/>,
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
           
            {
                title: 'Add WorkList',
                path: '/worklist/addworklist',
                icon: <IoIcons.IoIosPaper />
              },
              {
                title: 'Show WorkList',
                path: '/worklist/showlist',
                icon: <IoIcons.IoIosPaper />

              },
           
          ]

    },
    // {
    //     title: 'ClientWorkDefine',
    //     path: '/clientdefine',
    //     icon: <AiIcons.AiOutlineSolution/>,
    //     cName: 'nav-text'
    //   },
    {
        title:'Transaction',
        path:'/client/addclient',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Daily WorkLog Entry',
              path: '/transaction/addworklog',
              icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Update WorkLog',
                path: '/transaction/showworklog',
                icon: <IoIcons.IoIosPaper />
              },
              // {
              //   title: 'Receipt',
              //   path: '/transaction/receipt',
              //   icon: <IoIcons.IoIosPaper />
              // },
              
          ]

    },
    // {
    //   title: 'MisReport',
    //   path: '/transaction/report',
    //   icon: <IoIcons.IoIosPaper />,
    //   cName:'nav-text'
    // },
    // {
    //     title: 'LOGOUT',
    //     path: '/logout',
    //     icon: <AiIcons.AiOutlineLock/>,
    //     cName: 'nav-text'
    //   },
];
