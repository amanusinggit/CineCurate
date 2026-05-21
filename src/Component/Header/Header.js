import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

const Header = () => {
  const userEmail = useSelector((state) => state.users.user);
  return (
    <div className="flex justify-between w-full sticky z-10 border-b border-grain border-solid px-[3%] py-[2%]">
      <Logo />
      <div className="flex items-center gap-12">
        <Navbar />
        <Profile name={userEmail} needHover={true} />
      </div>
    </div>
  );
};

export default Header;
