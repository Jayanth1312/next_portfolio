"use client";

import React from "react";
import { Drawer } from "vaul";

interface VaulDrawerProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  links?: Array<{
    label: string;
    url: string;
  }>;
}

const VaulDrawer: React.FC<VaulDrawerProps> = ({
  trigger,
  title,
  children,
  variant = "dark",
  links = [],
}) => {
  const isDark = variant === "dark";

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={`flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-20 ${
            isDark ? "bg-black" : "bg-gray-100"
          }`}
        >
          <div
            className={`p-4 ${
              isDark ? "bg-[#1e1e1e]" : "bg-white"
            } rounded-t-[10px] flex-1`}
          >
            <div
              aria-hidden
              className={`mx-auto w-12 h-1.5 flex-shrink-0 rounded-full ${
                isDark ? "bg-neutral-700" : "bg-gray-300"
              } mb-8`}
            />
            <div className="max-w-md mx-auto">
              <Drawer.Title
                className={`font-bold text-xl mb-4 ${
                  isDark ? "text-[#e2e2d9]" : "text-gray-900"
                }`}
              >
                {title}
              </Drawer.Title>
              <div className={isDark ? "text-neutral-400" : "text-gray-600"}>
                {children}
              </div>
            </div>
          </div>

          {links.length > 0 && (
            <div
              className={`p-4 ${
                isDark
                  ? "bg-neutral-900"
                  : "bg-gray-100 border-t border-gray-200"
              } mt-auto`}
            >
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                {links.map((link, index) => (
                  <a
                    key={index}
                    className={`text-xs ${
                      isDark ? "text-neutral-400" : "text-gray-600"
                    } flex items-center gap-0.25`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default VaulDrawer;
