"use client";

import { useRef } from "react";
import VariableProximity from "@/components/Home/VariableProximity";
import { DownloadIcon } from "../ui/download";
import { GithubIcon } from "../ui/github";
import { InstagramIcon } from "../ui/instagram";
import { LinkedinIcon } from "../ui/linkedin";
import DecryptedText from "./DecryptedText";

export default function MyData() {
  const containerRef = useRef(null);

  return (
    <div className="data-container flex flex-col gap-10">
      <div
        className="font-semibold text-4xl flex flex-col gap-4 relative name-div"
        ref={containerRef}
      >
        <VariableProximity
          label={"Jayanth. Paladugu"}
          className={"variable-proximity-demo"}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      <div className="notion-div">
        <p className="italic"> - Console. Code. Create. Repeat</p>
      </div>
      <div className="flex flex-col">
        <DecryptedText
          text="I'm an application developer passionate about crafting"
          animateOn="view"
          revealDirection="start"
          speed={60}
          maxIterations={10}
          className="text-neutral-500"
          sequential={true}
          useOriginalCharsOnly={true}
        />
        <DecryptedText
          text="seamless digital experiences, always exploring"
          animateOn="view"
          revealDirection="start"
          speed={30}
          maxIterations={10}
          className="text-neutral-500"
          sequential={true}
          useOriginalCharsOnly={true}
        />
        <DecryptedText
          text="new ways to push technology forward."
          animateOn="view"
          revealDirection="start"
          speed={30}
          maxIterations={10}
          className="text-neutral-500"
          sequential={true}
          useOriginalCharsOnly={true}
        />
      </div>
      <div className="flex flex-row gap-4">
        <button className="">
          <DownloadIcon size={24} />
        </button>
        <button className="">
          <GithubIcon size={24} />
        </button>
        <button className="">
          <InstagramIcon size={24} />
        </button>
        <button className="">
          <LinkedinIcon size={24} />
        </button>
      </div>
    </div>
  );
}
