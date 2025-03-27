"use client";

import Dock from "@/components/Dock";
import MyData from "@/components/MyData";
import PictureData from "@/components/PictureData";
import ProfileLayout from "@/components/ProfileLayout";
import { MoonIcon } from "@/components/ui/moon";
import { House, User, BriefcaseBusiness, Mail } from "lucide-react";

export default function Home() {
  const items = [
    {
      icon: <House size={24} color="white" />,
      label: "Home",
      // onClick: () => alert("Home!"),
    },
    {
      icon: <User size={24} color="white" />,
      label: "About",
      // onClick: () => alert("Archive!"),
    },
    {
      icon: <BriefcaseBusiness size={24} color="white" />,
      label: "Projects",
      // onClick: () => alert("Profile!"),
    },
    {
      icon: <Mail size={24} color="white" />,
      label: "Contact",
      // onClick: () => alert("Settings!"),
    },
  ];

  return (
    <div className="relative min-h-screen">
      <ProfileLayout>
        <MyData />
        <PictureData />
      </ProfileLayout>
      <div className="fixed bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-4 px-4">
        <div
          className="absolute bottom-4 z-20 bg-neutral-900 border-neutral-800 border rounded-xl p-2 mb-3"
          style={{ left: "calc(50% - 240px)" }}
        >
          <button>
            <MoonIcon size={24} color="white" />
          </button>
        </div>
        <Dock
          items={items}
          panelHeight={84}
          baseItemSize={60}
          magnification={70}
        />
      </div>
    </div>
  );
}
