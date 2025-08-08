import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
/*import UserDetail from "./pages/UserDetail";*/
import Counter from './Counter';
import Greeting from './Greeting';
import UserList from './users'; 
import NameForm from './NameForm'; // Предполагается, что этот компонент уже существует
import ToggleBox from './ToggleBox';
import NameSubmitForm from './NameSubmitForm';
import TodoApp from './TodoApp';
import TodoFilter from './TodoFilter';
import { useEffect, useState } from 'react';
import {Routes, Route, Link } from "react-router-dom";
import UserPage from "./UserPage";
import PostApp from "./PostApp";
import ThemeButton from "./ThemeButton";
import CounterControls from "./CounterControls";
import { useTheme } from "./ThemeContext";




function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useTheme();
  const bg = state.mode === "light" ? "#fff" : "#111";
  const fg = state.mode === "light" ? "#111" : "#fff";

  // Загружаем список пользователей при запуске
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>
  if (!users.length) return <h2>No users found</h2>;

  return (

    <div style={{ background: bg, color: fg, minHeight: "100vh", padding: 24 }}>
      <h1>Context + Reducer demo</h1>
      <ThemeButton />
      <div style={{ marginTop: 16 }}>
        <CounterControls />
      </div>
    
    
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🌐 React Router Demo</h1>

        {/* Навигация */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <nav style={{ marginBottom: "20px" }}>
          {users.map(user => (
            <Link key={user.id} to={`/users/${user.id}`} style={{ margin: 10 }}>
              {user.name}
            </Link>
          ))}
        </nav>

        {/* Определение маршрутов */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/users/:id" element={<UserDetail />} />*/}
          <Route path="/users/:id/*" element={<UserPage users={users} />} />
          {/* обработка неизвестных путей */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>

        <PostApp />
        
        
        <Greeting name="pavel" color="red" />
        <h1>Reusable React Counter</h1>

        <Counter label="Positive" step={1} />
        <Counter label="Negative" step={-1} />

        <hr style={{ margin: '40px 0' }} />
        <UserList />  {/* ← Добавляем список пользователей */}
        <NameForm />
        <h1>Условный рендеринг</h1>

        <ToggleBox />
        <NameSubmitForm />
        <TodoApp />
        <TodoFilter />  
      </div>
    </div>
  );
}

export default App;
