import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import axios from "axios";

import { useCallback, useState } from "react";

import Input from "@/components/Input";
import Modal from "@/components/Modal";

const RegisterModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        RegisterModal.onClose();
        LoginModal.onOpen();
    }, [isLoading, RegisterModal, LoginModal]);

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

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            });

            toast.success('Account created.');

            signIn('credentials', {
                email,
                password
            });

            RegisterModal.onClose();
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong.');
        } finally {
            setIsLoading(false);
        }
    }, [RegisterModal, email, password, username, name]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             disabled={isLoading}
            />
            <Input
             placeholder="Name"
             onChange={(e) => setName(e.target.value)}
             value={name}
             disabled={isLoading}
            />
            <Input
             placeholder="Username"
             onChange={(e) => setUsername(e.target.value)}
             value={username}
             disabled={isLoading}
            />
            <Input
             placeholder="Password"
             type="password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an Account? </p>
            <span
            onClick={onToggle}
             className="
              text-white
              cursor-pointer
              hover:underline
             "
            > Sign In</span>
        </div>
    )
        
    return (
        <Modal
         disabled={isLoading}
         isOpen={RegisterModal.isOpen}
         title="Create Account"
         actionLabel="Register"
         onClose={RegisterModal.onClose}
         onSubmit={onSubmit}
         body={bodyContent}
         footer={footerContent}
        />
    );
}

export default RegisterModal;
