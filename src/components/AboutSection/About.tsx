import { MagicText } from "./Magictext";
import { CircleUserRound } from "lucide-react";
export default function About() {
  return (
    <div className="h-[30rem] px-32 relative flex items-start justify-center">
      <MagicText
        text={`"I love problem-solving, exploring new tech stacks, and building apps that make life easier. Open-source projects and UI/UX experiments keep me excited about coding. When I’m not writing code, you’ll find me learning about design, reading tech blogs, or brainstorming my next big project."`}
      />
    </div>
  );
}
