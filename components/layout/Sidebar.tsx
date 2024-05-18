import { FaRegUser } from 'react-icons/fa';
import { FiBookmark, FiLogOut } from 'react-icons/fi';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarPostButton from './SidebarPostButton';

import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import { BiBell, BiHome, BiMessageSquareDetail, BiUser } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';
import { RiMoreFill, RiNotificationLine } from 'react-icons/ri';
import { GoHomeFill } from 'react-icons/go';
import Avatar from '../Avatar';
import Home from '@/fonts/home';
import Search from '@/fonts/search';
import Notification from '@/fonts/notification';
import Messages from '@/fonts/messages';
import Saved from '@/fonts/saved';


const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    
    // Define items for mobile version (excluding "Saved")
    const mobileItems = [
        {
            label: 'Home', 
            href: '/',
            icon: Home
        },
        {
            label: 'Search', 
            href: '/search',
            icon: Search
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: Notification,
            auth: true,
            alert: currentUser?.hasNotification,
        },
        {
            label: 'Messages', 
            href: '/messages',
            icon: Messages,
            auth: true
        },
        {
            label: 'You',
            href: `/users/${currentUser?.id}`,
            icon: BiUser,
            auth: true
        },
    ];

    // Define items for desktop version (including "Saved")
    const desktopItems = [
        ...mobileItems, // Include items from mobile version
        {
            label: 'Saved', 
            href: '/saved',
            icon: Saved,
            auth: true
        }
    ];

    return (
        <>
            {/* Mobile version */}
            <div className="fixed bottom-20 right-4 z-10  md:hidden">
    <SidebarPostButton />
</div>


            <div className='fixed bottom-2 left-2 right-2 bg-neutral-900 z-10 flex justify-around py-1 px-4 md:hidden rounded-full '>
                {mobileItems.map((item) => (
                    <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        auth={item.auth}
                        alert={item.alert}
                    />
                ))}
            </div>

            {/* Desktop version */}
            <div className='col-span-1 h-full pr-4 md:pr-2 hidden md:flex md:flex-col items-end'>
                <div className='flex flex-col items-end'>
                    <div className='fixed space-y-2 lg:w-[230px]'>
                        <div className="flex flex-col bg-neutral-900 rounded-xl  mt-4 p-2 ">
                            <SidebarLogo />
                            {desktopItems.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    icon={item.icon}
                                    auth={item.auth}
                                    alert={item.alert}
                                />
                            ))}
                        </div>
                        <SidebarPostButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
