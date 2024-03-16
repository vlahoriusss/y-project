import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { useCallback, useState } from "react";

import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        LoginModal.onClose();
        RegisterModal.onOpen();
    }, [isLoading, RegisterModal, LoginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await signIn('credentials', {
                email,
                password
            })

            LoginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [LoginModal, email, password]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
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
            <p>First Time? </p>
            <span
            onClick={onToggle}
             className="
              text-white
              cursor-pointer
              hover:underline
             "
            > Create an Account </span>
        </div>
    )
        
    return (
        <Modal
         disabled={isLoading}
         isOpen={LoginModal.isOpen}
         title="Login"
         actionLabel="Sign in"
         onClose={LoginModal.onClose}
         onSubmit={onSubmit}
         body={bodyContent}
         footer={footerContent}
        />
    );
}

export default LoginModal;