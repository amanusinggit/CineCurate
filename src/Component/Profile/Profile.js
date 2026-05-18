const Profile = ({ name }) => {
  return (
    <div className="w-12 flex items-center">
      <div className="w-full flex justify-center items-center font-semiboldbold text-xl aspect-square rounded-full bg-gold-800 border border-gold-200/50 text-gold-bright">
        {name[0].toUpperCase()}
      </div>
    </div>
  );
};

export default Profile;
