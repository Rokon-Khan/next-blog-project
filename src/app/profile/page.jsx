"use client";

import ProtectedRoute from "../hoc/protectedRoute";

const Profile = ({ user }) => {
  return (
    <div className="card flex-col item items-center max-w-sm mx-auto p-4 text-center shadow-xl rounded-lg bg-slate-200 my-4 ">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="./user.png"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold">
        Welcome, to your Profile {user?.first_name || "User"}!
      </h1>
    </div>
  );
};

export default ProtectedRoute(Profile);
