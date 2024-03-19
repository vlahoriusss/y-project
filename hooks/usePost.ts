import useSWR, { mutate as swrMutate } from "swr";
import fetcher from "@/libs/fetcher";

const usePost = (postId: string) => {
  const url = `/api/posts/${postId}`;

  const { data, error, isLoading, mutate } = useSWR(
    postId ? url : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export const useDeletePost = (postId: string) => {
  const deletePost = async () => {
    try {
      await fetch(`/api/posts/${postId}?to_delete=true`, {
        method: "GET",
      });

      swrMutate(`/api/posts/${postId}`, null, false);
    } catch (error) {}
  };

  return {
    deletePost,
  };
};

export default usePost;