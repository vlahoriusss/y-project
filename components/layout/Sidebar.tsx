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
    
    // Define items for mobile version (excluding "Saved")
    const mobileItems = [
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

    // Define items for desktop version (including "Saved")
    const desktopItems = [
        ...mobileItems, // Include items from mobile version
        {
            label: 'Saved', 
            href: '/saved',
            icon: FiBookmark,
            auth: true
        }
    ];

    return (
        <>
            {/* Mobile version */}
            <div className='fixed bottom-0 left-0 right-0 bg-neutral-900 z-10 flex justify-around py-2 px-4 md:hidden'>
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
            <div className='col-span-1 h-full pr-4 md:pr-6 hidden md:flex md:flex-col items-end'>
                <div className='flex flex-col items-end '>
                    <div className='fixed space-y-2 lg:w-[230px]'>
                        <SidebarLogo />
                        <div className="bg-neutral-900 rounded-xl p-2 border border-neutral-800 ">
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
                            {/* Render logout icon only on desktop */}
                            {currentUser && (
                                <SidebarItem onClick={() => signOut()} icon={FiLogOut} label="Logout" />
                            )}
                            <SidebarPostButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
