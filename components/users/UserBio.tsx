import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { format } from 'date-fns';
import Button from "../Button";
import { useMemo } from "react";
import { LuCalendar } from "react-icons/lu";
import useEditModal from "@/hooks/useEditModal";
import useFollow from "@/hooks/useFollow";

interface UserBioProps{
    userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
    const { data: currentUser } = useCurrentUser();
    const { data: fetchedUser } = useUser(userId);
    const router = useRouter();

    const editModal = useEditModal();

    const { isFollowing, toggleFollow } = useFollow(userId);

    const createdAt = useMemo(() => {
        if (!fetchedUser?.createdAt) {
            return null;
        }
         
        return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');

    }, [fetchedUser?.createdAt]);

    const handleSettingsClick = () => {
        router.push("/settings");
    };

    const Cal = (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.63177V15.1318V15.1318C1 15.9602 1.67157 16.6318 2.5 16.6318H18C18.8284 16.6318 19.5 15.9602 19.5 15.1318V15.1318V6.74536C19.5 4.10174 17.9597 0.531535 15.5 1.50049V1.50049C13.2898 2.37116 12.9481 3.76306 14.5 6.63177C16.0519 9.50049 22.5 7.63177 22.5 7.63177" stroke="white" stroke-width="1.5"/>
<circle cx="5" cy="7.36914" r="1" fill="white"/>
<circle cx="10" cy="7.36914" r="1" fill="white"/>
<circle cx="5" cy="12.3691" r="1" fill="white"/>
<circle cx="10" cy="12.3691" r="1" fill="white"/>
<circle cx="15" cy="12.3691" r="1" fill="white"/>
</svg>

    );

    return (
        <div className="border-b-[1px] border-neutral-800 pb-4">
         <div className="flex justify-end p-4">
            {currentUser?.id == userId ? (
             <Button secondary label="Settings" onClick={handleSettingsClick} />
            ) : (
                <Button 
                 onClick={toggleFollow}
                 label={isFollowing ? 'Unfollow' : 'Follow'}
                 secondary={!isFollowing}
                 outline={isFollowing}
                />
            )}

         </div>
         <div className="mt-1 px-4">
            <div className="flex flex-col">
                <p className="text-white text-2xl font-agrandir">
                    {fetchedUser?.name}
                </p>
                <p className="text-md text-neutral-500 font-agrandir">
                    @{fetchedUser?.username}
                </p>
            </div>
             <div className="flex flex-col mt-4">
                <p className="text-white">
                    {fetchedUser?.bio}
                </p>
                <div
                 className="
                  flex
                  flex-row
                  items-center
                  gap-2
                  mt-2
                  text-white
                 "
                >
                    {Cal}
                    <p>
                        Joined {createdAt}
                    </p>
                </div>
             </div>
             <div className="flex flex-row items-center mt-4 gap-6">
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white font-bold">
                        {fetchedUser?.followingIds?.length}
                    </p>
                    <p className="text-white">
                        Following
                    </p>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white font-bold">
                        {fetchedUser?.followersCount || 0}
                    </p>
                    <p className="text-white">
                        Followers
                    </p>
                </div>

             </div>
         </div>
        </div>
    );
}

export default UserBio;