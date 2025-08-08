import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams(); // достаем id из URL

  return (
    <div>
      <h2>👤 User Detail</h2>
      <p>User ID: {id}</p>
    </div>
  );
}
