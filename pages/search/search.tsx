import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import SearchBar from "@/components/SearchBar";
const Search = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);
  return (
    <div className="flex flex-col">
      <div className="mt-5">
        <SearchBar onSearch={(searchText: string) => console.log(searchText)} />
      </div>
    </div>
  );
};

export default Search;