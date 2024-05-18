import useSWR from "swr";

import fetcher from '@/libs/fetcher'

const useUsers = (p0: { orderBy: string; }) => {
    const {
         data,
        error,
        isLoading,
        mutate
     } =useSWR('/api/users', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUsers;