import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
    <Header label="For you" />
    <Form placeholder="What's going on?" />
    <PostFeed />
    </>
  )
}
