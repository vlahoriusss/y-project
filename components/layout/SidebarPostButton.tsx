import { useState, useEffect } from 'react';
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoMdAdd } from "react-icons/io";
import usePostModal from "@/hooks/usePostModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarPostButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const { data: currentUser } = useCurrentUser();
    const PostModal = usePostModal();
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 100) { 
            setIsVisible(true);
        } else {
            setIsVisible(false);
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
            return loginModal.onOpen();
        }
        PostModal.onOpen();
    }, [loginModal, router, currentUser, PostModal]);


    return (
        <>
            {isVisible && (
                <div onClick={onClick}>
                    <div
                        className="
                        mt-6
                        lg:hidden
                        rounded-full
                        h-14
                        w-14
                        p-4
                        flex
                        items-center
                        justify-center
                        bg-white
                        hover:bg-opacity-80
                        transition
                        cursor-pointer
                        "
                    >
                        <IoMdAdd size={24} color="black" />
                    </div>
                    <div
                        className="
                        mt-6
                        hidden
                        lg:block
                        px-4
                        py-2
                        rounded-full
                        bg-white
                        hover:bg-opacity-90
                        cursor-pointer
                        transition
                        "
                    >
                        <p className="
                        hidden
                        lg:block
                        text-center
                        font-semibold
                        text-black
                        text-[18px]
                        ">
                            Yap
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SidebarPostButton;
