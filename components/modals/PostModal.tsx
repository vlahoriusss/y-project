
import { useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import Modal from "../Modal";
import usePostModal from "@/hooks/usePostModal";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Avatar from "../Avatar";
import Button from "../Button";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const PostModal = () => {
  const postModal = usePostModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      
      const url = '/api/posts';

      await axios.post(url, { body });

      toast.success('Post created');
      setBody('');
      mutatePosts();
      postModal.onClose(); 
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const Image = (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.96862 16H2.70703C1.69705 16 0.835932 15.2471 0.784032 14.2384C0.771521 13.9953 0.762531 13.7474 0.757812 13.4965M3.96862 16H13.7555C14.86 16 15.7555 15.1046 15.7555 14V3C15.7555 1.89543 14.86 1 13.7555 1H2.75781C1.65324 1 0.757812 1.89543 0.757812 3V7.5M3.96862 16L6.91533 13.25M6.91533 13.25L8.49747 11.7735C9.26587 11.0564 10.4582 11.0564 11.2266 11.7735L15.2197 15.5M6.91533 13.25L5.33318 11.7735C4.56479 11.0564 3.37244 11.0564 2.60405 11.7735L0.757812 13.4965M0.757812 13.4965V7.5M0.757812 7.5H4.50586C5.47236 7.5 6.25586 6.7165 6.25586 5.75V5.75C6.25586 4.7835 5.47236 4 4.50586 4H4.27547C3.63564 4 3.03523 4.30912 2.66353 4.82991L0.757812 7.5Z" stroke="white" stroke-width="1.5"/>
</svg>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postModal.isOpen}
      title="New Yap"
      actionLabel="Cancel"
      onClose={postModal.onClose}
      onSubmit={postModal.onClose}
      body={
        <div>
          <div className="flex flex-row items-start gap-4">
            <div>
              <Avatar userId={currentUser?.id} />
            </div>
            <div className="flex flex-col w-full">
              <textarea
                rows={3}
                disabled={isLoading}
                onChange={(event) => setBody(event.target.value)}
                value={body}
                className="
                  disabled:opacity-80
                  peer
                  resize-none 
                  mt-1
                  w-full 
                  bg-neutral-800
                  ring-0 
                  outline-none 
                  text-[20px] 
                  placeholder-neutral-500 
                  text-white
                  rounded-xl
                  px-3
                  py-2
                "
                placeholder="Start Yapping"
              />
              <hr 
                className="
                  opacity-0 
                  peer-focus:opacity-100 
                  h-[1px] 
                  w-full 
                  border-neutral-800 
                  transition"
              />
            <div className="flex items-center justify-between mt-3">
            <button className="flex items-center rounded-full text-white gap-2 bg-neutral-800 px-2 py-2 transition hover:bg-neutral-600 focus:outline-none">
        {Image} 
        <p className='text-sm'>Add image</p>
    </button>                <Button disabled={isLoading || !body} onClick={onSubmit} label="Yap" />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PostModal;
