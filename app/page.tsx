"use client";

import { useState } from "react";

export default function Home() {
  const [cur_theme, set_theme] = useState("theme_red");

  const changeColor = (color: string) => {
    set_theme(color);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="flex space-x-4">
        <button
          className=""
          onClick={() => {
            changeColor("theme_red");
          }}
        >
          red
        </button>
        <button
          className=""
          onClick={() => {
            changeColor("theme_blue");
          }}
        >
          blue
        </button>
        <button
          className=""
          onClick={() => {
            changeColor("theme_green");
          }}
        >
          green
        </button>
      </div>
      <div
        className={`w-[64px] h-[64px] bg-skin-fill  text-skin-base rounded-md flex justify-center items-center ${cur_theme} ${
          cur_theme === "theme_green" && "text-skin-muted"
        } hover:bg-skin-button-accent transition-all cursor-pointer`}
      >
        Box
      </div>
    </main>
  );
}
