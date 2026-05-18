import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className="flex justify-between w-full sticky border-b border-grain border-solid px-[3%] py-[2%]">
      <Logo />
      <div className="flex items-center gap-12">
        <Navbar />
        <Profile name="Aman" />
      </div>
    </div>
  );
};

export default Header;
