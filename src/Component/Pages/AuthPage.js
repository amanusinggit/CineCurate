import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { useNavigate, useParams } from "react-router";
import { validateEmail, validatePassword } from "../../Utility/validations";
import useSetAuthListener from "../../Hooks/useSetAuthListener";
import { signup } from "../../Firebase/signup";
import { signin } from "../../Firebase/signin";
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_TMDB_TOKEN,
  REACT_APP_GEMNI_API_KEY,
} = process.env;

const AuthPage = () => {
  console.log("tmdb", REACT_APP_TMDB_TOKEN);
  console.log("firebase", REACT_APP_FIREBASE_API_KEY);
  console.log("gemini", REACT_APP_GEMNI_API_KEY);
  const { authType } = useParams();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useSetAuthListener();

  const handleClick = () => {
    const emailValidationMessage = validateEmail(email);
    if (emailValidationMessage !== null) {
      setError(emailValidationMessage);
      return;
    }
    const passwordValidationMessage = validatePassword(password);
    if (passwordValidationMessage !== null) {
      setError(passwordValidationMessage);
      return;
    }
    setError(null);
    if (authType === "up") {
      signup(email, password, setError);
    } else {
      signin(email, password, setError);
    }
  };

  const toggleAuth = () => {
    if (authType === "up") {
      navigate("/sign/in");
    } else {
      navigate("/sign/up");
    }
  };

  return (
    <div className="h-screen relative bg-void flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,#E8C54712_0%,transparent_60%),radial-gradient(ellipse_at_10%_80%,#E0525215_0%,transparent_40%)]"></div>
      <div className="relative z-10  w-[464px] flex justify-center flex-col gap-6">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="bg-studio px-9 py-12 border border-frame  rounded-xl">
          <div className="text-3xl mb-9 font-semibold">
            {authType === "up" ? "Create Account" : "Sign In"}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <div className="my-6">
              <label
                htmlFor="email"
                className="block text-ash my-2 rounded-lg border-frame bg-studio font-semibold text-xs"
              >
                EMAIL
              </label>
              <input
                type="email"
                className="w-full px-5 py-4 rounded-lg bg-studio border border-ash/20"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-6">
              <label
                htmlFor="password"
                className="block text-ash my-2 rounded-lg border-frame bg-studio font-semibold text-xs"
              >
                PASSWORD
              </label>
              <input
                type="password"
                className="w-full px-5 py-4 rounded-lg bg-studio border border-ash/20"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-xs text-red-500 text-center">{error}</p>
            )}
            <input
              type="submit"
              className="text-void bg-gold-bright rounded-lg px-5 py-4 mt-12 font-semibold flex-grow w-full active:scale-95 transition"
              value={authType === "up" ? "Create" : "Sign In"}
            />
          </form>
        </div>
        <div className=" text-ash flex items-center justify-center gap-3">
          {authType === "up" ? (
            <p>Already have an account?</p>
          ) : (
            <p>Don't have an account?</p>
          )}
          <span className="text-dusk">
            <button className="cursor-pointer" onClick={toggleAuth}>
              {authType === "up" ? "Sign in" : "Sign up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
