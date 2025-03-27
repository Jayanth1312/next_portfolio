import Dock from "@/components/Dock";
import { MoonIcon } from "@/components/ui/moon";
import { House, User, BriefcaseBusiness, Mail } from "lucide-react";

export default function NavigationPane() {
  const items = [
    {
      icon: <House size={24} color="#e2e2d9" />,
      label: "Home",
      onClick: () => {},
    },
    {
      icon: <User size={24} color="#e2e2d9" />,
      label: "About",
      onClick: () => {},
    },
    {
      icon: <BriefcaseBusiness size={24} color="#e2e2d9" />,
      label: "Projects",
      onClick: () => {},
    },
    {
      icon: <Mail size={24} color="#e2e2d9" />,
      label: "Contact",
      onClick: () => {},
    },
  ];

    return (
      <div className="fixed bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-4 px-4">
        <div
          className="absolute bottom-4 z-20 bg-neutral-900 border-neutral-800 border rounded-xl p-2 mb-2"
          style={{ left: "calc(50% - 240px)" }}
        >
          <button>
            <MoonIcon size={24} color="#e2e2d9" />
          </button>
        </div>
        <Dock
          items={items}
          panelHeight={76}
          baseItemSize={60}
          magnification={70}
        />
      </div>
    );
}
