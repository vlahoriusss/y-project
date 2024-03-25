import { useCallback, useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import Modal from "../Modal";
import usePostModal from "@/hooks/usePostModal";
import Form from "../Form";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const PostModal = () => {
  const postModal = usePostModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      disabled={isLoading}
      isOpen={postModal.isOpen}
      title="Yap"
      actionLabel="Cancel"
      onClose={postModal.onClose}
      onSubmit={postModal.onClose}
      body={<Form placeholder="Y not Yap?" />}
    />
  );
};

export default PostModal;