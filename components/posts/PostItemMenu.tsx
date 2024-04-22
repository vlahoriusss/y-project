import { BiBlock, BiDotsHorizontal, BiFlag } from "react-icons/bi";
import { BsMicMute, BsPersonAdd, BsPersonDash } from "react-icons/bs";
import { useRouter } from "next/router";
import useFollow from "@/hooks/useFollow";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface PostItemProps {
    data: Record<string, any>;
    userId?: string;
}

const PostItemDots: React.FC<PostItemProps> = ({ data = {}, userId }) => {
    const { data: currentUser } = useCurrentUser();
    const { data: fetchedUser } = useUser(userId || '');
    const { isFollowing, toggleFollow } = useFollow(userId || '');

    return (
        <div>
            <HoverCard>
                <HoverCardTrigger>
                    <BiDotsHorizontal className="text-neutral-500" size={20} />
                </HoverCardTrigger>
                <HoverCardContent onClick={(event) => event.stopPropagation()} className="flex flex-row flex-wrap gap-5">
                    {currentUser?.id !== userId && (
                        <div className="flex flex-row w-full gap-5" onClick={toggleFollow}>
                            {isFollowing ? <BsPersonDash size={20}/> : <BsPersonAdd size={20}/> }
                            <p>{isFollowing ? 'Unfollow' : 'Follow'} @{data.user.username}</p>
                        </div>
                    )}
                    <div className="flex flex-row w-full gap-5">
                        <BsMicMute size={20} />
                        <p>Mute @{data.user.username}</p>
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <BiBlock size={20} />
                        <p>Block @{data.user.username}</p>
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <BiFlag size={20} />
                        <p>Report</p>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default PostItemDots;
