import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Amigos',
                path: '/perfil/amigos',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Fotos',
                path: '/perfil/fotos',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Pagina Principal',
        path: '/principal',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    }

]