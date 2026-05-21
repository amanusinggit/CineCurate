import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const Profile = ({ name, needHover }) => {
  const [show, setShow] = useState(false);

  const handleClick = async () => {
    await signOut(auth);
  };
  return (
    name && (
      <>
        <div
          className="w-12 flex items-center"
          onClick={() => {
            setShow(true);
          }}
        >
          <div className="w-full flex justify-center items-center font-semiboldbold text-xl aspect-square rounded-full bg-gold-800 border border-gold-200/50 text-gold-bright">
            {name[0].toUpperCase()}
          </div>

          {show && (
            <div
              className="justify-center absolute w-[300px]  top-full right-0 bg-studio border border-frame px-4 py-5 pt-2 m-3 r-3 text-center z-20 rounded-xl flex flex-col"
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              <div className="flex gap-4 my-3 border border-frame justify-center px-2 py-3 rounded-lg">
                <Profile name={name} needHover={false} />
                <p className="my-3">{name}</p>
              </div>
              <button
                className="w-full text-void bg-gold-bright rounded-lg px-5 py-2 font-semibold"
                onClick={handleClick}
              >
                sign out
              </button>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Profile;
