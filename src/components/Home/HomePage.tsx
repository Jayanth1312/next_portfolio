import MyData from "@/components/Home/MyData";
import PictureData from "@/components/Home/PictureData";
import ProfileLayout from "@/components/Home/ProfileLayout";
// import Curtain from "@/components/Curtain";
import NavigationPane from "@/components/Navigation";

export default function HomePage() {
  return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="w-full h-full">
          <ProfileLayout>
            <MyData />
            <PictureData />
          </ProfileLayout>
          <NavigationPane />
        </div>
      </div>
  );
}
