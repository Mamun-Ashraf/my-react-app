import useAuth from "../../hooks/useAuth";
import userProfilePic from "../../assets/placeholder.jpg";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="flex flex-col items-center my-5 text-2xl text-primary font-medium underline">
        Users information
      </h2>
      <div className="avatar flex flex-col items-center mb-5">
        <div className="w-12 rounded-full border-2 border-black">
          <img src={user?.photoURL || userProfilePic} />
        </div>
      </div>
      <p className="ms-5 mb-3">
        <span className="text-lg font-medium">Name:</span> {user?.name}
      </p>
      <p className="ms-5">
        <span className="text-lg font-medium">Email:</span> {user?.email}
      </p>
    </div>
  );
};

export default Dashboard;
