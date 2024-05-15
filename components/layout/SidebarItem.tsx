import React, { JSXElementConstructor, ReactElement, SVGProps, FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { BsDot } from 'react-icons/bs';
import { useRouter } from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { motion } from 'framer-motion'; 

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: ReactElement<any, string | JSXElementConstructor<any>> | IconType | FunctionComponent<any>;
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
        <motion.div 
            onClick={handleClick}
            className='flex flex-row items-center'
            whileHover={{ x: 5 }} // Move 5 pixels to the right on hover
        >
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
                {React.isValidElement(icon) ? (
                    React.cloneElement(icon as ReactElement<any, string | JSXElementConstructor<any>>, {
                        size: 28,
                        color: 'white',
                        className: "icon-svg" // Adding a className for styling
                    })
                ) : (
                    typeof icon === 'function' ? icon({ size: 28, color: 'white' }) : icon
                )}
                {alert ? <BsDot className="text-white absolute -top-4 left-0" size={70} /> : null}
            </div>
            <div className="
                relative
                hidden
                lg:flex
                items-center
                gap-4
                p-3
                rounded-xl
                transition
                hover:bg-white
                hover:bg-opacity-10
                cursor-pointer
            ">
                {React.isValidElement(icon) ? (
                    React.cloneElement(icon as ReactElement<any, string | JSXElementConstructor<any>>, {
                        size: 24,
                        color: 'red', // Correcting color to red
                        className: "icon-svg" // Adding a className for styling
                    })
                ) : (
                    typeof icon === 'function' ? icon({ size: 24, color: 'white' }) : icon
                )}
                <p className="hidden lg:block text-white text-xl">
                    {label}
                </p>
                {alert ? <BsDot className="text-white absolute -top-4 left-0" size={70} /> : null}
            </div>
        </motion.div> // Close motion.div
    );
}

export default SidebarItem;
