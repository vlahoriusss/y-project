import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoMdAdd } from "react-icons/io"

const SidebarPostButton = () => {
    const router =useRouter();
    const LoginModal = useLoginModal();

    const onClick = useCallback(() => {
        LoginModal.onOpen();
    }, [LoginModal]);

    return (
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
                    New
                </p>
            </div>
        </div>
     ) ;
}

export default SidebarPostButton;