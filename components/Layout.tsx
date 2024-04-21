import FollowBar from "./layout/FollowBar";
import SupportBar from './layout/SupportBar'
import Sidebar from "./layout/Sidebar"
import { GeistSans } from 'geist/font/sans';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="h-screen bg-stone-950 {GeistSans.className}">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 h-full">
                    <div className="md:col-span-1 md:flex md:flex-col md:justify-between">
                        <Sidebar />
                        <div className="md:hidden">
                            <SupportBar />
                            <FollowBar />
                        </div>
                    </div>
                    <div className="
                        col-span-1 md:col-span-3
                        lg:col-span-2 
                        border-x-[1px]
                        border-neutral-800
                        ">
                        {children}
                    </div>
                    <div className="hidden md:block">
                        <SupportBar />
                        <FollowBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
