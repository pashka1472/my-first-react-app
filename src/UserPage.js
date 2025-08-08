import { useParams, Link, Routes, Route  } from "react-router-dom";

function UserPage({ users }) {
  const { id } = useParams(); // берём id из URL
  const user = users.find(u => u.id === parseInt(id)); // ищем юзера по id

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 {user.name}</h2>

      {/* Навигация */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to={`/users/${user.id}/info`} style={{ marginRight: 10 }}>Info</Link>
        <Link to={`/users/${user.id}/posts`} style={{ marginRight: 10 }}>Posts</Link>
        <Link to={`/users/${user.id}/albums`}>Albums</Link>
      </nav>

      {/* Подмаршруты */}
      <Routes>
        <Route path="info" element={<UserInfo user={user} />} />
        <Route path="posts" element={<UserPosts userId={user.id} />} />
        <Route path="albums" element={<UserAlbums userId={user.id} />} />
      </Routes>
    </div>
  );
}

function UserInfo({ user }) {
    <div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
    </div>

}

function UserPosts({ userId }) {
  return <h3>📄 Posts of user {userId}</h3>;
}

function UserAlbums({ userId }) {
  return <h3>📸 Albums of user {userId}</h3>;
}

 
export default UserPage;
