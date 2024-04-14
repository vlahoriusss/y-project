import { FaRegUser } from 'react-icons/fa';
import { FiBookmark, FiLogOut } from 'react-icons/fi';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarPostButton from './SidebarPostButton';

import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import { BiBell, BiHome, BiMessageSquareDetail, BiUser } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';
import { RiNotificationLine } from 'react-icons/ri';
import { GoHomeFill } from 'react-icons/go';


const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    const items = [
        {
            label: 'Home', 
            href: '/',
            icon: GoHomeFill
        },
        {
            label: 'Search', 
            href: '/search',
            icon: IoSearch
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: RiNotificationLine,
            auth: true,
            alert: currentUser?.hasNotification,
        },
        {
            label: 'Saved', 
            href: '/saved',
            icon: FiBookmark,
            auth: true
        },
        {
            label: 'Messages', 
            href: '/messages',
            icon: BiMessageSquareDetail,
            auth: true
        },
        {
            label: 'You',
            href: `/users/${currentUser?.id}`,
            icon: BiUser,
            auth: true
        },
    ];

    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end '>
                <div className='fixed space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    <div className="bg-neutral-900 rounded-xl p-2 border border-neutral-800 ">
                    {items.map((item) => (
                        <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        auth={item.auth}
                        alert={item.alert}
                        />
                    ))}
                    {currentUser && (
                     <SidebarItem onClick={() => signOut()} icon={FiLogOut} label="Logout" />
                    )}
                    <SidebarPostButton />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;