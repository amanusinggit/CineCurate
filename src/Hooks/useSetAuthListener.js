import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../features/Movies/userSlice";
import { auth } from "../Firebase/firebase.config";
import { useNavigate } from "react-router";

const useSetAuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);
};

export default useSetAuthListener;
