import axios from "axios";
import { useCallback, useMemo, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";

const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);
  const [likeQueue, setLikeQueue] = useState<string[]>([]); 
  const [processing, setProcessing] = useState(false); 
  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [fetchedPost, currentUser]);

  const processLikeQueue = async () => {
    if (likeQueue.length === 0 || processing) return;

    try {
      setProcessing(true);
      const postId = likeQueue[0];
      const request = hasLiked ? axios.delete('/api/like', { data: { postId } }) : axios.post('/api/like', { postId });
      await request;
      await mutateFetchedPost();
      await mutateFetchedPosts();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setProcessing(false);
      setLikeQueue(prevQueue => prevQueue.slice(1)); 
    }
  };

  useEffect(() => {
    processLikeQueue();
  }, [likeQueue, processing]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    const newQueue = [...likeQueue, postId];
    setLikeQueue(newQueue);
  }, [currentUser, postId, likeQueue, loginModal]);

  return {
    hasLiked,
    toggleLike,
  };
};


export default useLike;
