import { BsHouse, BsBell } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarPostButton from './SidebarPostButton';

import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    const items = [
        {
            label: 'Home', 
            href: '/',
            icon: BsHouse
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBell,
            auth: true
        },
        {
            label: 'You',
            href: `/users/${currentUser?.id}`,
            icon: FaRegUser,
            auth: true
        },
    ];

    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        auth={item.auth}
                        />
                    ))}
                    {currentUser && (
                     <SidebarItem onClick={() => signOut()} icon={FiLogOut} label="Logout" />
                    )}
                    <SidebarPostButton />
                </div>

            </div>
        </div>
    );
}

export default Sidebar;