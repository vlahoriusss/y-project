import BackIcon from "@/fonts/back";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow}) => {
    const router = useRouter();

    const handleBack = useCallback( () => {
        router.back();
    }, [router]);

    const Arrow = (
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7C13 6.63228 12.8112 6.30845 12.5249 6.11935C12.3571 6.00852 12.1558 5.94396 11.9394 5.94396H4.81561C6.02802 4.81677 6.98876 3.21391 7.02899 1.18839C7.02914 1.18127 7.02927 1.17415 7.02938 1.16703C7.03 1.13017 7.03031 1.09318 7.03031 1.05604C7.03031 0.472806 6.55545 0 5.96969 0C5.38393 0 4.90908 0.472806 4.90908 1.05604C4.90908 1.10042 4.90842 1.14453 4.90712 1.18839C4.86402 2.6373 4.11555 3.80111 3.09378 4.63967C2.48971 5.13542 1.82969 5.48421 1.23384 5.69558C1.16853 5.71874 1.104 5.74026 1.04039 5.76014C0.481512 5.9348 0 6.41677 0 7C0 7.58323 0.481512 8.0652 1.04039 8.23986C1.104 8.25974 1.16853 8.28126 1.23384 8.30442C1.82969 8.51579 2.48971 8.86458 3.09378 9.36033C4.14648 10.2243 4.90908 11.4335 4.90908 12.944C4.90908 13.2579 5.04665 13.5398 5.26503 13.7332C5.45238 13.8992 5.69921 14 5.96969 14C6.24018 14 6.48701 13.8992 6.67436 13.7332C6.89274 13.5398 7.03031 13.2579 7.03031 12.944C7.03031 10.8558 6.05431 9.20767 4.81561 8.05604H11.9394C12.1558 8.05604 12.3571 7.99148 12.5249 7.88065C12.8112 7.69155 13 7.36772 13 7Z" fill="white"/>
</svg>

    )

    return (
        <div className="border-b[1px] border-neutral-80 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <BackIcon
                         onClick={handleBack}
                         color="white"
                         size={20}
                         className="
                          cursor-pointer
                          hover:opacity-70
                          transition
                         "
                        />
                    )
                }
                <h1 className="text-white text-xl font-agrandir">{label}</h1>
            </div>

        </div>
    );
}

export default Header;