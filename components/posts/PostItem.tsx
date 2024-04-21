import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import { LuMessageCircle } from "react-icons/lu";
import { BiDislike, BiLike } from "react-icons/bi";
import useLike from "@/hooks/useLike";
import useDislike from "@/hooks/useDislike";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import PostItemDots from "../posts/PostItemMenu";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";

interface PostItemProps {
    data: Record<string, any>;
    userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const { data: currentUser } = useCurrentUser();

    const { hasLiked, toggleLike } = useLike({ postId: data.id, userId });

    const { hasDisliked, toggleDislike } = useDislike({ postId: data.id, userId });

    const goToUser = useCallback((event: any) => {
        event.stopPropagation();
        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id]);

    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
    }, [router, data.id]);

    const onLike = useCallback((event: any) => {
        event.stopPropagation();
        if (!currentUser) {
            return loginModal.onOpen();
        }
        toggleLike();
    }, [loginModal, currentUser, toggleLike]);

    const onDislike = useCallback((event: any) => {
        event.stopPropagation();
        if (!currentUser) {
            return loginModal.onOpen();
        }
        toggleDislike();
    }, [loginModal, currentUser, toggleDislike]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }
        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    const LikeIcon = hasLiked ? BiSolidLike : BiLike;
    const DislikeIcon = hasDisliked ? BiSolidDislike : BiDislike;

    const isPostBodyValid = useMemo(() => {
        return data.body.length <= 200;
    }, [data.body]);

    return (
        <div
            onClick={goToPost}
            className="
          border-b-[1px]
          border-neutral-800
          p-5
          cursor-pointer
          hover:bg-neutral-900
          transition
         "
        >
            <div className="flex flex-row items-start gap-3 ">
                <Avatar userId={data.user.id} />
                <div>
                    <div
                        className="
                     flex flex-row items-center gap-2
                     "
                    >
                        <p
                            onClick={goToUser}
                            className="
                          text-white
                          font-semibold
                          cursor-pointer
                          hover:underline
                         "
                        >{data.user.name}</p>
                        <span
                            onClick={goToUser}
                            className="
                         text-neutral-500
                         cursor-pointer
                         hover:underline
                         hidden
                         md:block
                        ">
                            @{data.user.username}
                        </span>
                        <span className="text-neutral-500 text-sm">
                            {createdAt}
                        </span>
                    </div>
                    <div className="text-white mt-1">
                        {isPostBodyValid ? data.body : `${data.body.slice(0, 200)}...`}
                    </div>
                    <div className="flex flex-row items-center mt-3 gap-6">
                        <div
                            onClick={onLike}
                            className="
                         flex
                         flex-row
                         items-center
                         text-white
                         gap-2
                         cursor-pointer
                         transition
                         hover:text-red-500
                         relative
                        "
                        >
                            <div className="like-icon-circle h-10 w-10 flex items-center justify-center rounded-full  bg-gradient-to-br from-customGreen to-customGold">
                                <LikeIcon size={20} color={hasLiked ? 'white' : ''} />
                            </div>
                            <p>{data.likedIds.length}</p>
                        </div>
                        <div
                            onClick={onDislike}
                            className="
                         flex
                         flex-row
                         items-center
                         text-neutral-500
                         gap-2
                         cursor-pointer
                         transition
                         hover:text-white
                         relative
                        "
                        >
                            <div className="dislike-icon-circle h-10 w-10 flex items-center justify-center rounded-full bg-neutral-800">
                                <DislikeIcon size={20} />
                            </div>
                            <p>{data.dislikedIds?.length}</p>
                        </div>
                        <div
                            className="
                         flex
                         flex-row
                         items-center
                         gap-2
                         cursor-pointer
                         transition
                         text-white
                         relative
                        "
                        >
                            <div className="comment-icon-circle h-10 w-10 flex items-center justify-center rounded-full bg-neutral-800">
                                <LuMessageCircle size={20} />
                            </div>
                            <div>{data.comments?.length || 0}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
