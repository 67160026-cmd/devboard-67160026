import { useState } from "react";
import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

function HomePage() {
  const [posts, setPosts] = useState([]);

  function handleAddPost({ title, body }) {
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={handleAddPost} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default HomePage;
