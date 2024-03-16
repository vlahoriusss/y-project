import { useRouter } from "next/router";
import { RiTestTubeLine } from "react-icons/ri";const SidebarLogo = () => {
    
    const Router = useRouter();
    return ( 
        <div
        onClick={() => Router.push('/')}
         className="
         rounded-full
         h-14
         w-14
         p-4
         flex
         items-center
         justify-center
         hover:bg-white-300
         hover:bg-opacity-10
         cursor-pointer
         transition
        ">
            <RiTestTubeLine size={28} color="white" />
        </div>
    );
}

export default SidebarLogo;