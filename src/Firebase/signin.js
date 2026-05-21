import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

export const signin = async (email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setError(null);
  } catch (error) {
    setError(error.message);
    console.log(error);
  }
};
