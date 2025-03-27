import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-24 flex flex-row gap-56 w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
