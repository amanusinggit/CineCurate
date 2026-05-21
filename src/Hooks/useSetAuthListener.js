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
    console.log("mounting");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("auth changed.");
      console.log("user", user);
      if (user) {
        dispatch(setUser(user.email));
        console.log("redux set. navigating");
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/sign/in");
      }
    });
    return () => {
      unsubscribe();
      console.log("unmounting");
    };
  }, [dispatch, navigate]);
};

export default useSetAuthListener;
