import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

export const signup = async (email, password, setError) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    setError(null);
  } catch (error) {
    setError(error.message);
  }
};
