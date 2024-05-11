import { JSXElementConstructor, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { BsDot } from 'react-icons/bs';
import { useRouter } from 'next/router';
import  useCurrentUser  from '@/hooks/useCurrentUser';
import  useLoginModal  from '@/hooks/useLoginModal';

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: ReactElement<any, string | JSXElementConstructor<any>> | IconType;
    onClick?: () => void;
    auth?: boolean;
    alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon,
    onClick,
    auth,
    alert
}) => {
    const LoginModal = useLoginModal();
    const { data: currentUser } = useCurrentUser();
    const router = useRouter();
    
    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (auth && !currentUser) {
            LoginModal.onOpen();
        } else if (href) {
            router.push(href);
        }
    };

    return (
        <div onClick={handleClick} className='flex flex-row items-center'>
            <div className="
                relative
                rounded-full
                h-14
                w-14
                flex
                items-center
                justify-center
                p-4
                hover:bg-white-300
                hover:bg-opacity-10
                cursor-pointer
                lg:hidden
            ">
                {typeof icon === 'function' ? icon({ size: 28, color: 'white' }) : icon}
                {alert ? <BsDot className="text-white absolute -top-4 left-0" size={70}/> : null}
            </div>
            <div className="
                relative
                hidden
                lg:flex
                items-center
                gap-4
                p-3
                rounded-full
                hover:bg-white-300
                hover:bg-opacity-10
                cursor-pointer
            ">
                {typeof icon === 'function' ? icon({ size: 24, color: 'white' }) : icon}
                <p className="hidden lg:block text-white text-xl">
                    {label}
                </p>
                {alert ? <BsDot className="text-white absolute -top-4 left-0" size={70}/> : null}
            </div>
        </div>
    );
}

export default SidebarItem;
