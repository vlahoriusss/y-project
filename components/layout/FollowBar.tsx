import { useState } from 'react';
import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";

const FollowBar = () => {
    const { data: users = [] } = useUsers();
    const [showMore, setShowMore] = useState(false);
    const displayLimit = 3;

    if (users.length === 0) {
        return null;
    }

    const displayedUsers = showMore ? users : users.slice(0, displayLimit);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="px-2 hidden lg:block">
            <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
                <h2 className="text-white text-xl font-semibold">People</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {displayedUsers.map((user: Record<string, any>) => (
                        <div key={user.id} className="flex flex-row gap-4">
                            <Avatar userId={user.id} />
                            <div className="flex flex-col">
                                <p className="text-white font-semibold text-sm">
                                    {user.name}
                                </p>
                                <p className="text-neutral-400 text-sm">
                                    @{user.username}
                                </p>
                            </div>
                        </div>
                    ))}
                    {users.length > displayLimit && (
                        <button
                            className="text-neutral-400 font-semibold text-sm cursor-pointer focus:outline-none"
                            onClick={toggleShowMore}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FollowBar;
