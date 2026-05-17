import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="flex justify-between w-full sticky border-b border-grain border-solid px-[3%] py-[2%]">
      <Logo />
      <div className="flex items-center gap-12">
        <Navbar />
        <div className="text-celluloid">profile</div>
      </div>
    </div>
  );
};

export default Header;
