function PostCount({ posts }) {
  const count = posts.length;
  return (
    <div style={{ color: "#718096", fontSize: "0.85rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </div>
  );
}

export default PostCount;
