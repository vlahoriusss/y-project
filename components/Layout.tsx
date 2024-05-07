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
                    <Sidebar />
                    <div className="
                        col-span-1 md:col-span-3
                        lg:col-span-2
                        mt-4 rounded-xl 
                        md:bg-neutral-900
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
