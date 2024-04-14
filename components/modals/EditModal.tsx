import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import ImageUpload from "@/components/ImageUpload";

const EditModal = () => {
    const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
    const editModal = useEditModal();

    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUserame] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUserame(currentUser?.username);
        setBio(currentUser?.bio);
    }, [currentUser])

    const [isLoading, setIsLoading] = useState(false);
    

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            if (username.length > 15) {
                toast.error('Username cannot have more than 15 characters');
                return;
            }

            if (name.length > 15) {
                toast.error('Name cannot have more than 15 characters');
                return;
            }

            const invalidCharsRegex = /[^a-zA-Z0-9]/;

            if (invalidCharsRegex.test(username)) {
                toast.error('Username cannot contain spaces');
                return;
            }

            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage,
                coverImage
            });
            mutateFetchedUser();

            toast.success('Updated');

            editModal.onClose();
        } catch (error) {
            toast.error('Something went wrong.')
        } finally {
            setIsLoading(false)
        }
    }, [bio, name, username, profileImage, coverImage, editModal, mutateFetchedUser]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <ImageUpload 
             value={profileImage}
             disabled={isLoading}
             onChange={(image) => setProfileImage(image)}
             label="Upload Profile Image"
             style={{ maxWidth: '100px', maxHeight: '100px' }} 
            />
            <ImageUpload 
             value={coverImage}
             disabled={isLoading}
             onChange={(image) => setCoverImage(image)}
             label="Upload Cover Image"
            />
            <Input 
             placeholder="Name"
             onChange={(e) => setName(e.target.value)}
             value={name}
             disabled={isLoading}
            />
            <Input 
             placeholder="Username"
             onChange={(e) => setUserame(e.target.value)}
             value={username}
             disabled={isLoading}
            />
            <Input 
             placeholder="Bio"
             onChange={(e) => setBio(e.target.value)}
             value={bio}
             disabled={isLoading}
            />

        </div>
    )

    return (
        <Modal
         disabled={isLoading}
         isOpen={editModal.isOpen}
         title="Edit your Account"
         actionLabel="Save"
         onClose={editModal.onClose}
         onSubmit={onSubmit}
         body={bodyContent}

        />
    );
}

export default EditModal