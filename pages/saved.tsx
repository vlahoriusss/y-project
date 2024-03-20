import Header from "@/components/Header";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination:'/',
                permanent: false
            }
        }
    }
}

const Saved = () => {
    return (
        <>
        <Header label="Saved" showBackArrow />
        </>
    )
}

export default Saved;