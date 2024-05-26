import { useState, useEffect, useCallback } from 'react';
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { IoMdAdd } from "react-icons/io";
import usePostModal from "@/hooks/usePostModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { motion } from "framer-motion"; // Import motion

const SidebarPostButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const { data: currentUser } = useCurrentUser();
    const PostModal = usePostModal();
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const onClick = useCallback(() => {
        if (!currentUser) {
            loginModal.onOpen();
        } else {
            PostModal.onOpen();
        }
    }, [loginModal, PostModal, currentUser]);

    return (
        <>
         <motion.div
           whileHover={{ y:5 }} >
            <div
                className={`
                    mt-2
                    lg:hidden
                    rounded-full
                    h-13
                    w-14
                    p-2
                    flex
                    items-center
                    justify-center
                    bg-white
                    text-black
                    hover:bg-opacity-80
                    transition-colors duration-300
                    cursor-pointer
                `}
                onClick={onClick}
            >
                <IoMdAdd size={24} color="black" />
            </div>
            <div
                className={`
                    mt-2
                    hidden
                    lg:block
                    px-4
                    py-3
                    rounded-full
                    ${scrolled ? 'bg-white text-black' : 'bg-neutral-900 text-white'}
                    hover:bg-opacity-60
                    transition-colors duration-300
                    cursor-pointer
                `}
                onClick={onClick}
            >
                <p className="
                    hidden
                    lg:block
                    text-center
                    text-[18px]
                ">
                    New Yap
                </p>
            </div>
            </motion.div>
        </>
    );
};

export default SidebarPostButton;
