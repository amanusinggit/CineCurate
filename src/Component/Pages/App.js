import { Outlet, useNavigate } from "react-router";
import Header from "../Header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../features/Movies/userSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/sign/in");
      }
    });
    return unsubscribe;
  }, [dispatch, navigate]);
  return (
    <div className="bg-void min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
