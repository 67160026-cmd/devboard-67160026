import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        โพสต์ล่าสุด
      </h2>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <button
            onClick={() => onDelete(post.id)}
            style={{
              backgroundColor: "#dc2626", // สีแดง
              color: "white",
              border: "none",
              padding: "0.4rem 0.8rem",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            ลบโพสต์
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
