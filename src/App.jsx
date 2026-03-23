import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import AddPostForm from "./components/AddPostForm";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [posts, setPosts] = useState([]);

  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  }

  function handleAddPost({ title, body }) {
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div>
      <Navbar favoriteCount={favorites.length} />

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <AddPostForm onAddPost={handleAddPost} />
          <PostList
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            posts={posts}
            setPosts={setPosts}
          />
        </div>
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
