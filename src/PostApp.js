import { useState, useEffect } from "react";

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Загружаем список постов
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  // Добавление поста (Create)
  const addPost = async () => {
    const newPost = {
      title,
      body,
      userId: 1,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application   /json" },
      body: JSON.stringify(newPost),
    });
    const data = await res.json();

    setPosts([data, ...posts]); // добавляем в начало
    setTitle("");
    setBody("");
  };

  // Удаление поста (Delete)
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter(p => p.id !== id));
  };

  // Обновление поста (Update)
  const updatePost = async (id) => {
    const updated = {
      title: title || "Updated title",
      body: body || "Updated body",
    };

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    const data = await res.json();

    setPosts(posts.map(p => (p.id === id ? data : p)));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📌 CRUD Posts</h2>

      {/* Форма добавления */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addPost}>Add Post</button>

      {/* Список постов */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginTop: "15px" }}>
            <b>{post.title}</b>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>❌ Delete</button>
            <button onClick={() => updatePost(post.id)} style={{ marginLeft: "10px" }}>
              ✏️ Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostApp;
