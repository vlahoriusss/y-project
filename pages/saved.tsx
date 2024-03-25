import Header from "@/components/Header";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
        props: {
          session,
        },
      };
}

const Saved = () => {
    const router = useRouter();
    
    const handleRedirectHome = () => {
      router.push('/');
    };

    return (
        <>
            <Header label="Saved" showBackArrow />
            <section className='mt-7'>
                <div className="flex justify-center items-center h-full">
                    <div className="text-center">
                        <img src="/images/nosaves.png" alt="No bookmarks" className="mx-auto" style={{ width: "76%" }} />
                        <h2 className="text-xl text-white font-semibold mt-6">Feeling inspired? Save a yap.</h2> 
                    </div>
                </div>
            </section>
        </>
    );
};

export default Saved;
