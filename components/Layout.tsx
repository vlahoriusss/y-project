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
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="
                        col-span-3
                        lg:col-span-2 
                        border-x-[1px]
                        border-neutral-800
                        ">
                    {children}
                    </div>
                    <div>
                    <FollowBar />
                    <SupportBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;