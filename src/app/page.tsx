"use client";

import MyData from "@/components/MyData";
import PictureData from "@/components/PictureData";
import ProfileLayout from "@/components/ProfileLayout";

export default function Home() {
  return (
    <ProfileLayout>
      <MyData />
      <PictureData />
    </ProfileLayout>
  );
}
