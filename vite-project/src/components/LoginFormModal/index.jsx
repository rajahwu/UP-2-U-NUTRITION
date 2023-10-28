import { useNavigate } from 'react-router-dom'
import "./LoginForm.css";
import { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { logout } from "../../store/session";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      navigate('/our-story');
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <form onSubmit={handleSubmit} className="p-10 flex flex-col justify-center items-center w-full">
          <h1 className="text-5xl p-1">Log In</h1>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className="text-3xl">Email</label>
          <input
            className="bg-slate-400"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="text-3xl">Password</label>
          <input
            className="bg-slate-400"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-white w-full border-black p-2 text-2xl" type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default LoginFormModal;

