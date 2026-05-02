"use client";

import { UpdateProfileForm } from "@/components/UpdateProfileForm";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import 'animate.css';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  if (!user) {
    return (
      <p className="text-center flex justify-center items-center text-4xl min-h-screen text-orange-500">
        No user logged in
      </p>
    );
  }
  return (
    <div className="my-30 flex items-center justify-center px-4">
      <Card className="animate__animated animate__bounce animate w-full bg-orange-50 max-w-md pt-20 shadow-xl text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="w-30 h-30 text-lg">
            <Avatar.Image
              alt={user?.name}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback className="text-2xl">
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">{user?.name}</h2>

        <p className="text-gray-500 mt-1">{user?.email}</p>

        <div className="text-center mt-10">
          <UpdateProfileForm />
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
